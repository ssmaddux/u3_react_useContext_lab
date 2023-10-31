import React, { useContext } from "react";
import DataContext  from "../src/UserContext";
import Login from "./Login"

export default function Header () {


    return (
        <div>
            <h2>This is Header</h2>
            <Login/>
        </div>
    )
}