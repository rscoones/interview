import React, {PureComponent} from "react"
import Buttons, { Option } from "./Buttons"
import Job from "./Job"
import NoJob from "./NoJob"

const OPTIONS: Option[] = [
  {label: "0", value: 0},
  {label: "1", value: 1},
  {label: "2", value: 2},
  {label: "3", value: 3}
]

interface Props {}

interface State {
  jobCount: number
}

export default class App extends PureComponent<Props, State> {
  state = {
    jobCount: 0
  }

  handleJobCount = (option: Option) => {
    this.setState({jobCount: option.value})
  }

  render() {
    const {jobCount} = this.state
    const jobs = Array.from(Array(jobCount), (_, x) => ({id: x}))

    return (
      <div>
        <Buttons options={OPTIONS} value={jobCount} onChange={this.handleJobCount} />
        {jobs.map((job, i) =>
          <Job key={job.id} number={i+1} />
        )}
        {jobs.length === 0 && <NoJob />}
      </div>
    )
  }
}
