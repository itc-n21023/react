import React, { useState, useEffect } from 'react'
import GoogleMaps from './Component/GoogleMaps.js'
import './App.css'

export default function App () {
  const [values, setValues] = useState([])
  const 
  useEffect(() =>
    window.fetch('http://localhost:3000')
      .then(res => res.json())
      .then(json => json.values)
      .then(values => setValues(values))
  , [])
  return <GoogleMaps values={values} />
}
