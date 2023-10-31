import React, { useContext, useState } from "react";
import DataContext  from "../src/UserContext";






export default function Login () {


    const initialFormState = {
        username: '',
        lastLogin: ''
    }

    const { userData, setUserData, initialUserData } = useContext(DataContext);
    const [formState, setFormState] = useState(initialFormState);

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value });
      };

      const handleSubmit = event => {
        event.preventDefault();
        const currentDate = new Date()
        setUserData({
            ...userData,username:formState.username, lastLogin: currentDate
        })
        
        setFormState(initialFormState);
      };
      console.log("formstate:",formState)
      console.log("userData:",userData)

      const logout = event => {
        setUserData(initialUserData)
      }




    return (
        <div className="loginDiv">
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                type="text"
             onChange={handleChange}
                value={formState.username}
            />
            <button type="submit">Login</button>
            <button onClick={logout}>Logout</button>
            </form>
        </div>
    )
}