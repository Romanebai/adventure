const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: async function (req, res) {

    try {
      const activities = await dataMapper.getAllActivities();
      res.render('activityList', { activities });
      

    } catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
   
  },

  activityDetails: async function (req, res) {
    const activityId = parseInt(req.params.id);

    try {
      const activity = await dataMapper.getActivity(activityId);
  
      if (activity) {
        res.render('activityDetails', {activity});
        console.log(activity)
    } else {
        res.status(404).send(`activity with id ${activityId} not found`);
    }
    } catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
}, 

searchActivities: async function (req, res) {
  const selectedTag = req.query.tag; // Récupérer le tag sélectionné du formulaire

  try {
    let activities;

    if (selectedTag) {
      // Si un tag est sélectionné, on filtre les activités par ce tag
      activities = await dataMapper.getActivitiesByTag(selectedTag);
    } else {
      // Sinon, on affiche toutes les activités
      activities = await dataMapper.getAllActivities();
    }

    res.render('activityList', { activities });
  } catch (error) {
    console.error(error);
    res.status(500).render('error');
  }
},
};

module.exports = mainController;