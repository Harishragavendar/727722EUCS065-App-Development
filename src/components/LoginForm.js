const { useState } = require("react");

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(username,password);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="border">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="regbody">
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                </div>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
