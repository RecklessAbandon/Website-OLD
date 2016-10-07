FlowRouter.route('/', {
  name: 'home',
  title: 'Home | The Heart of Teens',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  }
});

FlowRouter.group({
  prefix: '/admin',
  title: 'Admin | The Heart of Teens'
});

FlowRouter.route('/admin/login', {
  name: 'login',
  action: function(params, queryParams) {
    BlazeLayout.render('login');
  }
});
