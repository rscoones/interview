import React, {Component} from "react"
import {FormGroup, ControlLabel, FormControl, Panel} from "react-bootstrap"

export default class NoJob extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Panel>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>What is your current status?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option>something</option>
            <option>something</option>
            <option>something</option>
          </FormControl>
        </FormGroup>
      </Panel>
    )
  }
}
