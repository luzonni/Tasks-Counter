import { ReactElement } from "react"
import styled from "styled-components"
import { White, Wine } from "../../assets/Colors"

const ByttonStyle = styled.button`
    background-color: ${Wine};
    color: ${White};
    border: none;
    padding: 1rem 2rem;
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: bold;
`

interface ButtonProps {
    children?: ReactElement | string
    type?: "button" | "submit" | "reset" | undefined
}

const Button = ({type = "button", children}: ButtonProps) => {
    return (
        <ByttonStyle type={type}>{children}</ByttonStyle>
    )
}

export default Button