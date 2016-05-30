import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log("Model hook called for 'bands.band' called with ", params.slug);
    var bands = this.modelFor('bands');
    return bands.get('content').findBy('slug', params.slug);
  },

  /********
  Because Ember router can only transition to leaf routes, so the reirection
  in bands.band route is not executed if a band clicked twice! So, moved this to
  routes/bands/band/index.js
  ********/
  // afterModel: function(band) {
  //   var description = band.get('description');
  //   if (Ember.isEmpty(description)) {
  //     this.transitionTo('bands.band.songs');
  //   } else {
  //     this.transitionTo('bands.band.details');
  //   }
  // }
});
