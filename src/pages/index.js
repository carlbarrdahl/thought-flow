import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import dayjs from "dayjs"
import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/Layout"
import Editor from "../components/Editor"
import DateSelector from "../components/DateSelector"

const App = () => {
  const [ selectedDate, selectDate ] = useState(time.format())
  return (
    <Layout>
      <DateSelector value={selectedDate} onChange={selectDate} />
      <Editor key={selectedDate} date={selectedDate} />
      <Link to="/auth">Connect device</Link>
    </Layout>
  )
}
const storage = {
  get: key => global.localStorage && global.localStorage.getItem(key),
  set: (key, value) =>
    global.localStorage && global.localStorage.setItem(key, value)
}
const time = {
  isToday: date => date === dayjs().format("YYYY-MM-DD"),
  format: (date = new Date()) => dayjs(date).format("YYYY-MM-DD")
}

export default App
