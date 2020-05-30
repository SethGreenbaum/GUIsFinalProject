import React from 'react';
// import "./style.css";

function MessagingCard() {

    return (
        <div className="card black">
        <div className="row">
            <div className="col s10">
        <div className="card" style={{ color: "white", backgroundColor: "black" }}>
            <form className="col s12">
            <div className="input-field col s10 offset-s2 m10 offset-m2 l10 offset-l2">
          <i className="material-icons prefix">mode_edit</i>
          <input id="icon_prefix2" className="validate" style={{ color: "white"}}></input>
          <label htmlFor="icon_prefix2">To:</label>
        </div>
        <br />
        <div className="input-field col s10 offset-s2 m10 offset-m2 l10 offset-l2">
          <input id="icon_prefix2" type="text" style={{ color: "white"}}></input>
          <label htmlFor="icon_prefix2">Message:</label>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    )
};

export default MessagingCard;