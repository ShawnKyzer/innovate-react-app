(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// EmployeeFilteredView.jsx                                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
EmployeeFilteredView = React.createClass({                             // 1
  displayName: "EmployeeFilteredView",                                 //
                                                                       //
  propTypes: {                                                         // 3
    // This component gets the employee to display through a React prop.
    // We can use propTypes to indicate it is required                 //
    employees: React.PropTypes.object.isRequired,                      // 6
    department: React.PropTypes.object.isRequired                      // 7
  },                                                                   //
                                                                       //
  renderEmployeeList: function () {                                    // 10
    this.props.employees = Employees.find({ department: this.props.department }).fetch();
    // Get employee from this.data.employees                           //
    return this.props.employees.map(function (employee) {              // 13
      return React.createElement(EmployeeList, { key: employee._id, employee: employee });
    });                                                                //
  },                                                                   //
                                                                       //
  getEmployeeFilteredView: function (event) {                          // 18
    var department = event.target.value;                               // 19
    var employees = this.props.employees;                              // 20
    if (department === "All" || department === "Select") {             // 21
      React.render(React.createElement(App, null), document.getElementById("render-target"));
    } else {                                                           //
      React.render(React.createElement(EmployeeFilteredView, { employees: employees, department: event.target.value }), document.getElementById("render-target"));
    }                                                                  //
  },                                                                   //
                                                                       //
  createNewUser: function () {                                         // 28
    React.render(React.createElement(EmployeeCreateNewView, null), document.getElementById("render-target"));
  },                                                                   //
                                                                       //
  render: function () {                                                // 32
    return React.createElement(                                        // 33
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
                  { value: "All" },                                    //
                  "All Departments"                                    //
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
