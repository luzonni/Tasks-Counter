import { Outlet } from "react-router-dom";
import { ListProvider } from "../../contexts/List";

const DefaultPage = () => {
    return (
        <ListProvider>
            <Outlet/>
        </ListProvider>
    )
}

export default DefaultPage