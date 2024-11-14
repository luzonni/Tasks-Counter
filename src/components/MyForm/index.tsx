import styled from "styled-components"
import Button from "../Button"
import { DarkWine, White, WhiteWine, Wine } from "../../assets/Colors"
import { useState } from "react"
import { useList } from "../../contexts/List"
import { v4 as uuid } from "uuid"
import { timeToSecond } from "../../shared/utils/Date"


const MyFormStyled = styled.form`
    width: 60%;
    padding: 1rem;
    background-color: ${DarkWine};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 12px;
    .inputs {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .box__input {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: ${White};
        padding: 1rem;
        justify-content: center;
        align-items: center;
    }
    .box__input input {
        border: none;
        background-color: ${Wine};
        color: ${White};
        padding: 1rem;
        border-radius: 5px;
    }
    .box__input input::placeholder {
        color: ${WhiteWine};
    }
    @media screen and (max-width: 1080px) {
        .inputs {
            flex-direction: column;
        }
    }
`

const MyForm = () => {
    const { tasks, setTasks } = useList()
    const [name, setName] = useState("teste")
    const [time, setTime] = useState("00:00:10")
    const saveTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newTask = {
            id: uuid(),
            name: name,
            time: timeToSecond(time),
            selected: false,
            finish: false
        }
        setTasks([...tasks, newTask])
        setName("")
        setTime("")
    }
    return (
        <MyFormStyled onSubmit={event => saveTask(event)}>
            <div className="inputs">
                <div className="box__input">
                    <label htmlFor="task">Add a new Studie</label>
                    <input type="text" name="Task" id="task" placeholder="Whats do u studies?" required onChange={(event) => setName(event.target.value)} value={name} />
                </div>
                <div className="box__input">
                    <label htmlFor="time">Times</label>
                    <input type="time" step="1" min="00:00:00" max="01:30:00" name="time" id="time" required onChange={(event) => setTime(event.target.value)} value={time} />
                </div>
            </div>
            <div className="box__input">
                <Button type="submit">Save</Button>
            </div>
        </MyFormStyled>
    )
}

export default MyForm