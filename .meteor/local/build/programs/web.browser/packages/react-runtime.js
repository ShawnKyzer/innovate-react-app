//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var React;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/react-runtime/react-runtime.js                                           //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
if (Package["react-runtime-dev"]) {                                                  // 1
  React = Package["react-runtime-dev"].ReactDev;                                     // 2
} else if (Package["react-runtime-prod"]) {                                          // 3
  React = Package["react-runtime-prod"].ReactProd;                                   // 4
} else {                                                                             // 5
  // not sure how this can happen                                                    // 6
  throw new Error("Couldn't find react-runtime-dev or react-runtime-prod packages");
}                                                                                    // 8
                                                                                     // 9
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['react-runtime'] = {
  React: React
};

})();
