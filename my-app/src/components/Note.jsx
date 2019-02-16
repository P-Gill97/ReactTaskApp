import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Note extends Component {
  constructor(props){
    super(props);
    this.nText = props.nText;
    this.nId = props.nId;
    this.nPriority = props.nPriority;
  }
  render(props) {
    return(
      <div className ="note">
        <p className = "noteContent">{this.nText } </p>
      </div>
    );

}

Note.propTypes = {
  nText: PropTypes.string;
}
}
export default Note;
