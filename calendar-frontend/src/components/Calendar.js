import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events'
import '../react-big-calendar.css'

BigCalendar.momentLocalizer(moment);
// let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
let today = new Date ()
const Calendar = (props) => (

  <div>
    <BigCalendar
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>

)

export default Calendar
