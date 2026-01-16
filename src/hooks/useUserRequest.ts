import { useContext } from "react";
import { UserContext } from "../components/context";

export function useUserRequest() {
    return useContext(UserContext)
}