import React, { useEffect, useState } from "react"
import dayjs from "dayjs"
import styled from "styled-components"
import tw from "tailwind.macro"

import Layout from "../components/Layout"

const Textarea = styled.textarea`${tw`w-full text-lg`};`
const Selector = styled.section`${tw`flex justify-between`};`
const Button = styled.button`
  ${tw`bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4`};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`
const Current = styled.span`${tw`p-4`};`

const DateSelector = ({ value, onChange }) => {
  const handleChange = v => e => {
    onChange(dayjs(value).add(v, "day").format("YYYY-MM-DD"))
  }
  return (
    <Selector>
      <Button onClick={handleChange(-1)}>Previous</Button>
      <Current>{value}</Current>
      <Button onClick={handleChange(+1)} disabled={time.isToday(value)}>
        Next
      </Button>
    </Selector>
  )
}
const Editor = ({ date }) => {
  const [ state, setState ] = useState(storage.get(date) || "")

  useEffect(
    () => {
      storage.set(date, state)
    },
    [ state ]
  )
  return (
    <Textarea
      rows={10}
      placeholder={
        time.isToday(date) ? (
          "Write something..."
        ) : (
          "You can only write for todays entry"
        )
      }
      readOnly={!time.isToday(date)}
      onChange={e => setState(e.target.value)}
      value={state}
    />
  )
}

const App = () => {
  const [ selectedDate, selectDate ] = useState(time.format())
  return (
    <Layout>
      <DateSelector value={selectedDate} onChange={selectDate} />
      <Editor key={selectedDate} date={selectedDate} />
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
