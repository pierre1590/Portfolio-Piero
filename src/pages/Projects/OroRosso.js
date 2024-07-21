import React from 'react';
import { Link } from 'react-router-dom';

export default function OroRosso() {
  return (
    <>
      <div className="container">
        <h1>Welcome to OroRosso</h1>
        <p>
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
      <p>
        If you wish to delete your account and all associated data, please follow these steps within the OroRosso app:
      </p>
      <ol>
        <li>Open the OroRosso app on your device.</li>
        <li>Go to the account settings section.</li>
        <li>Select the "Delete Account" option.</li>
        <li>Follow the instructions to confirm the deletion of your account.</li>
      </ol>
      <p>
        For further assistance, please contact our support team at support@ororosso.com.
      </p>
      <Link to="/">Back to Home</Link>

      </div>
    </>
  );
}
