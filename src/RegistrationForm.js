import React from 'react';
import { useState } from 'react';

const RegistrationForm = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [emptyError, setEmptyError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const { username, password, confirmPassword } = userInfo;

    // user handler function
    const userHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, username: value });
        console.log(username);
    };

    // password handler function
    const passwordHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, password: value });
        console.log(password);
    };

    // confirm password handler function
    const confirmPasswordHandle = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, confirmPassword: value });
        console.log(confirmPassword);
    };

    // submit handler function
    const registerHandle = (e) => {
        e.preventDefault();
        username !== '' && password !== ''
            ? password === confirmPassword
                ? alert(`Congratulation on registering ${username}`)
                : setPasswordError(true)
            : setEmptyError(true);
    };

    return (
        <>
            <form>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={userHandle}
                        placeholder="Username"
                    />
                    {emptyError && username === '' && (
                        <p>Field must not be empty</p>
                    )}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={passwordHandle}
                        placeholder="Password"
                    />
                    {emptyError && password === '' && (
                        <p>Field must not be empty</p>
                    )}
                </div>
                <div>
                    <label>Confirm password: </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={confirmPasswordHandle}
                        placeholder="Confirm Password"
                    />
                    {passwordError && password !== confirmPassword && (
                        <p>Passwords do not match</p>
                    )}
                </div>
                <button onClick={registerHandle}>Register</button>
            </form>
        </>
    );
};

export default RegistrationForm;
