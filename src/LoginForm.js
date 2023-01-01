import React from 'react';
import { useState } from 'react';

const LoginForm = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });

    const { username, password } = userInfo;

    // user handler
    const handleUser = ({ prevState, target: { value } }) => {
        setUserInfo({ ...prevState, username: value });
        console.log(username);
    };

    // password handler
    const handlePassword = ({ prevState, target: { value } }) => {
        setUserInfo({ ...prevState, password: value });
        console.log(password);
    };

    // validate login
    const validateLogin = () => {
        username === username && password === password && alert('welcome!');
    };

    return (
        <>
            <form>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={handleUser} value={username} />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        onChange={handlePassword}
                        value={password}
                    />
                </div>
                <button>Login</button>
            </form>
        </>
    );
};

export default LoginForm;
