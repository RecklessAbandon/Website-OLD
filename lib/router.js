var getTitle = function(page) {
  return page + ' | The Heart of Teens';
}

FlowRouter.route('/', {
  name: 'Home',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
    DocHead.setTitle(getTitle(this.name));
  }
});

FlowRouter.group({
  name: 'Admin',
  prefix: '/admin',
  triggersEnter: [function(context, redirect) {
    DocHead.setTitle(getTitle(this.name));
  }]
});

FlowRouter.route('/admin/login', {
  name: 'Login',
  action: function(params, queryParams) {
    BlazeLayout.render('login');
  }
});
