import dayjs from "dayjs"

export const isToday = date => date === dayjs().format("YYYY-MM-DD")
export const format = (date = new Date()) => dayjs(date).format("YYYY-MM-DD")
