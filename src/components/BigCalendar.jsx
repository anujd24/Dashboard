"use client"

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { rentalPropertyViewingSchedule } from "@lib/data"

const localizer = momentLocalizer(moment)

const BigCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={rentalPropertyViewingSchedule}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

export default BigCalendar