import React, {Component} from 'react';
import {Popup} from 'semantic-ui-react'

const triggerElement = (prop) => {
  const element = [...document.getElementsByClassName("rbc-event-content")]
  return element.find(i => (i.title === prop))
}

const EventPopup = (props) => (
  <div>
    <Popup trigger={triggerElement(props.title)} content='open' />
  </div>
)

export default EventPopup
