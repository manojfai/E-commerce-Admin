import React from 'react';
import './style.scss';
import { images } from '../../../utils/images';
import OrderAndFeedbackCard from './OrderAndFeedbackCard';
import emailnotificationlabel from './EmailNotification.json';


const EmailNotifications = () => {
  return (
    <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '2em' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ display: 'flex', gap: '1em', width: '70%' }}>
          <div>
            <img src={images.back_ic} width="24px" height="24px" alt="Back Icon" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="headertitle">{emailnotificationlabel.title}</div>
            <div className="headerparagraph">{emailnotificationlabel.description}</div>
          </div>
        </div>
        <div
          style={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}>
          <button className="buttons">{emailnotificationlabel.button}</button>
        </div>
      </div>
      <OrderAndFeedbackCard />
    </div>
  );
};

export default EmailNotifications;
