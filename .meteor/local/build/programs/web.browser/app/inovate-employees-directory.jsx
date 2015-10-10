(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// inovate-employees-directory.jsx                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// Define a collection to hold our employees                           //
                                                                       //
Employees = new Mongo.Collection("employees");                         // 3
                                                                       //
if (Meteor.isClient) {                                                 // 5
                                                                       //
  // This code is executed on the client only                          //
                                                                       //
  Meteor.startup(function () {                                         // 9
                                                                       //
    // Use Meteor.startup to render the component after the page is ready
                                                                       //
    React.render(React.createElement(App, null), document.getElementById("render-target"));
  });                                                                  //
}                                                                      //
/////////////////////////////////////////////////////////////////////////

}).call(this);
