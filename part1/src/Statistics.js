import StatisticsLine from "./StatisticsLine"

const Statistics = ({value}) => {
  if ((value.good + value.neutral + value.bad) === 0) {
    return(
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      <StatisticsLine text="good" value={value.good} />
      <StatisticsLine text="neutral" value={value.neutral} />
      <StatisticsLine text="bad" value={value.bad} />
      <StatisticsLine text="average" value={(value.good - value.bad) / (value.good + value.neutral + value.bad)} />
      <StatisticsLine text="positive" value={(value.good) / (value.good + value.neutral + value.bad) * 100} />
    </div>
  )
}

export default Statistics