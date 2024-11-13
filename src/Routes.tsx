import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import DefaultPage from "./pages/DefaultPage"


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp