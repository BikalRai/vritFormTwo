import { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function App() {
    const [isRegistered, setIsRegistered] = useState(false);
    return (
        <div className="App">
            {isRegistered ? (
                <LoginForm Eye={FaEye} EyeSlashed={FaEyeSlash} />
            ) : (
                <RegistrationForm
                    setIsRegistered={setIsRegistered}
                    Eye={FaEye}
                    EyeSlashed={FaEyeSlash}
                />
            )}
        </div>
    );
}

export default App;
