import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () { },
  model () {
    console.log('run.index')
    return this.modelFor('courses.course.run')
  },
  setupController (controller, model) {
    controller.set('run', model)
  }
});
