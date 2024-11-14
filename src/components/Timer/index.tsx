import styled from "styled-components"
import Button from "../Button"
import Clock from "./Clock"
import { DarkWine, White } from "../../assets/Colors"
import { useList } from "../../contexts/List"
import { useState } from "react"

const TimerStyle = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${DarkWine};
    padding: 1rem;
    border-radius: 12px;
    p {
        color: ${White};
    }
`

const Timer = () => {
    const { selected, setSelected, tasks, setTasks } = useList()
    const [ running, setRunning ] = useState<boolean>(false)
    setTimeout(() => { 
        if(selected && selected.time > 0 && running) {
            setTasks(tasks.map((task) => {
                if(selected.id === task.id) {
                    const changedTask = {
                        ...task,
                        time: task.time - 1
                    }
                    setSelected(changedTask)
                    return changedTask
                }
                return task
            }))
        }else if(selected && selected.time === 0) {
            setRunning(false)
            setTasks(tasks.map((task) => {
                if(task.time === 0) {
                    return {
                        ...task,
                        finish: true
                    }
                }
                return task
            }))
        }
    }, 1000)
    
    return (
        <TimerStyle>
            <p>Choose a card and start a timer.</p>
            <div>
                <Clock selected={selected}/>
            </div>
            <Button onClick={() => {setRunning(!running)}}>{!running ? "Start" : "Pause"}</Button>
        </TimerStyle>
    )
}

export default Timer