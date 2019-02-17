import React, { Component } from 'react';
import Note from './components/Note.jsx';
import './App.css';
import Form from './components/Form.jsx';

class App extends Component {
    constructor(props){
      super(props);
      // setting state of component.
      this.state = {
        notes:[
          {id: 1, noteContent:  " banana " , notePriority:"High"}
      ],

      }

    }
// 17:45
  render() {

    return (
      <div className="container">
        <div className = "header">Cross platform Todo Application</div>
        <div className = "">
          {
          this.state.notes.map((note) => {
            return(

              <Note noteContent ={note.noteContent}
                noteId={note.noteId}
                notePriority={note.notePriority}
                key ={note.noteId} /> //
            )
          })
        }
        </div>
        <div className = "form">
            <Form/>

        </div>
      </div> // parent div
    );
  }
}

export default App;
