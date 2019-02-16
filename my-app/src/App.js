import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';


class App extends Component {
    constructor(props){
      super(props);
      // setting state of component.
      this.state = {
        noteText: '',
        notes:[
          {id:1 , nText: " Sample"},
        {id:1 , nText: " Sample"}
      ],
      }

    }
    updateNoteText(noteText){
      this.setState({noteText: noteText.target.value})
      console.log(this.state.noteText)
    }
    addNode(){
      if(this.state.noteText === ''){return}

      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      // resetting state of note to empty
      this.setState({ noteText: ''})
      //refocus input field
      this.textInput.focus();
    }
    handleKeyPress= (event)  =>{
      if(event.key === 'Enter'){


      }

    }

    deleteNote(index){
      let notesArr = this.state.notes;
      notesArr.splice(index, 1);
      this.setState({notes : notesArr})

    }

// 17:45
  render() {
    let notes = this.state.notes.map((val,key) => {
      return <Note key={key} text = {val}
                      deleteMethod={ () => this.deleteNote(key) } />
                  })
    return (
      <div className="container">
        <div className = "header">Cross platform Todo Application</div>
        <div className = "note">
          this.state.notes.map((note) => {
            return(
              <Note nText ={} nId={} nPriority={} key ={} /> // 

            )
          });
        </div>
        <div className = "footer">

        </div>


      </div>
    );
  }
}

export default App;
