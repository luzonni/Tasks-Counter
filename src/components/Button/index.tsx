import { ReactElement } from "react"
import styled from "styled-components"
import { White, WhiteWine, Wine } from "../../assets/Colors"

const ByttonStyle = styled.button`
    background-color: ${Wine};
    color: ${White};
    border: none;
    padding: 1rem 2rem;
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: bold;
    &:active {
        background-color: ${WhiteWine};
    }
`

interface ButtonProps {
    children?: ReactElement | string
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

const Button = ({type = "button", children, onClick}: ButtonProps) => {
    const playSound = () => {
        const audio = new Audio('/public/place.wav');
        audio.play();
      };
    function click() {
        if(onClick) {
            onClick()
        } 
        playSound()
    }
    return (
        <ByttonStyle type={type} onClick={() => click()}>
            {children}
        </ByttonStyle>
    )
}

export default Button