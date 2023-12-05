import React from 'react';
import { useRef, useState } from 'react';
import './index.css';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import { v4 as uuid } from 'uuid';
import daygridPlugin from '@fullcalendar/daygrid';

export default function Scheduler({ events, setEvents }) {
  const calendarRef = useRef(null);
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Skid Row Learning Center');
  const [startTime, setStartTime] = useState('2:30 PM');
  const [endTime, setEndTime] = useState('5:30 PM');
  const [isWeeklySchedule, setIsWeeklySchedule] = useState(false);
  const [canDrive, setCanDrive] = useState(false);
  const [dayInfo, setDayInfo] = useState(false);

  function handleSelect(info) {
    setDayInfo(info);
  }

  function handleSubmit(e) {
    if (dayInfo == false) {
      alert('Please Select a Day First');
      e.preventDefault();
    } else if (!fullName.includes(' ')) {
      alert('Please Provide First and Last Name');
      e.preventDefault();
    } else if (!email.includes('@')) {
      alert('Please Provide Valid Email');
      e.preventDefault();
    } else {
      e.preventDefault();
      const { start, end } = dayInfo;

      console.log(startTime);
      console.log(endTime);
      setEvents([
        ...events,
        {
          start,
          title: fullName + ' ' + startTime + ' - ' + endTime,
          allDay: true,
          displayEventTime: false,
          id: uuid(),
        },
      ]);

      console.log(JSON.stringify(events));
      console.log(events);
      localStorage.setItem(
        'scheduled_events',
        JSON.stringify([
          ...events,
          {
            start,
            title: fullName + ' ' + startTime + ' - ' + endTime,
            allDay: true,
            displayEventTime: false,
            id: uuid(),
          },
        ])
      );
    }
  }

  function handleChange(e, value) {
    if (e.currentTarget.id == 'fullName') {
      setFullname(e.currentTarget.value);
    } else if (e.currentTarget.id == 'email') {
      setEmail(e.currentTarget.value);
    }
  }

  return (
    <div id="schedule_overall_container">
      <div id="schedule_title">
        <h1>Schedule a Ride to the Center</h1>
      </div>
      <div id="schedule_container">
        <div className="calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[daygridPlugin, interactionPlugin]}
            initialView="dayGridWeek"
            weekends={false}
            height="500px"
            headerToolbar={{
              left: 'title',
              center: '',
              right: 'prev,next',
            }}
            editable
            selectable
            select={(info) => {
              handleSelect(info);
            }}
            events={events}
          />
        </div>

        <div className="form">
          <form id="ScheduleForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Full Name: <span></span>
              </label>
              <input
                className="scheduler_text"
                placeholder="Johny AppleSeed"
                id="fullName"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={fullName}
              />
            </div>

            <div className="form-group">
              <label>
                Email: <span></span>
              </label>
              <input
                className="scheduler_text"
                placeholder="JohnyAppleSeed@gmail.com"
                id="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={email}
              />
            </div>

            <div className="form-group">
              <label>Location:</label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select a location</option>
                <option value="Skid Row Learning Center">
                  Skid Row Learning Center
                </option>
                <option value="Online">Online</option>
              </select>
            </div>

            <div className="form-group">
              <div className="time-select">
                <label>Start Time:</label>
                <select
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  <option>2:30 PM</option>
                  <option>3:00 PM</option>
                  <option>3:30 PM</option>
                  <option>4:00 PM</option>
                  <option>4:30 PM</option>
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                </select>
              </div>

              <div className="time-select">
                <label>End Time:</label>
                <select
                  id="endTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  <option>2:30 PM</option>
                  <option>3:00 PM</option>
                  <option>3:30 PM</option>
                  <option>4:00 PM</option>
                  <option>4:30 PM</option>
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>
                Can you drive?
                <input
                  id="canDrive"
                  type="checkbox"
                  checked={canDrive}
                  onChange={(e) => setCanDrive(e.target.checked)}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Is this your weekly schedule?
                <input
                  type="checkbox"
                  checked={isWeeklySchedule}
                  onChange={(e) => setIsWeeklySchedule(e.target.checked)}
                />
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
