import React from 'react'
import './Alert.scss'

export default function Alert({type, message: msg}) {
  const message = msg ? msg.message : '';
  const details = msg?.details?.errors ? msg?.details?.errors : [];

  return (
    <div className={`alert alert--${type}`}>
      <p className='alert_message'>{message}</p>
      <ul className='alert__details'>
        {details.map((detail, index) => (
          <li  key={index}  className='alert__detail'>
          {detail.message}
          </li>
        ))}
        </ul>   
    </div>
  );
}
