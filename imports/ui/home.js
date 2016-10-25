import { Template } from 'meteor/templating';

import { Slides } from '../api/slider.js';

import './home.html';
import './home.css';

Template.home.onRendered(function() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    paginationClickable: true,
    centeredSlides: true,
    autoHeight: true,
    preloadImages: false,
    lazyLoading: true,

    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  })
});

Template.home.onCreated(function() {
  Meteor.subscribe('slider_slides');
});

Template.home.helpers({
  slides() {
    return Slides.find({}, { sort: { createdAt: -1 } }).fetch();
  }
});
