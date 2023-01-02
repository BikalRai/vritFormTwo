import React, { useEffect } from 'react';
import { useState } from 'react';

const RegistrationForm = ({ setIsRegistered, Eye, EyeSlashed }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [emptyError, setEmptyError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [type, setType] = useState('password');
    const [hidden, setHidden] = useState(EyeSlashed);

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
        if (username !== '' && password !== '') {
            if (password === confirmPassword) {
                alert(`Congratulation on registering ${username}`);
                setIsRegistered(true);
            } else {
                setPasswordError(true);
            }
        } else {
            setEmptyError(true);
        }
    };

    // toggle password view
    const toggleHidden = () => {
        if (type === 'password') {
            setType('text');
            setHidden(Eye);
        } else {
            setType('password');
            setHidden(EyeSlashed);
        }
    };

    useEffect(() => {
        console.log('I am working!!');
    }, []);

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
                        type={type}
                        id="password"
                        value={password}
                        onChange={passwordHandle}
                        placeholder="Password"
                    />
                    <span onClick={toggleHidden}>{hidden}</span>
                    {emptyError && password === '' && (
                        <p>Field must not be empty</p>
                    )}
                </div>

                <div>
                    <label>Confirm password: </label>
                    <input
                        type={type}
                        value={confirmPassword}
                        onChange={confirmPasswordHandle}
                        placeholder="Confirm Password"
                    />
                    <span onClick={toggleHidden}>{hidden}</span>
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
