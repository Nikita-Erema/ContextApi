import { createContext, useEffect, useState } from "react";
import type { PropsChildren, ElementList } from "../type/types";

export const UserContext = createContext<ElementList[]>([]);

async function listRequire() {
        const list = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        return await list.json();
}

export function UserProvider({children}: PropsChildren) {

    const [data, setData] = useState<ElementList[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await listRequire();
            setData(res);
        } 

        load();
    }, [])

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}