    import React, { useState } from 'react'; // first thing in our code is the importations

    const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
// declare our stuff that we are going to use 

const formDataDivStyle = {
    textAlign: "left",
    width: "450px",
    margin: "auto",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
}
const inputDataDivStyle = {
    textAlign: "left",
    width: "450px",
    margin: "auto",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    padding: "15px 20px",
    marginBottom: "15px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
}
    return (
        <div>
        <form >
            <div style={inputDataDivStyle}>
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" onChange={ (event) => setFirstName(event.target.value) }/>
            </div>
            <div style={inputDataDivStyle}>
            <label for="lastName">Last Name</label>
            <input type="text"  name="lastName" onChange={ (event) => setLastName(event.target.value) } />
            </div>
            <div style={inputDataDivStyle}>
            <label for="email">Email</label>
            <input type="text" name="email" onChange={ (event) => setEmail(event.target.value) }/>
            </div>
            <div style={inputDataDivStyle}>
            <label for="password">Password</label>
            <input type="password" name="password"  onChange={ (event) => setPassword(event.target.value) }/>
            </div>
            <div style={inputDataDivStyle}>
            <label for="confirmPassord">Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={ (event) => setConfirmPassword(event.target.value) }/>
            </div>
        </form>

        <div style={ formDataDivStyle }>
                    <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                    <p>
                    <label>First Name: </label>{ firstName }
                    </p>
                    <p>
                    <label>Last Name: </label>{ lastName }
                    </p>
                    <p>
                    <label>Email: </label>{ email }
                    </p>
                    <p>
                    <label>Password: </label>{ password }
                    </p>
                    <p>
                    <label>Confirm Password: </label>{ confirmPassword }
                    </p>
        </div>
        </div>
    )
    }

    export default Form;