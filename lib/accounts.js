import { Session } from 'meteor/session';

Accounts.onLogin(function(user) {
  if (Meteor.isClient) {
    var route = FlowRouter.getRouteName();
    if (route === 'Login') {
      FlowRouter.go('/admin');
    }
  }
});
