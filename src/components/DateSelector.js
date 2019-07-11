import React from "react"
import dayjs from "dayjs"
import styled from "styled-components"
import tw from "tailwind.macro"

import * as time from "../services/time"

import Button from "./Button"

const Selector = styled.section`${tw`flex justify-between`};`
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

export default DateSelector
