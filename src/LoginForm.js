import React from 'react';
import { useState } from 'react';

const LoginForm = ({ Eye, EyeSlashed }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    });

    const [type, setType] = useState('password');
    const [hidden, setHidden] = useState(EyeSlashed);

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
    // const validateLogin = () => {
    //     username === username && password === password && alert('welcome!');
    // };

    // toggle password handle
    const toggle = () => {
        //changing state to toggle
        if (type === 'password') {
            setHidden(Eye);
            setType('text');
        } else {
            setHidden(EyeSlashed);
            setType('password');
        }
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
                        type={type}
                        onChange={handlePassword}
                        value={password}
                    />
                    <span onClick={toggle}>{hidden}</span>
                </div>
                <button>Login</button>
            </form>
        </>
    );
};

export default LoginForm;
