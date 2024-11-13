import styled from "styled-components"
import MyList from "../../components/List"
import MyForm from "../../components/MyForm"
import { Hole } from "../../assets/Colors"
import Timer from "../../components/Timer"

const HomeStyle = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .main__contents {
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: ${Hole};
    }
`

const Home = () => {
    return (
        <HomeStyle>
            <Timer/>
            <div className="main__contents">
                <MyForm/>
                <MyList/>
            </div>
        </HomeStyle>
    )
}

export default Home