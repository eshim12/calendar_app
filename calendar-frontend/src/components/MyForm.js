import React, {Component} from 'react';
import {Popup, Form, Button} from 'semantic-ui-react'

class MyForm extends Component {
  constructor(props) {
    super(props)

  }

  rangeHours = () => {
    let arr = []

    for (var i = 1; i < 25; i++) {
      arr.push({key:i, text:i, value:i})
    }

    return arr
  }

  rangeMinutess = () => {
    let arr = []

    for (var i = 0; i < 60; i++) {
      arr.push({key:i, text:i, value:i})
    }

    return arr
  }

  render() {
    console.log("inform");


    return(
      <div>
        <Popup trigger={document.querySelector(".rbc-event-content")} on='click'>
          <Form>
            <Form.Field>
              <input placeholder='event title'/>
            </Form.Field>
            <Form.Field>
              <input placeholder={this.props.startDate}/>
            </Form.Field>
            <Form.Field>
              <input placeholder='end date'/>
            </Form.Field>
            <Form.Select fluid label='hour' options={this.rangeHours}/>
            <Form.Select fluid label='minute' options={this.rangeMinutes}/>
            <Button type='submit' onClick={this.props.onSubmit}/>
          </Form>
        </Popup>
      </div>
    )
  }
}

export default Form
