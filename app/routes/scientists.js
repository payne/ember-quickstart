import Ember from 'ember';


export default Ember.Route.extend({

  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann', 'John Lennon', 'Paul','George','Ringo'];
  }
});
