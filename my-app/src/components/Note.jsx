import React, { Component } from 'react';

class Note extends Component {
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;
    this.notePriority = props.notePriority;
  }
  render(props) {
    return(
      <div className ="note">
      <div className = "noteText">
        <label for="noteContent">Note content:  </label>
        <p className = "noteContent">{ this.noteContent } </p>

        </div>
        <div className = "Priority">
        <label for="notePriority">Priority level :  </label>
        <p className = "notePriority">{ this.notePriority } </p>


        </div>
      </div>
    )

}


}


export default Note;
