import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import ls from "local-storage"

// This is where you can control the messaging modal to the recipient,
// the submit function needs to be setup, right now it just closes the modal


class MessagingModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: ''
        }
      };

  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
    var user = ls.get('username');
    this.setState({
      username: user
    })
    console.log("ls"+ user)

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <button
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Create message
        </button>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal black"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
              <form className="col s12">
            <div className="input-field col s6">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" className="materialize-textarea" style={{ color: "white"}}></textarea>
          <label htmlFor="icon_prefix2">To:</label>
        </div>
        <br />
        <div className="input-field col s6">
          <textarea id="icon_prefix2" className="materialize-textarea" style={{ color: "white"}}></textarea>
          <label htmlFor="icon_prefix2">Message:</label>
        </div>
        </form>
          </div>
          <div className="modal-footer black">
          
            <button className="btn btn-success mt-3 mb-5 modal-close"  type="submit">
            Send Message
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagingModal;
