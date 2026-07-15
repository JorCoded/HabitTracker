//import React from 'react'
import noItemImg from "../assets/690-6902481_transparent-zzz-emoji-png-google-sleeping-emoji-png.png";
import Button from "./Button";
import {eachDayOfInterval, startOfWeek, endOfWeek, isFuture} from "date-fns";
import {format} from "date-fns";

export type Habit={
    id:string;
    name:string
}

type HabitListProps={
    habits: Habit[],
    deleteHabit:(id:string)=>void,
}

export default function HabitList ({habits, deleteHabit}:HabitListProps)  {
    //const habits =[{id:"1", name:"Avery"},{id:"2", name:"Bennette"},];

    let str = <></>;

    if (habits.length ===0) {
        str= <><p className="text-zinc-400 text-center py-12">No habits found... Add one to get started!</p><img className="mx-auto" width={100} height={100} src={noItemImg} alt="" /></>
    }else{

        str = <div className="flex flex-col gap-3">
            
            {habits.map(habit=>(
                <HabitItem deleteHabit={()=>deleteHabit(habit.id)} key={habit.id} habit={habit}/>
            ))}
            </div>
    }


  return str;
}

type HabitItemProps = {
    habit: Habit,
    deleteHabit: (id:string)=>void,
}
function HabitItem({habit, deleteHabit}:HabitItemProps){
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date(), {weekStartsOn:1}),
        end: endOfWeek(new Date(), {weekStartsOn:1}),
    }) ;

    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3 ">{/* hover:bg-zinc-700 transition-colors */}
        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
                <span className="font-medium">{habit.name}</span>
                <span className="text-small text-amber-400">🔥 3</span>
            </div>
            <Button onClick={()=>deleteHabit(habit.id)} variant="ghost-destructive" className="text-sm">Delete</Button>
        </div>
        <div className="flex gap-1.5">
            {visibleDates.map(date=> (
                <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-sm" key={date.toISOString()} disabled={isFuture(date)}>
                    <span className="font-medium">{format(date, "EEE")}</span>
                    <span>{format(date, "d")}</span>
                </Button>
            ))}
        </div>
    </div>
}