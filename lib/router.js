FlowRouter.route('/', {
  action: function(params, queryParams) {
      BlazeLayout.render('layout', { header: 'header', footer: 'footer' });
  }
});