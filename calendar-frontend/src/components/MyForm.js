import React, {Component} from 'react';
import {Popup, Form, Button} from 'semantic-ui-react'

class MyForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      startD: "",
      startT: "",
      endD: "",
      endT: ""
    }
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

  triggerElement = (prop) => {
    const element = document.getElementsByClassName("rbc-event-content")
    return element.find(i => (i.title === prop))
  }

  onSubmit = (e) => {
    e.preventDefault()
    const start = new Date(this.state.startD)
    const end = new Date(this.state.endD.split("-").join(","))
    const title = this.state.title

    this.props.onSubmit(title, start, end)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log("inform");


    return(
      <div>
        <Popup trigger={this.triggerElement} on='click'>
          <Form>
            <Form.Field>
              <input placeholder='event title' name='title' onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
              <input placeholder={this.props.start} name='startT'/>
            </Form.Field>
            <Form.Select fluid label='hour' options={this.rangeHours}/>
            <Form.Select fluid label='minute' options={this.rangeMinutes}/>
            <Form.Field>
              <input placeholder='end date YYYY-MM-DD' name='endT'/>
            </Form.Field>
            <Form.Select fluid label='hour' options={this.rangeHours}/>
            <Form.Select fluid label='minute' options={this.rangeMinutes}/>

            <Button type='submit' onClick={this.onSubmit}/>
          </Form>
        </Popup>
      </div>
    )
  }
}

export default Form
