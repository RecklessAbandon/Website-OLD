FlowRouter.route('/', {
  name: 'home',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function(params, queryParams) {
    BlazeLayout.render('login');
  }
})
