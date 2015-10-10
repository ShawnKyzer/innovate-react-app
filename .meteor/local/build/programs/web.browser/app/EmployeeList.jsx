(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// EmployeeList.jsx                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
// We can use propTypes to indicate it is required                     //
// Employee component - represents a single employee                   //
EmployeeList = React.createClass({                                     // 3
  displayName: "EmployeeList",                                         //
                                                                       //
  propTypes: {                                                         // 4
    // This component gets the employee to display through a React prop.
    // We can use propTypes to indicate it is required                 //
    employee: React.PropTypes.object.isRequired                        // 7
  },                                                                   //
                                                                       //
  renderEmployeeView: function () {                                    // 10
    // Render the single employee view form combo component            //
    React.render(React.createElement(EmployeeView, { employee: this.props.employee }), document.getElementById("render-target"));
  },                                                                   //
                                                                       //
  deleteThisEmployee: function () {                                    // 15
    Employees.remove(this.props.employee._id);                         // 16
    React.render(React.createElement(App, null), document.getElementById("render-target"));
  },                                                                   //
                                                                       //
  render: function () {                                                // 20
    return React.createElement(                                        // 21
      "li",                                                            //
      { className: "list-group-item" },                                //
      React.createElement(                                             //
        "div",                                                         //
        { onClick: this.renderEmployeeView },                          //
        React.createElement(                                           //
          "div",                                                       //
          { className: "col-xs-12 col-sm-2" },                         //
          React.createElement("img", { src: this.props.employee.picture, alt: this.props.employee.name.first + " " + this.props.employee.name.last, className: "img-responsive img-circle" })
        ),                                                             //
        React.createElement(                                           //
          "div",                                                       //
          { className: "col-xs-12 col-sm-10" },                        //
          React.createElement(                                         //
            "h3",                                                      //
            null,                                                      //
            React.createElement(                                       //
              "span",                                                  //
              { className: "name" },                                   //
              this.props.employee.name.first,                          //
              " ",                                                     //
              this.props.employee.name.last                            //
            )                                                          //
          )                                                            //
        ),                                                             //
        React.createElement(                                           //
          "div",                                                       //
          { className: "col-xs-12 col-sm-10" },                        //
          React.createElement(                                         //
            "h4",                                                      //
            null,                                                      //
            React.createElement(                                       //
              "span",                                                  //
              { className: "text" },                                   //
              this.props.employee.department                           //
            )                                                          //
          )                                                            //
        )                                                              //
      ),                                                               //
      React.createElement(                                             //
        "div",                                                         //
        { className: "clearfix" },                                     //
        React.createElement(                                           //
          "button",                                                    //
          { id: "deleteButton", name: "deleteButton", onClick: this.deleteThisEmployee, className: "btn btn-danger" },
          "Remove"                                                     //
        )                                                              //
      )                                                                //
    );                                                                 //
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
