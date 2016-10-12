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

      if (route.route.name === 'Login') {
        Session.set('redirectAfterLogin', route.path);
      }

      FlowRouter.go('/admin/login');
    }

    DocHead.setTitle(getTitle(this.name));
  }]
});

FlowRouter.route('/admin', {
  name: 'Admin',
  action: function(params, queryParams) {
    BlazeLayout.render('admin-home');
  }
});

FlowRouter.route('/admin/login', {
  name: 'Login',
  action: function(params, queryParams) {
    BlazeLayout.render('login');
  }
});
