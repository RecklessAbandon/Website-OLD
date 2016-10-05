FlowRouter.route('/', {
  name: 'Home',
  action: function(params, queryParams) {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/login', {
  name: 'Login',
  action: function(params, queryParams) {
    BlazeLayout.render('login');
  }
})

FlowRouter.triggers.enter([function(){
  document.title = (FlowRouter.current().path.indexOf('admin') !== -1 ? 'Admin' : FlowRouter.current().route.name) + ' | The Heart of Teens';
}]);