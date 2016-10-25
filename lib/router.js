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
    if (!(Meteor.loggingIn() || Meteor.userId())) {
      var route = FlowRouter.current();

      FlowRouter.go('/admin/login');
    }
  }]
});

FlowRouter.route('/admin', {
  name: 'Admin',
  action: function(params, queryParams) {
    BlazeLayout.render('admin_home');
    DocHead.setTitle(getTitle('Admin'));
  }
});

FlowRouter.route('/admin/customize', {
  name: 'Customize',
  action: function(params, queryParams) {
    BlazeLayout.render('admin_customize');
    DocHead.setTitle(getTitle('Admin'));
  }
});

FlowRouter.route('/admin/login', {
  name: 'Login',
  action: function(params, queryParams) {
    BlazeLayout.render('login');
    DocHead.setTitle(getTitle('Admin'));
  }
});
