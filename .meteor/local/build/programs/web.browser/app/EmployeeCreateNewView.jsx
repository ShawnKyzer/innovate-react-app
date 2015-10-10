(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// EmployeeCreateNewView.jsx                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
EmployeeCreateNewView = React.createClass({                            // 1
    displayName: "EmployeeCreateNewView",                              //
                                                                       //
    propTypes: {                                                       // 2
        // This component gets the employee to display through a React prop.
        // We can use propTypes to indicate it is required             //
        employee: React.PropTypes.object.isRequired                    // 5
    },                                                                 //
                                                                       //
    createNewUser: function () {                                       // 8
        var firstname = React.findDOMNode(this.refs.firstname).value.trim();
        var lastname = React.findDOMNode(this.refs.lastname).value.trim();
        var username = firstname.substring(0, 1) + lastname;           // 11
        var email = React.findDOMNode(this.refs.email).value.trim();   // 12
        var phone = React.findDOMNode(this.refs.phone).value.trim();   // 13
        var department = React.findDOMNode(this.refs.department).value.trim();
                                                                       //
        Employees.insert({ username: username,                         // 16
            name: {                                                    // 17
                last: lastname,                                        // 18
                first: firstname },                                    // 19
            email: email,                                              // 20
            phone: phone,                                              // 21
            department: department,                                    // 22
            registered: new Date() // current time                     // 23
        });                                                            //
                                                                       //
        this.renderEmployeeList();                                     // 26
    },                                                                 //
    renderEmployeeList: function () {                                  // 28
        React.render(React.createElement(App, null), document.getElementById("render-target"));
    },                                                                 //
                                                                       //
    render: function () {                                              // 32
        return React.createElement(                                    // 33
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
                        { type: "submit", onClick: this.createNewUser, className: "btn btn-default pull-right" },
                        "Save"                                         //
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
                            size: "30",                                // 47
                            type: "text",                              // 48
                            ref: "firstname",                          // 49
                            name: "firstname" })                       // 50
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
                            size: "30",                                // 57
                            type: "text",                              // 58
                            ref: "lastname",                           // 59
                            name: "lastname" })                        // 60
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
                            size: "30",                                // 69
                            type: "text",                              // 70
                            ref: "email",                              // 71
                            name: "email" })                           // 72
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
                            size: "30",                                // 81
                            type: "phone",                             // 82
                            ref: "phone",                              // 83
                            name: "phone" })                           // 84
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
                            { className: "form-control", id: "department", ref: "department", name: "department" },
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
