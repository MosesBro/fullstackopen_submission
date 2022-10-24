const Statistics = ({value}) => {
  return(
    <div>
      good {value.good}<br />
      neutral {value.neutral}<br />
      bad {value.bad}<br />
      average {(value.good - value.bad) / (value.good + value.neutral + value.bad)} <br/>
      positive {(value.good) / (value.good + value.neutral + value.bad) * 100} %
  </div>
  )
  }

export default Statistics