import { Slides } from '../../api/slider.js';

import './customize.html';

Template.admin_customize.events({
  'submit .new-slide'(event) {
    event.preventDefault();

    const target = event.target;
    const url = target.url.value;

    Slides.insert({
      url,
      createdAt: new Date()
    });

    target.url.value = '';
  }
});
