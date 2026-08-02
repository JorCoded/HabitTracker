//import React from 'react'
import noItemImg from "../assets/690-6902481_transparent-zzz-emoji-png-google-sleeping-emoji-png.png";
import Button from "./Button";
import {isFuture, isSameDay, subDays} from "date-fns";
import {format} from "date-fns";
import {  useHabits, type Habit } from "../context/HabitProvider";

type HabitListProps={
    visibleDates: Date[],
}

export default function HabitList ({visibleDates}:HabitListProps)  {
    const {habits} = useHabits()
    let componentStr = <></>;

    if (habits.length ===0) {

        componentStr= <><p className="text-zinc-400 text-center py-12">No habits found... Add one to get started!</p><img className="mx-auto" width={100} height={100} src={noItemImg} alt="" /></>

    }else{

        componentStr = 
        <div className="w-full flex flex-col gap-3">
            
            {habits.map(habit=>(
                <HabitItem visibleDates={visibleDates} key={habit.id} habit={habit}/>
            ))}
        </div>;
    }

  return componentStr;
}

type HabitItemProps = {
    habit: Habit,
    visibleDates: Date[],
}

function HabitItem({habit, visibleDates}:HabitItemProps){
    const { deleteHabit, toggleHabit} = useHabits()

    

    const streak = getStreak(habit.completions);

    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3 ">{/* hover:bg-zinc-700 transition-colors */}
        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
                <span className="font-medium">{habit.name}</span>
                {
                    streak !==0 && (
                        <span className="text-small text-amber-400">🔥 {streak}</span>
                    )
                }
            </div>
            <Button 
            onClick={()=>deleteHabit(habit.id)} 
            variant="ghost-destructive" 
            className="text-sm">Delete
            </Button>
        </div>
        <div className="flex gap-1.5">
            {visibleDates.map(date=> (
                <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-sm" 
                key={date.toISOString()} 
                disabled={isFuture(date)}
                onClick={()=>toggleHabit(habit.id, date)}
                variant={habit.completions.some(d => isSameDay(date,d)) ? "primary":"secondary"}
                >

                    <span className="font-medium">{format(date, "EEE")}</span>
                    <span>{format(date, "d")}</span>

                </Button>
            ))}
        </div>
    </div>
}


function getStreak(completions:Date[]){
    let streak = 0;
    let date = new Date();

    while(completions.some(c=> isSameDay(c,date))){
        streak++;
        date = subDays(date,1);
    }

    return streak;
}