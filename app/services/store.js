import Ember from 'ember';

export default Ember.Service.extend({
  getScienctists() {
    console.log("Hello from store service!");
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann', 'John Lennon', 'Paul','George','Ringo'];
  }
});
