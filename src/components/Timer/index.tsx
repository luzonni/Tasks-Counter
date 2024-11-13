import styled from "styled-components"
import Button from "../Button"
import Clock from "./Clock"
import { DarkWine, White } from "../../assets/Colors"

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
    return(
        <TimerStyle>
            <p>Choose a card and start a timer.</p>
            <div>
                <Clock/>
            </div>
            <Button>Start</Button>
        </TimerStyle>
    )
}

export default Timer