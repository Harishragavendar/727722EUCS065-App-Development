import {useState} from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  
  const[users,setUsers]=useState([]);

  const handleRegister=(username,password,email,phone) => {
    setUsers([...users, {username,password,email,phone}]);
  }

  const handleLogin=(username,password) => {
    const user = users.find( 
      (user) => user.username === username && user.password===password
    );
    if(user){
      alert("Login Success :)");
    }
    else{
      alert("Login Failed! Enter Valid Username or Password");
    }
  }

  const[isRegister,setIsRegister] = useState(true);

  return (
    <div className='App'>
      {isRegister ? <RegisterForm onRegister={handleRegister} /> : <LoginForm onLogin={handleLogin}/>}
      <br/>
      <button onClick={()=> setIsRegister(!isRegister)}>
        {isRegister ? 'Already Registered? Switch to Login here' : 'Not Registered Yet? Switch to Register'}
      </button>
    </div>
  );
}

export default App;
