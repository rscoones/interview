import React, {PureComponent} from "react"
import {FormGroup, ControlLabel, FormControl, Panel} from "react-bootstrap"


interface Props {}

export default class App extends PureComponent<Props> {
  render() {
    return (
      <Panel>
        <FormGroup controlId="jobOccupation">
          <ControlLabel>What is your current status?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option>unemployed</option>
            <option>student</option>
          </FormControl>
        </FormGroup>
      </Panel>
    )
  }
}
