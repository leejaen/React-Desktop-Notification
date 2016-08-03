/**
 * Created by lizhen on 5/28/2016.
 */
var React = require('react');

var Notifier = React.createClass({
  statics: {
    start: function(title, context, url, icon) {
      if (!Notification) {
        console.log("Your browser is not support desktop notifications, please try Chrome or Firefox.");
        return false;
      }
      if (!(icon.match(/\.(jpeg|jpg|gif|png)$/) != null)) {
        return false;
      }

      if (Notification.permission !== "granted") {
        Notification.requestPermission();
      } else {
        var notification = new Notification(title, {
          icon: icon || "http://ob9oayzh3.bkt.clouddn.com/images.png",
          body: context,
        });
        notification.onclick = function() {
          window.open(url);
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
