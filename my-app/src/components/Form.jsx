import React, {Component} from 'react';
import '../App.css';

class Form extends Component{
  constructor(props){
    super(props);
      this.state = {};
    }

  render(){
      return(
          <div className = "form">

          <div className = "input">
            <input className = "noteInput"
            placeholder = "Enter new note"/>

            <label  >Priority</label>
              <select class="Priority-control " >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

          <button className ="btn">+</button>

          </div>

      )

  }

}
export default Form;
