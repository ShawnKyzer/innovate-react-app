EmployeeView = React.createClass({
  propTypes: {
    // This component gets the employee to display through a React prop.
    // We can use propTypes to indicate it is required
    employee: React.PropTypes.object.isRequired
  },

  updateUserInformation() {
    var firstname = React.findDOMNode(this.refs.firstname).value.trim();
    var lastname = React.findDOMNode(this.refs.lastname).value.trim();
    var username = firstname.substring(0, 1)+lastname;
    var email = React.findDOMNode(this.refs.email).value.trim();
    var phone = React.findDOMNode(this.refs.phone).value.trim();
    var department = React.findDOMNode(this.refs.department).value.trim();
    
    Employees.update(this.props.employee._id, {
        $set:{ username : username, 
        "name.first" : firstname,
        "name.last" : lastname,
        email : email,
        phone: phone,
        department : department
      },
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
              <button type="submit" onClick={this.updateUserInformation} className="btn btn-default pull-right">Save</button>
    </div>
</nav>
      <div className='row'>
            <div className='col-sm-12'>
              <img src={this.props.employee.picture.toString()} alt={this.props.employee.name.first + " "+ this.props.employee.name.last} className="img-responsive img-circle"/>                
            </div>
      </div>
        <div className='row'>
            <div className='col-sm-12'>
                <div className='form-group'>
                    <label for="user_login">Username</label>
                    <input className="form-control" 
                    size="30" 
                    type="text" 
                  ref="username" 
                  name="username" 
                  readOnly={true}
                  defaultValue={this.props.employee.username}
                    />
                </div>
            </div>
        </div>
                <div className='row'>
            <div className='col-sm-4'>
                <div className='form-group'>
                    <label for="firstname">First name</label>
                    <input className="form-control" 
                    size="30" 
                    type="text" 
                  ref="firstname" 
                  name="firstname" 
                  defaultValue={this.props.employee.name.first}/>                
                    </div>
            </div>
            <div className='col-sm-4'>
                <div className='form-group'>
                    <label for="lastname">Last name</label>
                    <input className="form-control" 
                    size="30" 
                    type="text" 
                  ref="lastname" 
                  name="lastname" 
                  defaultValue={this.props.employee.name.last}/>                
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
                  name="email" 
                  defaultValue={this.props.employee.email}/>                
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
                  name="phone" 
                  defaultValue={this.props.employee.phone}/>                
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
                <div className='form-group'>
                    <label for="department">Department</label>
                    <select className="form-control" id="department" ref="department" name="department" defaultValue={this.props.employee.department}>
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