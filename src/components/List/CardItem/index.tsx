import styled from "styled-components";
import { DarkWine, White, WhiteWine, Wine } from "../../../assets/Colors";
import Task from "../../../shared/interfaces/Task";
import { useList } from "../../../contexts/List";



const CardItemStyle = styled.li`
    button {
        border: none;
        width: 100%;
        background-color: ${Wine};
        padding: 1rem;
        border-radius: 16px;
        color: ${White};  
        display: flex;
        flex-direction: row; 
        justify-content: space-between;
        align-items: center;
    }
    button h3 {
        font-size: 1.5rem;
    }
    button span {
        background-color: ${DarkWine};
        padding: 0.5rem;
        border-radius: 6px;
        font-weight: bold;
    }
    .selected {
        background-color: ${WhiteWine};
        span {
            background-color: ${Wine};
        }
    }
`

const CardItem = (task: Task) => {
    const { selected, setSelected } = useList()
    const choose = (task: Task) => {
        if(task.id === selected?.id) {
            setSelected(undefined)
        }else {
            setSelected(task)
        }
    }
    const isSelected = () => {
        return task.id === selected?.id
    }
    return(
        <CardItemStyle onClick={() => {choose(task)}}>
            <button className={isSelected() ? "selected" : ""}>
                <h3>{task.name}</h3>
                <span>{task.time}</span>
            </button>
        </CardItemStyle>
    )
}

export default CardItem