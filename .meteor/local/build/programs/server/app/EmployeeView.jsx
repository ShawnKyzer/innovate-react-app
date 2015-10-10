(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// EmployeeView.jsx                                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
EmployeeView = React.createClass({                                     // 1
    displayName: "EmployeeView",                                       //
                                                                       //
    propTypes: {                                                       // 2
        // This component gets the employee to display through a React prop.
        // We can use propTypes to indicate it is required             //
        employee: React.PropTypes.object.isRequired                    // 5
    },                                                                 //
                                                                       //
    updateUserInformation: function () {                               // 8
        var firstname = React.findDOMNode(this.refs.firstname).value.trim();
        var lastname = React.findDOMNode(this.refs.lastname).value.trim();
        var username = firstname.substring(0, 1) + lastname;           // 11
        var email = React.findDOMNode(this.refs.email).value.trim();   // 12
        var phone = React.findDOMNode(this.refs.phone).value.trim();   // 13
        var department = React.findDOMNode(this.refs.department).value.trim();
                                                                       //
        Employees.update(this.props.employee._id, {                    // 16
            $set: { username: username,                                // 17
                "name.first": firstname,                               // 18
                "name.last": lastname,                                 // 19
                email: email,                                          // 20
                phone: phone,                                          // 21
                department: department                                 // 22
            }                                                          //
        });                                                            //
        this.renderEmployeeList();                                     // 25
    },                                                                 //
    renderEmployeeList: function () {                                  // 27
        React.render(React.createElement(App, null), document.getElementById("render-target"));
    },                                                                 //
                                                                       //
    render: function () {                                              // 31
        return React.createElement(                                    // 32
            "div",                                                     //
            { className: "container-fluid" },                          //
            React.createElement(                                       //
                "nav",                                                 //
                { className: "navbar navbar-default" },                //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "navbar-header" },                    //
                    React.createElement("img", { alt: "Innovate", className: "img-responsive pull-left", height: "30px", width: "30px", src: "https://s3.amazonaws.com/itmi-web-resources/images/assessment/logo.svg" }),
                    React.createElement(                               //
                        "button",                                      //
                        { type: "submit", onClick: this.renderEmployeeList, className: "btn btn-default pull-left" },
                        "Back"                                         //
                    ),                                                 //
                    React.createElement(                               //
                        "button",                                      //
                        { type: "submit", onClick: this.updateUserInformation, className: "btn btn-default pull-right" },
                        "Save"                                         //
                    )                                                  //
                )                                                      //
            ),                                                         //
            React.createElement(                                       //
                "div",                                                 //
                { className: "row" },                                  //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "col-sm-12" },                        //
                    React.createElement("img", { src: this.props.employee.picture.toString(), alt: this.props.employee.name.first + " " + this.props.employee.name.last, className: "img-responsive img-circle" })
                )                                                      //
            ),                                                         //
            React.createElement(                                       //
                "div",                                                 //
                { className: "row" },                                  //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "col-sm-12" },                        //
                    React.createElement(                               //
                        "div",                                         //
                        { className: "form-group" },                   //
                        React.createElement(                           //
                            "label",                                   //
                            { "for": "user_login" },                   //
                            "Username"                                 //
                        ),                                             //
                        React.createElement("input", { className: "form-control",
                            size: "30",                                // 51
                            type: "text",                              // 52
                            ref: "username",                           // 53
                            name: "username",                          // 54
                            readOnly: true,                            // 55
                            defaultValue: this.props.employee.username
                        })                                             //
                    )                                                  //
                )                                                      //
            ),                                                         //
            React.createElement(                                       //
                "div",                                                 //
                { className: "row" },                                  //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "col-sm-4" },                         //
                    React.createElement(                               //
                        "div",                                         //
                        { className: "form-group" },                   //
                        React.createElement(                           //
                            "label",                                   //
                            { "for": "firstname" },                    //
                            "First name"                               //
                        ),                                             //
                        React.createElement("input", { className: "form-control",
                            size: "30",                                // 66
                            type: "text",                              // 67
                            ref: "firstname",                          // 68
                            name: "firstname",                         // 69
                            defaultValue: this.props.employee.name.first })
                    )                                                  //
                ),                                                     //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "col-sm-4" },                         //
                    React.createElement(                               //
                        "div",                                         //
                        { className: "form-group" },                   //
                        React.createElement(                           //
                            "label",                                   //
                            { "for": "lastname" },                     //
                            "Last name"                                //
                        ),                                             //
                        React.createElement("input", { className: "form-control",
                            size: "30",                                // 77
                            type: "text",                              // 78
                            ref: "lastname",                           // 79
                            name: "lastname",                          // 80
                            defaultValue: this.props.employee.name.last })
                    )                                                  //
                )                                                      //
            ),                                                         //
            React.createElement(                                       //
                "div",                                                 //
                { className: "row" },                                  //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "col-sm-12" },                        //
                    React.createElement(                               //
                        "div",                                         //
                        { className: "form-group" },                   //
                        React.createElement(                           //
                            "label",                                   //
                            { "for": "email" },                        //
                            "Email"                                    //
                        ),                                             //
                        React.createElement("input", { className: "form-control",
                            size: "30",                                // 90
                            type: "text",                              // 91
                            ref: "email",                              // 92
                            name: "email",                             // 93
                            defaultValue: this.props.employee.email })
                    )                                                  //
                )                                                      //
            ),                                                         //
            React.createElement(                                       //
                "div",                                                 //
                { className: "row" },                                  //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "col-sm-12" },                        //
                    React.createElement(                               //
                        "div",                                         //
                        { className: "form-group" },                   //
                        React.createElement(                           //
                            "label",                                   //
                            { "for": "phone" },                        //
                            "Phone"                                    //
                        ),                                             //
                        React.createElement("input", { className: "form-control",
                            size: "30",                                // 103
                            type: "phone",                             // 104
                            ref: "phone",                              // 105
                            name: "phone",                             // 106
                            defaultValue: this.props.employee.phone })
                    )                                                  //
                )                                                      //
            ),                                                         //
            React.createElement(                                       //
                "div",                                                 //
                { className: "row" },                                  //
                React.createElement(                                   //
                    "div",                                             //
                    { className: "col-sm-12" },                        //
                    React.createElement(                               //
                        "div",                                         //
                        { className: "form-group" },                   //
                        React.createElement(                           //
                            "label",                                   //
                            { "for": "department" },                   //
                            "Department"                               //
                        ),                                             //
                        React.createElement(                           //
                            "select",                                  //
                            { className: "form-control", id: "department", ref: "department", name: "department", defaultValue: this.props.employee.department },
                            React.createElement(                       //
                                "option",                              //
                                { value: "Special Ops" },              //
                                "Special Ops"                          //
                            ),                                         //
                            React.createElement(                       //
                                "option",                              //
                                { value: "Covert Ops" },               //
                                "Covert Ops"                           //
                            ),                                         //
                            React.createElement(                       //
                                "option",                              //
                                { value: "R&D" },                      //
                                "Research and Development"             //
                            ),                                         //
                            React.createElement(                       //
                                "option",                              //
                                { value: "HR" },                       //
                                "HR"                                   //
                            ),                                         //
                            React.createElement(                       //
                                "option",                              //
                                { value: "Daycare Center" },           //
                                "Daycare Center"                       //
                            )                                          //
                        )                                              //
                    )                                                  //
                )                                                      //
            )                                                          //
        );                                                             //
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=EmployeeView.jsx.map
