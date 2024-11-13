import styled from "styled-components"
import CardItem from "./CardItem"
import { DarkWine, White } from "../../assets/Colors"
import { useList } from "../../contexts/List"

const MyListStyle = styled.aside`
    width: 100%;
    margin: 2rem;
    background-color: ${DarkWine};
    padding: 1rem;
    border-radius: 16px;
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${White};
    }

    .list__tasks {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 20rem;
        overflow-y: auto;
        margin: 1rem 0;
    }
`

const MyList = () => {
    const {tasks} = useList()
    return (
        <MyListStyle>
            <h2> Day Studies</h2>
            <ul className="list__tasks">
                {tasks.map((task, index) => {
                    return (
                        <CardItem key={index} {...task}/>
                    )
                })}
            </ul>
        </MyListStyle>
    )
}

export default MyList