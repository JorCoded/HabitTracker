//import React from 'react'
import { useHabits } from "../context/HabitProvider";
import Button from "./Button"
import { useState, type SubmitEvent } from "react";

function HabitForm ()  {
    const [name, setName] = useState(""); //useState hook to manipulate variable 'name' using function 'setName'
    const {addHabit} = useHabits()

    function handleSubmit(e:SubmitEvent){ //handles the form submission and executes codes accordingly.
        e.preventDefault()

        if(name.trim()==="")return; //if there is nothing in the input field then return nothing.
        setName(""); //else call function setName and 
        addHabit(name);
    }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
        <input value={name} onChange={e=>setName(e.target.value)} type="text" name="" placeholder="New habit...." className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500" />
        <Button disabled={name.trim()===""} className="rounded-lg px-4 py-2 font-medium">Add Habit</Button>
    </form>
  )
}



export default HabitForm