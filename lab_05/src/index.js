import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div id="container">
      <div id="row1">
        <h1>Conner Kojima</h1>
        <a href="mailto:cykojima@usc.edu">cykojima@usc.edu</a>
        <div id="favorite_color">
          <p>Favorite Color</p>
        </div>
      </div>
      <h2>Favorite Activity: Spikeball</h2>
      <img
        src="https://github.com/uscwebdev/itp301-submissions-cykojima/blob/gh-pages/assignment_01/images/spikeball.jpeg?raw=true"
        alt="image"
      />
      <h2>School Schedule</h2>
      <ol>
        <li className="list_item">ITP 301</li>
        <li className="list_item">ITP 487</li>
        <li className="list_item">ITP 489</li>
        <li className="list_item">HBIO 408</li>
      </ol>
    </div>
  </React.StrictMode>
);
