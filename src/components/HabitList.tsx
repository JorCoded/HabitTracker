//import React from 'react'

function HabitList ()  {
    const habits =[{id:"1", name:"Avery"},{id:"2", name:"Bennette"},];

    let str = <></>;

    if (habits.length ===0) {
        str= <><p className="text-zinc-400 text-center py-12">No habits found... Add one to get started!</p>{/* <img width={100} height={100} src="src/assets/690-6902481_transparent-zzz-emoji-png-google-sleeping-emoji-png.png" alt="" /> */}</>
    }else{

        str = <div className="flex flex-col gap-3">
            
            {habits.map(habit=>(
                <HabitItem key={habit.id} habit={habit}/>
            ))}
            </div>
    }


  return str;
}

type HabitItemProps = {
    habit: {id:string,
    name:string}
}
function HabitItem({habit}:HabitItemProps){
    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3 hover:bg-zinc-700 transition-colors">
        <div className="flex items-center justify-between">
        {habit.name}
        </div>
    </div>
}

export default HabitList