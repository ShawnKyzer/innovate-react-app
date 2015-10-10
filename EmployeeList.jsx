// We can use propTypes to indicate it is required
// Employee component - represents a single employee 
EmployeeList = React.createClass({
  propTypes: {
    // This component gets the employee to display through a React prop.
    // We can use propTypes to indicate it is required
    employee: React.PropTypes.object.isRequired
  },

  renderEmployeeView() {
    // Render the single employee view form combo component
    React.render(<EmployeeView employee={this.props.employee}/>, document.getElementById("render-target"));
  },

  deleteThisEmployee() {
    Employees.remove(this.props.employee._id);
    React.render(<App/>, document.getElementById("render-target"));
  },

 render() {
        return (
      <li className="list-group-item">
                    <div onClick={this.renderEmployeeView}>
                    <div className="col-xs-12 col-sm-2">
                        <img src={this.props.employee.picture} alt={this.props.employee.name.first + " "+ this.props.employee.name.last} className="img-responsive img-circle"/>
                    </div>
                    <div className="col-xs-12 col-sm-10">
                        <h3><span className="name">{this.props.employee.name.first} {this.props.employee.name.last}</span></h3>
                    </div>
                    <div className="col-xs-12 col-sm-10">
                        <h4><span className="text">{this.props.employee.department}</span></h4>
                    </div>
                    </div>
                    <div className="clearfix">
                    <button id="deleteButton" name="deleteButton" onClick={this.deleteThisEmployee} className="btn btn-danger">Remove</button>
                    </div>
      </li>
    );
  }
});