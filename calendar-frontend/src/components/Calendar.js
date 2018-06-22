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
      title: "",
      form: true,
      display: "none"
    }
  }

  // componentDidMount = () => {
  //   const day = document.querySelector(".rbc-day-bg")
  //   day.ondblclick = () => {console.log("clicked")}
  // }

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
    console.log(e.slots);
    const img = (<div><p>HELLO</p></div>)

    e.action === "doubleClick" ? ReactDOM.render(img, document.getElementById('root')) : null
    const myForm = (<MyForm title={e.title} start={e.start} end={e.end} />)

  }

  showForm = () => {

  }

  handleSelectEvent = (event, e) => {
    console.log("event", event,"e", e);
    // const evnt = [...document.getElementsByClassName("rbc-event-content")]
    // const trigger = evnt.find(x => (x.title === e.title))
    // const ePopup = <EventPopup title={e.title}/>
    // const test = (<p>HELLO</p>)
    // ReactDOM.render(test, trigger)
  }

  render() {
    console.log(this.state.events);
    console.log("date", moment('2016-2-13').format());

    return(
      <div>
        <BigCalendar
          showMultiDayTimes={true}
          style={{height: '420px'}}
          events={this.state.events}
          selectable={true}
          onSelectSlot={(slot)=>this.handleNewEvent(slot)}
          onSelectEvent={(event, e) => this.handleSelectEvent(event, e)}
        />
      </div>
    )
  }
}


export default Calendar
