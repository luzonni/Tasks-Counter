import styled from "styled-components"
import MyList from "../../components/List"
import MyForm from "../../components/MyForm"
import Timer from "../../components/Timer"

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
            <Timer/>
            <MyList/>
            <MyForm/>
        </HomeStyle>
    )
}

export default Home