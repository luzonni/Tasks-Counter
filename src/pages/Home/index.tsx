import styled from "styled-components"
import MyList from "../../components/List"
import MyForm from "../../components/MyForm"
import Timer from "../../components/Timer"
import Warning from "../../components/Warning"

const HomeStyle = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`

const Home = () => {
    return (
        <HomeStyle>
            <Warning>
                This version has a bug when you change de taks while running timer, wainting to fix it
            </Warning>
            <Timer/>
            <MyList/>
            <MyForm/>
        </HomeStyle>
    )
}

export default Home