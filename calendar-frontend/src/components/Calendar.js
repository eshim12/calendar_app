import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events'
import '../react-big-calendar.css'
import {Popup, Button} from 'semantic-ui-react'

BigCalendar.momentLocalizer(moment);
// let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
let today = new Date ()

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [...events]
    }
  }

  eventPopup = (e) => (
    <Popup trigger={<Button icon='heart'/>} on='click' content='clicked!'/>
  )

  render() {
    console.log(this.state.events);
    return(
      <div>
        <BigCalendar
          selectable
          events={this.state.events}
          onSelectSlot={this.eventPopup}
          startAccessor='startDate'
          endAccessor='endDate'
        />
      </div>
    )
  }
}


export default Calendar
