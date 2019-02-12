import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        noteText: '',
        notes:[],
      }

    }
    updateNoteText(noteText){
      this.setState({noteText: noteText.target.value})
    }

    handleKeyPress= (event)  =>{
      if(event.key === 'Enter'){


      }

    }
    deleteNote(index){
      let notesArr = this.state.notes;
      notesArr.splice(index, 1);
      this.setState({notes = notesArr})
    }


  render() {
    let notes = this.state.map((val, key)) => {
      return <Note key={key} text = {val}
                      deleteMethod={() => this.deleteNote(key) } />
    }
    return (
      <div className="container">
        <div className = "header">Cross platform Todo Application</div>
        <div className = "btn" onClick = {this.addNode.bind(this)}>+</div>
        <input type = "text"
          ref= {((input) => {this.textInput = input})}
          className = "textInput"
          value = {this.state.noteText}
          onChangeText = {noteText => this.updateNoteText(noteText)}
          onKeyPress = {this.handleKeyPress.bind(this)}
          />
      </div>
    );
  }
}

export default App;
