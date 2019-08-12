import React, {PureComponent} from "react"
import Buttons from "./Buttons"

const OPTIONS = [
  {label: "0", value: 0},
  {label: "1", value: 1},
  {label: "2", value: 2},
  {label: "3", value: 3}
]


export default class App extends PureComponent {
  state = {
    jobCount: 0
  }

  handleJobCount = (option) => {
    this.setState({jobCount: option.value})
  }

  render() {
    const {jobCount} = this.state

    return (
      <div>
        <Buttons options={OPTIONS} value={jobCount} onChange={this.handleJobCount} />
        {/** @todo: add job displays */}
      </div>
    )
  }
}
