import React from 'react';
import './style.css'
import { Card } from 'react-bootstrap';

export default function OroRosso() {
  return (
    <>
      <div className="container2">
        <h1 className='welcome'>Welcome to <h1 className='rosso'>OroRosso</h1></h1>
       {/*Card.Img with link */}
        <Card.Img className='app-img' variant="top" src="https://i.ibb.co/W32LcbS/Screenshot-2024-07-18-224947.png"  />
        <p className='description-app'>
          OroRosso is an application that helps you turn your cherry harvest
          into profits by tracking companies, locations, clients, and earnings.
          You can easily manage and monitor all aspects of your cherry
          production and sales process with our intuitive platform.
        </p>

        <h2>Features</h2>
      <ul>
        <li>Track cherry harvest quantities and varieties</li>
        <li>Manage company details and client information</li>
        <li>Monitor earnings and sales performance</li>
        <li>Organize locations and streamline operations</li>
      </ul>

      <h2>How to Delete Your Account</h2>
      <p className='delete'>
        If you wish to delete your account and all associated data, please follow these steps within the OroRosso app:
      </p>
      <ol>
        <li>Open the OroRosso app on your device.</li>
        <li>Go to the account settings section.</li>
        <li>Select the "Delete Account" option.</li>
        <li>Follow the instructions to confirm the deletion of your account.</li>
      </ol>
      <p className='assistance'>
        For further assistance, please contact me, <a href='mailto:piero2906@gmail.com'>Piero Sabino</a>.
      </p>
      </div>
    </>
  );
}
