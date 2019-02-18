import React, { Component } from 'react';

class Note extends Component {
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.notePriority = props.notePriority;
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id){
    console.log(id);
    this.props.removeNote(id);
  }
  render(props) {
    return(
      <div className ="note">
      <span className = "removeButton" onClick={() => this.handleRemove(this.noteId)}>
            &times;
            </span>
      <div className = "noteText">

        <label >Note content: </label>
        <p className = "noteContent">{ this.noteContent } </p>
        </div>
        <div className = "Priority">
        <label >Priority level :  </label>
        <p className = "notePriority">{ this.notePriority } </p>


        </div>
      </div>
    )

}


}


export default Note;
