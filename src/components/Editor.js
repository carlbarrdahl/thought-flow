import React, { useEffect, useState, useReducer } from "react"
import dayjs from "dayjs"
import styled from "styled-components"
import tw from "tailwind.macro"

import * as db from "../services/db"
import * as time from "../services/time"

const Textarea = styled.textarea`${tw`w-full text-lg p-4 flex-1`};`

const handlers = {
  UPDATE: (state, { payload: { date, content } }) => {
    return {
      ...state,
      [date]: {
        ...state[date],
        content: content,
        updated: Date.now()
      }
    }
  }
}
const reducer = (state, action) => {
  const handler = handlers[action.type]
  return handler ? handler(state, action) : state
}

const useEditor = ({ date }) => {
  const [ state, dispatch ] = useReducer(
    reducer,
    db.get() || {
      [date]: {
        content: "",
        updated: Date.now()
      }
    }
  )
  useEffect(
    () => {
      db.save(state)
    },
    [ date, state[date] ]
  )

  return [ state[date] || {}, payload => dispatch({ type: "UPDATE", payload }) ]
}
const Editor = ({ date }) => {
  const [ state, update ] = useEditor({ date })
  console.log(state, date)
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
      // readOnly={!time.isToday(date)}
      onChange={e => update({ date, content: e.target.value })}
      value={state.content}
    />
  )
}

export default Editor
