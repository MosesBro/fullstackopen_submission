import Header from "./Header"
import Button from "./Button"
import Statistics from "./Statistics"

import { useState } from "react"

const App = () => {
  const [value, setValue] = useState({good: 0, neutral: 0, bad: 0})
  
  const setToValue = (newValue) => { setValue(newValue) }  

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setToValue({ ...value, good: value.good + 1 })} text='good'/>      
      <Button handleClick={() => setToValue({ ...value, neutral: value.neutral + 1 })} text='neutral'/>      
      <Button handleClick={() => setToValue({ ...value, bad: value.bad + 1})} text='bad'/>
      <Header text='statistics' />
      <Statistics text="good" value={value}/>

    </div>
  )
}

export default App