import { createContext, useContext } from "react";
const Context = createContext();

export default function AppStore({ children }) {

    const user= {
        id: 1,
        name: "John Doe",
        token:"3DJ39#DFLLDF58$LKDFO#O3N4OO"
    }

    return (
        <Context.Provider value={ {user} }>
            {children}
        </Context.Provider>
    );
}

export function useProgramContext() {
    return useContext(Context);
}
