import { Session } from 'meteor/session';

Accounts.onLogin(function(user) {
  FlowRouter.go('/admin');
});
