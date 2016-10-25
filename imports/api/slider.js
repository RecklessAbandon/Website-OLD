import { Mongo } from 'meteor/mongo';

export const Slides = new Mongo.Collection('slider_slides');

if (Meteor.isServer) {
  Meteor.publish('slider_slides', function() {
    return Slides.find();
  });
}
