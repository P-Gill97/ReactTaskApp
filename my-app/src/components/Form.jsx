import React, {Component} from 'react';
import '../App.css';

class Form extends Component{
  constructor(props){
    super(props);
      this.state = {
        newNoteContent: '',
        newPriority:'',
      };
      // bind functions to this component
      this.handleUserInput = this.handleUserInput.bind(this);
      this.setPriority = this.setPriority.bind(this);
      this.addNote = this.addNote.bind(this);

    }
handleUserInput(e){
  this.setState({
    newNoteContent:e.target.value,

  })
  console.log(this);
}
//set vlaue of this state priority to what the user selected.
setPriority(e){
  this.setState({

    newPriority:e.target.value,
  })
  console.log(this);
}
addNote(){
this.props.addNote(this.state.newNoteContent);



  this.setState({

  })
}
  render(){
      return(
          <div className = "form">

          <div className = "input">
            <input className = "noteInput"
            placeholder = "Enter new note"
            value = {this.state.newNoteContent}
            onChange={this.handleUserInput}/>

            <label  >Priority</label>
              <select className="Priority-control "
                      onChange = {this.setPriority}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

          <button className ="btn"
                  onClick = {this.addNote}
          >+</button>

          </div>

      )

  }

}
export default Form;
