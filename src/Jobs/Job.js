import React, {PureComponent} from "react"
import PropTypes from "prop-types"
import {FormGroup, ControlLabel, FormControl, Panel} from "react-bootstrap"

export default class NoJob extends PureComponent {
  static propTypes = {
    number: PropTypes.number.isRequired
  }

  render() {
    const {number} = this.props;

    return (
      <Panel>
        <h4>Job {number}</h4>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>What is your occupation?</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">select</option>
            <option>something</option>
            <option>something</option>
            <option>something</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Company name</ControlLabel>
          <FormControl type="text" placeholder="Enter company name" />
        </FormGroup>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Income</ControlLabel>
          <FormControl type="text" placeholder="Enter ammont" />
        </FormGroup>
      </Panel>
    );
  }
}
