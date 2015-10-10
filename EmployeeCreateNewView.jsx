EmployeeCreateNewView = React.createClass({
  propTypes: {
    // This component gets the employee to display through a React prop.
    // We can use propTypes to indicate it is required
    employee: React.PropTypes.object.isRequired
  },

  createNewUser() {
    var firstname = React.findDOMNode(this.refs.firstname).value.trim();
    var lastname = React.findDOMNode(this.refs.lastname).value.trim();
    var username = firstname.substring(0, 1)+lastname;
    var email = React.findDOMNode(this.refs.email).value.trim();
    var phone = React.findDOMNode(this.refs.phone).value.trim();
    var department = React.findDOMNode(this.refs.department).value.trim();

    Employees.insert({ username : username, 
        name: {
        last: lastname,
        first: firstname},
        email : email,
        phone: phone,
        department : department,
        registered: new Date() // current time
    });

        this.renderEmployeeList();
  },
    renderEmployeeList() {
     React.render(<App/>, document.getElementById("render-target"));
    },

 render() {
        return ( 
<div className="container-fluid">
<nav className="navbar navbar-default">
    <div className="navbar-header">
        <img alt="Innovate" className="img-responsive pull-left" height="30px" width="30px" src="https://s3.amazonaws.com/itmi-web-resources/images/assessment/logo.svg"></img>
              <button type="submit" onClick={this.renderEmployeeList} className="btn btn-default pull-left">Back</button>
              <button type="submit" onClick={this.createNewUser} className="btn btn-default pull-right">Save</button>
    </div>
</nav>
                <div className='row'>
            <div className='col-sm-4'>
                <div className='form-group'>
                    <label for="firstname">First name</label>
                    <input className="form-control" 
                    size="30" 
                    type="text" 
                  ref="firstname" 
                  name="firstname"/>                
                    </div>
            </div>
            <div className='col-sm-4'>
                <div className='form-group'>
                    <label for="lastname">Last name</label>
                    <input className="form-control" 
                    size="30" 
                    type="text" 
                  ref="lastname" 
                  name="lastname"/>                
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
                <div className='form-group'>
                    <label for="email">Email</label>
                    <input className="form-control" 
                    size="30" 
                    type="text" 
                  ref="email" 
                  name="email" />                
                </div>
            </div>
        </div>
            <div className='row'>
            <div className='col-sm-12'>
                <div className='form-group'>
                    <label for="phone">Phone</label>
                    <input className="form-control" 
                    size="30" 
                    type="phone" 
                  ref="phone" 
                  name="phone"/>                
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
                <div className='form-group'>
                    <label for="department">Department</label>
                    <select className="form-control" id="department" ref="department" name="department">
                        <option value="Special Ops">Special Ops</option>
                        <option value="Covert Ops">Covert Ops</option>
                        <option value="R&D">Research and Development</option>
                        <option value="HR">HR</option>
                        <option value="Daycare Center">Daycare Center</option>
                    </select>
                </div>
            </div>
        </div>
  </div>
    );
  }
});