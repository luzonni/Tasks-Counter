import { createContext, ReactNode, useContext, useState } from "react";
import Task from "../shared/interfaces/Task";

interface ContextTypes {
    tasks: Task[]
    setTasks: (tasks: Task[]) => void
    selected?: Task
    setSelected: (tasks?: Task) => void
}

export const ListContext = createContext<ContextTypes>({
    tasks: [],
    setTasks: () => {},
    selected: undefined,
    setSelected: () => {}
});
ListContext.displayName = "List"

interface ListProviderProps {
    children: ReactNode
}

export const ListProvider = ({ children }: ListProviderProps) => {
    const [ tasks, setTasks ] = useState<Task[]>([])
    const [ selected, setSelected ] = useState<Task>()
    return (
        <ListContext.Provider value={{ tasks, setTasks, selected, setSelected }}>
            {children}
        </ListContext.Provider>
    )
}

export const useList = () => {
    const { tasks, setTasks, selected, setSelected } = useContext(ListContext)
    
    return {tasks, setTasks, selected, setSelected}
} 