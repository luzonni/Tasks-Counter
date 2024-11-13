import styled from "styled-components"
import { White, Wine } from "../../../assets/Colors"
import { useList } from "../../../contexts/List"
import { timeToSecond } from "../../../shared/utils/Date"
import { useEffect, useState } from "react"

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

const Clock = () => {
    const { selected } = useList()
    if (!selected) {
        return (
            <ClockStyle>
                <span>0</span>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
            </ClockStyle>
        )
    }
    const [ time, setTime ] = useState<number>(0)
    useEffect(() => {
        setTime(timeToSecond(selected.time))
    }, [selected])
    const minutos: number = Math.floor(time/60)
    const seconds: number = time % 60
    const [minDezena, minUni] = String(minutos).padStart(2, "0")
    const [secondDezena, secondUni] = String(seconds).padStart(2, "0")
    return(
        <ClockStyle>
            <span>{minDezena}</span>
            <span>{minUni}</span>
            <span>:</span>
            <span>{secondDezena}</span>
            <span>{secondUni}</span>
        </ClockStyle>
    )
}

export default Clock