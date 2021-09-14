import './App.css';
import React, {useState} from 'react'
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {

    const [successLogin, setSuccessLogin] = useState({name: '', email: ''})
    const [correct, setCorrect] = useState('')

    const adminData = {
        email: 'ya@hoo',
        pass: '123'
    }
    const Login = details => {
        if (details.email === adminData.email && details.password === adminData.pass) {
            setSuccessLogin({name: details.name, email: details.email})
        } else if (details.email !== adminData.email || details.password !== adminData.pass) {
            setCorrect('Invalid login/password')
        }

    }
    const logout = () => {
        setSuccessLogin({name: '', email: ''})
    }

    return (
        <div>
            {
                (successLogin.email !== '')
                    ? (
                        <div className='loggedIn'>
                            <div className="loggedIn__wrapper">
                                <div>You successfully logged in!</div>
                                <h2>Hello {successLogin.name}</h2>
                                <button className='logoutBtn' onClick={logout}>Logout</button>
                            </div>
                        </div>)
                    :
                    <LoginForm
                        Login={Login}
                        correct={correct}
                    />
            }

        </div>
    );
}

export default App;
