const { useState } = require("react")

const RegisterForm = ({onRegister}) =>{
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        onRegister(username,password,email,phone);
        alert(`Success! Registered with Username: ${username} and Password: ${password}`)
        setUsername('');
        setPassword('');
        setEmail('');
        setPhone('');
    };

    return(
        <div className="border">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="regbody">
                <div>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e)=> setUsername(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Phone: </label>
                    <input 
                        type='number' 
                        value={phone} 
                        onChange={(e)=> setPhone(e.target.value)}
                    />
                </div>
                </div>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;