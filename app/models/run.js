/**
 * Created by abhishek on 29/06/17.
 */
'use strict';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  start: DS.attr(),
  end: DS.attr(),
  course: DS.belongsTo('course')
})
