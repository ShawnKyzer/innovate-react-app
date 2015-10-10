(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// App.jsx                                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// App component - represents the whole app                            //
App = React.createClass({                                              // 2
  displayName: "App",                                                  //
                                                                       //
  // This mixin makes the getMeteorData method work                    //
  mixins: [ReactMeteorData],                                           // 5
                                                                       //
  // Loads items from the employees collection and puts them on this.data.employees
  getMeteorData: function () {                                         // 8
    return {                                                           // 9
      employees: Employees.find().fetch()                              // 10
    };                                                                 //
  },                                                                   //
                                                                       //
  renderEmployeeList: function () {                                    // 14
    // Get employee from this.data.employees                           //
    return this.data.employees.map(function (employee) {               // 16
      return React.createElement(EmployeeList, { key: employee._id, employee: employee });
    });                                                                //
  },                                                                   //
                                                                       //
  getEmployeeFilteredView: function (event) {                          // 21
    var department = event.target.value;                               // 22
    var employees = this.data.employees;                               // 23
    React.render(React.createElement(EmployeeFilteredView, { employees: employees, department: event.target.value }), document.getElementById("render-target"));
  },                                                                   //
                                                                       //
  createNewUser: function () {                                         // 27
    React.render(React.createElement(EmployeeCreateNewView, null), document.getElementById("render-target"));
  },                                                                   //
                                                                       //
  render: function () {                                                // 31
    return React.createElement(                                        // 32
      "div",                                                           //
      { className: "container-fluid" },                                //
      React.createElement(                                             //
        "nav",                                                         //
        { className: "navbar navbar-default" },                        //
        React.createElement(                                           //
          "div",                                                       //
          { className: "navbar-header" },                              //
          React.createElement("img", { alt: "Innovate", className: "img-responsive pull-left", height: "30px", width: "30px", src: "https://s3.amazonaws.com/itmi-web-resources/images/assessment/logo.svg" }),
          React.createElement(                                         //
            "button",                                                  //
            { type: "submit", onClick: this.createNewUser, className: "btn btn-default pull-right" },
            "New"                                                      //
          )                                                            //
        )                                                              //
      ),                                                               //
      React.createElement(                                             //
        "ul",                                                          //
        { className: "list-group", id: "contact-list" },               //
        React.createElement(                                           //
          "div",                                                       //
          { className: "row" },                                        //
          React.createElement(                                         //
            "div",                                                     //
            { className: "col-sm-12" },                                //
            React.createElement(                                       //
              "div",                                                   //
              { className: "form-group" },                             //
              React.createElement(                                     //
                "label",                                               //
                { "for": "department" },                               //
                "Department"                                           //
              ),                                                       //
              React.createElement(                                     //
                "select",                                              //
                { className: "form-control", id: "department", ref: "department", onChange: this.getEmployeeFilteredView, name: "department" },
                React.createElement(                                   //
                  "option",                                            //
                  { value: "Select" },                                 //
                  "Select Department"                                  //
                ),                                                     //
                React.createElement(                                   //
                  "option",                                            //
                  { value: "Special Ops" },                            //
                  "Special Ops"                                        //
                ),                                                     //
                React.createElement(                                   //
                  "option",                                            //
                  { value: "Covert Ops" },                             //
                  "Covert Ops"                                         //
                ),                                                     //
                React.createElement(                                   //
                  "option",                                            //
                  { value: "R&D" },                                    //
                  "Research and Development"                           //
                ),                                                     //
                React.createElement(                                   //
                  "option",                                            //
                  { value: "HR" },                                     //
                  "HR"                                                 //
                ),                                                     //
                React.createElement(                                   //
                  "option",                                            //
                  { value: "Daycare Center" },                         //
                  "Daycare Center"                                     //
                )                                                      //
              )                                                        //
            )                                                          //
          )                                                            //
        ),                                                             //
        this.renderEmployeeList()                                      //
      )                                                                //
    );                                                                 //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
