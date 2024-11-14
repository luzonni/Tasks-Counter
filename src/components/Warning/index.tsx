import { ReactElement } from "react"
import styled from "styled-components"
import { White, Wine } from "../../assets/Colors"

interface WarningProps { 
    children: ReactElement | string
}

const WarningStyle = styled.div`
    width: 100%;
    color: ${White};
    background-color: ${Wine};
    padding: 1.5rem;
    text-align: center;
    box-sizing: border-box;
`

const Warning = ({children}: WarningProps) => {
    return (
        <WarningStyle>
            {children}
        </WarningStyle>
    )
}

export default Warning