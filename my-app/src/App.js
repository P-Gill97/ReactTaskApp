import React, { Component } from 'react';
import Note from './components/Note.jsx';
import './App.css';
import Form from './components/Form.jsx';
import {DB_CONFIG} from './config/config';
import firebase from 'firebase/app';
import 'firebase/database';
class App extends Component {
    constructor(props){
      super(props);
  this.addNote = this.addNote.bind(this);
  //45:37
      this.app = firebase.initializeApp(DB_CONFIG);
      this.database = this.app.database().ref().child('notes');
      // setting state of component.
      this.state = {
        notes:[],
      }

    }
componentWillMount(){
  const previousList = this.state.notes;
  this.database.on('child_added', snap =>{
    previousList.push({
      id: snap.key,
      noteContent: snap.val().noteContent,
      notePriority: snap.val().notePriority,
    })

    this.setState({
      notes: previousList
    })
  })
}



addNote(note,priority){
  this.database.push().set({ noteContent:note, notePriority:priority});

}
// componenet will mount
// then render
// then componenet did mount
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
            <Form addNote = {this.addNote}/>

        </div>
      </div> // parent div
    );
  }
}

export default App;
