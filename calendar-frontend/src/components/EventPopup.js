import React, {Component} from 'react';
import {Popup} from 'semantic-ui-react'

class EventPopup extends Component {
  constructor(props) {
    super(props);
  }

  triggerElement = (prop) => {
    const element = document.getElementsByClassName("rbc-event-content")
    return element.find(i => (i.title === prop))
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Popup trigger={this.triggerElement(this.props.title)} content='open'/>
      </div>
    )
  }
}

export default Popup
