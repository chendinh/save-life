import React, {Component, Fragment} from 'react';
//** Import file */
import "../css/ContactForm.css";

class ContactForm extends Component {

  render() {
    let { handleOnChange, handleOnClickSendMessage} = this.props;
    return (
      <Fragment>
        <div className="ContactForm-Container">
          <textarea 
            name="inputText" 
            placeholder="Leave us a message..." 
            onChange={handleOnChange} 
            className="ContactForm-input-textarea"
          >
           </textarea>
          <div className="Row-Email-Submit">
            <input 
              name="inputEmail" 
              onChange={handleOnChange} 
              placeholder="YOUR@GMAIL.COM"
            />
            <button onClick={handleOnClickSendMessage}>SEND</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ContactForm;