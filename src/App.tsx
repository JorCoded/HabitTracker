//import { useState } from 'react'
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import { HabitProvider } from "./context/HabitProvider";
import HabitList from "./components/HabitList";

export default function App() {

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <HabitProvider>
      <Header/>
      <HabitForm />
      <HabitList/>
      </HabitProvider>
    </div>
  )
}