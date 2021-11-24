import React, { useState, useEffect } from 'react'
import InputSelectBox from './selectbox'
import './App.css'

export default function App () {
  const [values, setValues] = useState([])
  useEffect(() =>
    window.fetch('http://localhost:3000/values.json')
      .then(res => res.json())
      .then(json => json.values)
      .then(values => setValues(values))
  , [])
  return <InputSelectBox values={values} />
}
