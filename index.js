import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Part=(props) => {
  console.log(props)
  return<p>{props.name}{props.exercises}</p>
}
const Total =(props) => {
return<p>Number of exercises {props.parts[0].exercises+ props.parts[1].exercises +props.parts[2].exercises}</p>
} 
const Contentconst= (props) => {
  return props.parts.map(i => <Part name = {i.name} exercises = {i.exercises} />)
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />.
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))