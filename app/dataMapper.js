const database = require('./database');

const dataMapper = {

  getAllActivities: async function () {
    const query = {
      text: `SELECT activities.id, activities.title, activities.image, activities.city, activities.price,
      ARRAY_AGG(tags.name) AS tags
      FROM activities
      LEFT JOIN activity_tags ON activities.id = activity_tags.activity_id
      LEFT JOIN tags ON activity_tags.tag_id = tags.id
      GROUP BY activities.id;`
    };
    const results = await database.query(query);
    return results.rows;
  },

  getActivity: async function (activityId) {
    const query = {
      text: `SELECT activities.*, 
      ARRAY_AGG(tags.name) AS tags
      FROM activities
      LEFT JOIN activity_tags ON activities.id = activity_tags.activity_id
      LEFT JOIN tags ON activity_tags.tag_id = tags.id
      WHERE activities.id = $1
      GROUP BY activities.id;`,
      values: [activityId]
    };
    const results = await database.query(query);
    return results.rows[0];
  },

  getActivitiesByTag: async function (tag) {
    const query = {
      text: `SELECT activities.id, activities.title, activities.image, activities.city, activities.price,
      ARRAY_AGG(tags.name) AS tags
      FROM activities
      LEFT JOIN activity_tags ON activities.id = activity_tags.activity_id
      LEFT JOIN tags ON activity_tags.tag_id = tags.id
      WHERE tags.name = $1
      GROUP BY activities.id;`,
      values: [tag]
    };
    const results = await database.query(query);
    return results.rows;
  }




  /* getActivitiesByTags: async function (element) {
    let query;
    //le piège : si l'élément n'est pas renseigné en BDD, il vaut NULL. Pour effectuer la requête, on utilise les mots-clé IS NULL
    if (tags === 'null') {
      query = {
        text: `SELECT * FROM "activities" WHERE "tags" IS NULL`
      };

    } else {

      //sinon on fait la requête de façon classique
      query = {
        text: `SELECT * FROM "activities" WHERE "tags"=$1`,
        values: [tags]
      };

    }

    const results = await database.query(query);
    return results.rows;

  }, */


/* getActivitiesByTitle: async function (title) {
    const query = {
      //pour faire la requête sans prise en compte de la casse, on utilise ILIKE plutôt que LIKE
      text: `SELECT * FROM "activities" WHERE "title" ILIKE $1`,
      values: [`%${name}%`]
    };

    const results = await database.query(query);
    return results.rows;

  } */ 

};


module.exports = dataMapper;