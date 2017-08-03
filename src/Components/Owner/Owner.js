import React from 'react';
import './Owner.css';
import {GoMarkGithub} from 'react-icons/lib/go'
import {ownerName,ownerLastName,ownerMail,ownerGithub} from '../../settings/ownerData'
const Owner = () => 
     (
      <div className="owner">
        <div className= "owner-data">
          <img src={require("../../assets/owner.jpg")} className="ownerPic" alt="Owner"/>
          <p className="owner-name">{ownerName}</p>
          <p className="owner-name">{ownerLastName}</p>
          <div className="separator">
            <GoMarkGithub size= {25}className="github-icon"/>
            <a className="owner-account" href="https://github.com/aschenkel">@{ownerGithub}</a>
          </div>
          <div className="separator">
            <img src={require("../../assets/gmail.png")} className="gmail-logo" alt="gmail"/>
            <p className="owner-account">{ownerMail}</p>
          </div>
        </div>
      </div>
    );

Owner.defaultProps = {
  displayName: 'Owner'
}

export default Owner;