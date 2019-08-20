import React, {PureComponent} from "react"
import {FormGroup, ControlLabel, FormControl, Panel, InputGroup} from "react-bootstrap"


interface Props {
  number: number
}

export default class App extends PureComponent<Props> {
  render() {
    const {number} = this.props

    return (
      <Panel>
        <h4>Job {number}</h4>
        <FormGroup controlId="jobOccupation">
          <ControlLabel>What is your occupation?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option>dev</option>
            <option>pm</option>
            <option>qa</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="companyName">
          <ControlLabel>Company Name</ControlLabel>
          <FormControl type="text" placeholder="Enter company name" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Income</ControlLabel>
          <InputGroup>
            <InputGroup.Addon>£</InputGroup.Addon>
            <FormControl type="number" placeholder="Enter amount" />
          </InputGroup>
        </FormGroup>
      </Panel>
    )
  }
}
