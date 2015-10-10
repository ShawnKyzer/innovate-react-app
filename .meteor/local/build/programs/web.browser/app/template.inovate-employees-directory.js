(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw('<div id="page-nav-header"></div>\n  <div id="render-target"></div>');
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);
