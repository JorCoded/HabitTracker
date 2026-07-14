//import React from 'react'
import Button from "./Button"

function HabitForm ()  {
  return (
    <form className="flex gap-2">
        <input type="text" name="" className="flex-1 rounded-lg bg-zinc-800" />
        <Button>Add Habit</Button>
    </form>
  )
}

export default HabitForm