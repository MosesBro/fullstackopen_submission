const StatisticsLine = ({text, value}) => {
  if (text==="positive") {
    return(
      <div>
        {text} {value} %
      </div>
    )
  }
    return(
    <div>
      {text} {value}
    </div>
  )
}

export default StatisticsLine