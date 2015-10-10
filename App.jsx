// App component - represents the whole app
App = React.createClass({
 
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the employees collection and puts them on this.data.employees
  getMeteorData() {
    return {
      employees: Employees.find().fetch()
    }
  },
 
  renderEmployeeList() {
    // Get employee from this.data.employees
    return this.data.employees.map((employee) => {
      return <EmployeeList key={employee._id} employee={employee}/>;
    });
  },

  getEmployeeFilteredView(event) {
    var department = event.target.value;
    var employees = this.data.employees;
     React.render(<EmployeeFilteredView employees={employees} department={event.target.value}/>, document.getElementById("render-target"));
  },

   createNewUser() {
     React.render(<EmployeeCreateNewView/>, document.getElementById("render-target"));
  },

  render() {
    return (
<div className="container-fluid">
      <nav className="navbar navbar-default">
        <div className="navbar-header">
            <img alt="Innovate" className="img-responsive pull-left" height="30px" width="30px" src="https://s3.amazonaws.com/itmi-web-resources/images/assessment/logo.svg"></img>
                  <button type="submit" onClick={this.createNewUser} className="btn btn-default pull-right">New</button>
        </div>
        </nav>
        <ul className="list-group" id="contact-list">
                <div className='row'>
            <div className='col-sm-12'>
                <div className='form-group'>
                    <label for="department">Department</label>
                    <select className="form-control" id="department" ref="department" onChange={this.getEmployeeFilteredView} name="department">
                        <option value="Select">Select Department</option>
                        <option value="Special Ops">Special Ops</option>
                        <option value="Covert Ops">Covert Ops</option>
                        <option value="R&D">Research and Development</option>
                        <option value="HR">HR</option>
                        <option value="Daycare Center">Daycare Center</option>
                    </select>
                </div>
            </div>
        </div>
          {this.renderEmployeeList()}
        </ul>
      </div>
    );
  }
});