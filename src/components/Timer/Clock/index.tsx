import styled from "styled-components"
import { White, Wine } from "../../../assets/Colors"
import Task from "../../../shared/interfaces/Task"
import { secondsToString } from "../../../shared/utils/Date"

const ClockStyle = styled.div`
    display: flex;
    padding: 1rem;
    border-radius: 6px;
    justify-content: center;
    background-color: ${Wine};
    color: ${White};
    font-size: 2.5rem;
    font-weight: bold;
`

interface ClockProps {
    selected?: Task
}

const Clock = ({ selected }: ClockProps) => {
    return(
        <ClockStyle>
            <span>{secondsToString(selected?.time)}</span>
        </ClockStyle>
    )
}

export default Clock