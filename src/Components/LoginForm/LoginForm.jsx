import React, {useState} from 'react';
import './LoginForm.css'

const LoginForm = ({Login, correct}) => {

    const [userData, setUserData] = useState({name: '', email: '', password: ''})

    const onSubmitHandler = e => {
        e.preventDefault()
        Login(userData)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form__wrapper">
                <h2>React login form</h2>
                <div className='messageBlock'>
                    {correct}
                </div>
                <div className='inputsWrapper'>
                    <div className='input-block'>
                        <label htmlFor='name'>Login:</label>
                        <input
                            type="name"
                            name='name'
                            id='name'
                            required placeholder="Ваше имя"
                            onChange={e => setUserData({...userData, name: e.target.value})}
                            className='inputForm'
                        />
                    </div>
                    <div className='input-block'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            required placeholder="email"
                            onChange={e => setUserData({...userData, email: e.target.value})}
                            className='inputForm'
                        />
                    </div>
                    <div className='input-block'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            required placeholder="password"
                            onChange={e => setUserData({...userData, password: e.target.value})}
                            className='inputForm'
                        />
                    </div>
                    <input type="submit" className='submitInput'/>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;