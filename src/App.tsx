//import { useState } from 'react'
export default function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
    </div>
  )
}

function Header(){
  return(
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <span className="">1 / 1 done today</span>
      </div>
      <div className="">
        Div 2
      </div>
    </header>
  )
}

