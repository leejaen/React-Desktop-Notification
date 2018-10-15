/**
 * Created by lizhen on 5/28/2016.
 */
var React = require('react');
var createReactClass = React.createClass || require('create-react-class');

var Notifier = createReactClass({
  statics: {
    start: function(title, context, url, icon, name) {
      name=name||("notiwin"+(function(n) {
        var rnd = "";
        for (var i = 0; i < n; i++)
          rnd += Math.floor(Math.random() * 10);
        return rnd;
      })(5));
      if (!('Notification' in window)) {
        console.log("Your browser does not support desktop notifications, please try Chrome or Firefox.");
        return false;
      }

      if (Notification.permission !== "granted") {
        Notification.requestPermission();
      } else {
        icon=(icon&&icon.match(/^.*\.(jpeg|jpg|gif|png)/gi))?icon:"http://ob9oayzh3.bkt.clouddn.com/images.png"
        var notification = new Notification(title, {
          icon: icon,
          body: context,
        });
        notification.onclick = function() {
          window.open(url, name);
        };
      }
    },
    focus:function(title, context, url, icon){
      if (!('Notification' in window)) {
        console.log("Your browser does not support desktop notifications, please try Chrome or Firefox.");
        return false;
      }

      if (Notification.permission !== "granted") {
        Notification.requestPermission();
      } else {
        icon=(icon&&icon.match(/^.*\.(jpeg|jpg|gif|png)/gi))?icon:"http://ob9oayzh3.bkt.clouddn.com/images.png"
        var notification = new Notification(title, {
          icon: icon,
          body: context,
        });
        notification.onclick = function() {
          parent.focus();
          window.focus(); //just in case, older browsers
          this.close();
        };
      }
    }
  },

  shouldComponentUpdate: function() {
    return false;
  },

  getScript: function() {
    var script = 'document.addEventListener("DOMContentLoaded", function () { if (Notification.permission !== "granted") Notification.requestPermission(); });';
    return script;
  },

  render: function() {
    return React.createElement("script", {
      type: "text/javascript",
      dangerouslySetInnerHTML: {
        __html: this.getScript()
      }
    });
  }
});

module.exports = Notifier;
