if (Meteor.isClient) {
  Session.set("countdown", [0,0,0,0])
  Meteor.setInterval(function () {
    var ms = new Date(2014,7,1).valueOf() - new Date();
    if (ms < 0) {
      ms = 0;
    }
    var secs = ms / 1000;
    var days = parseInt(secs / 60 / 60 / 24)
    var hours = parseInt((secs / 60 / 60) % 24)
    var minutes = parseInt((secs / 60) % 60)
    secs = parseInt(secs % 60)
    Session.set("countdown", [days, hours, minutes, secs])
  }, 1000);
  Template.countdown.days = function () {
    return Session.get("countdown")[0];
  };
  Template.countdown.hours = function () {
    return Session.get("countdown")[1];
  };
  Template.countdown.minutes = function () {
    return Session.get("countdown")[2];
  };
  Template.countdown.seconds = function () {
    return Session.get("countdown")[3];
  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
