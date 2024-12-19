const {Client} = require('pg');

const client = new Client(process.env.PG_URL);

client.connect();
/*
const activityId = 1; // ID de l'activité
const query = `
  SELECT 
      a.id AS activity_id,
      a.title AS activity_title,
      t.id AS tag_id,
      t.name AS tag_name
  FROM 
      activities a
  JOIN 
      activity_tags at ON a.id = at.activity_id
  JOIN 
      tags t ON at.tag_id = t.id
  WHERE 
      a.id = $1;
`;

client.query(query, [activityId])
  .then(res => {
    console.log('Résultats :', res.rows);
  })
  .catch(err => {
    console.error('Erreur :', err);
  })
  .finally(() => {
    client.end();
  });
*/
module.exports = client;