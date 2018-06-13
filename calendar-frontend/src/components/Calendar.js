import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events'
import '../react-big-calendar.css'
import MyForm from './MyForm'
import EventPopup from './EventPopup'
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

  onSubmit = (e) => {
    const newEvent = {
      title: e.title,
      allDay: true,
      start: e.start,
      end: e.end
    }
    this.setState({
      events: [...this.state, newEvent]
    })
  }

  handleNewEvent = (e) => {
    console.log(e);
    return (<MyForm title={e.title} start={e.start} end={e.end} />)
  }

  handleSelectEvent = (e) => {
    console.log(new Date(e.start));
    alert(`event: ${e.title}, start: ${e.start}, end: ${e.end}`)
    return (<EventPopup start={e.start}/>)
  }

  render() {
    console.log(this.state.events);
    return(
      <div>
        <BigCalendar
          selectable
          defaultView='week'
          events={this.state.events}
          onSelectSlot={this.handleNewEvent}
          onSelectEvent={this.handleSelectEvent}
          startAccessor='start'
          endAccessor='end'
        />
      </div>
    )
  }
}


export default Calendar
