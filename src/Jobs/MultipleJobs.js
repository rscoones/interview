import React, {PureComponent} from "react"
import PropTypes from "prop-types"
import Job from "./Job"

export default class MultipleJobs extends PureComponent {
  static propTypes = {
    jobCount: PropTypes.number.isRequired
  }

  render() {
    const {jobCount} = this.props;
    const arr = [];
    for (let i = 0; i < jobCount; i++) {
      arr.push(jobCount);
    }

    return (
      <div>
        {arr.map((job, i) => <Job key={i} number={i + 1} />)}
      </div>
    );
  }
}
