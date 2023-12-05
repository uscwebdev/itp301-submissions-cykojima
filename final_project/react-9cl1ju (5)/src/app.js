import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './index.css';
import Header from './header.js';
import Footer from './footer.js';
import Scheduler from './scheduler.js';
import ContactForm from './contactForm.js';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  var initial_events;
  if (localStorage.getItem('scheduled_events') == null) {
    initial_events = JSON.parse('[]');
  } else if (localStorage.getItem('scheduled_events') == []) {
    initial_events = initial_events = JSON.parse('[]');
  } else {
    initial_events = JSON.parse(localStorage.getItem('scheduled_events'));
  }
  const [events, setEvents] = useState(initial_events);

  console.log('hi');
  console.log(JSON.parse(localStorage.getItem('scheduled_events')));
  console.log('hi');
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="schedule"
            element={<Schedule events={events} setEvents={setEvents} />}
          />
          <Route
            path="calendar"
            element={<Calendar events={events} setEvents={setEvents} />}
          />
          <Route path="contact_us" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div id="homeContainer">
      <Header />
      <div className="VVP">
        <img
          className="VVPImage"
          src="https://github.com/uscwebdev/itp301-submissions-cykojima/blob/gh-pages/stackblitz_images/boat.png?raw=true"
          alt="Boat"
        />
        <div className="VVPTitle">MATCH@USC</div>
        <div className="VVPDescription">
          Igniting a love for learning in the heart of Skid Row
        </div>
      </div>
      <div className="VVP">
        <img
          className="VVPImage"
          src="https://github.com/uscwebdev/itp301-submissions-cykojima/blob/gh-pages/stackblitz_images/train.png?raw=true"
          alt="Train"
        />
        <div className="VVPTop">Educations is for Everyone</div>
        <div className="VVPBottom">
          Join us in helping children experiencing homelessness reach their
          education goals
        </div>
      </div>
      <div className="VVP">
        <img
          className="VVPImage"
          src="https://github.com/uscwebdev/itp301-submissions-cykojima/blob/gh-pages/stackblitz_images/ship.png?raw=true"
          alt="Ship"
        />
        <div className="VVPTop">Oh The Places We'll Go Together</div>
        <div className="VVPBottom">
          Together, we can inspire the next generation of scholars!
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Schedule({ events, setEvents }) {
  return (
    <div id="schedule_body_wrapper">
      <div id="schedule_outside_container">
        <Header />
        <Scheduler events={events} setEvents={setEvents} />
        <Footer />
      </div>
    </div>
  );
}

function Calendar(events, setEvents) {
  return (
    <div id="calendar_body_wrapper">
      <div id="calendar_outside_container">
        <Header />
        <div id="calendar_title">
          <h1>Monthly Volunteer Schedules</h1>
        </div>
        <div id="calendar_month_container">
          <FullCalendar
            id="calendar_month"
            plugins={[daygridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            editable
            headerToolbar={{
              left: 'title',
              center: '',
              right: 'prev,next',
            }}
            events={events}
          />
        </div>
        <Footer id="calendar_footer" />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact_body_wrapper">
      <div id="contact_outside_container">
        <Header />
        <div id="contact_wrapper">
          <h1 id="contact_title">Questions?</h1>
          <h2 id="contact_subtitle">Let's Get in Touch</h2>
          <img
            id="contact_layered_image"
            src="https://github.com/uscwebdev/itp301-submissions-cykojima/blob/gh-pages/stackblitz_images/wc_sky.png?raw=true"
            alt="Boat"
          />
          <div id="contact_form_wrapper">
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
