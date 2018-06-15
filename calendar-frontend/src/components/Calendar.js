import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../events'
import MyForm from './MyForm'
import EventPopup from './EventPopup'
import {Popup, Button, Image} from 'semantic-ui-react'

BigCalendar.momentLocalizer(moment);
// let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
require('react-big-calendar/lib/css/react-big-calendar.css')

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [...events],
      title: ""
    }
  }

  onSubmit = (title, start, end) => {
    const newEvent = {
      title: title,
      start: start,
      end: end
    }
    this.setState({
      events: [...this.state, newEvent]
    })
  }

  handleNewEvent = (e) => {
    console.log(e);
    const img = (<div><p>HELLO</p></div>)
    const myForm = (<MyForm title={e.title} start={e.start} end={e.end} />)
    ReactDOM.render(img, document.getElementById('root'))
  }

  handleSelectEvent = (e) => {
    console.log("the event", new Date(e.start));

    alert(`event: ${e.title}, start: ${e.start}, end: ${e.end}`)
    return (<EventPopup title={e.title}/>)
  }

  render() {
    console.log(this.state.events);
    console.log("date", moment('2016-2-13').format());
    return(
      <div>
        <BigCalendar
          style={{height: '420px'}}
          events={this.state.events}
          onSelectSlot={slot => this.handleNewEvent(slot)}
        />
      </div>
    )
  }
}


export default Calendar
