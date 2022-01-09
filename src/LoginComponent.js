import React,{useState} from 'react';
import { Typography, TextField, Button } from '@mui/material'; 
import axios from 'axios';

function LoginComponent(props){
    
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e)=> {
		e.preventDefault()
    try{
      var response = await axios.post('http://localhost:3001/customerDetails/login', {
        mail:email,
        password:password
      })
      if (response.data) {
        await localStorage.setItem("token", response.data);
        props.history.push("/Product");
      }

  } catch(err) {
      console.warn(err)
  }
  }

    return(
        <><Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            <br />
            <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
            />
            <br />
            <Button type="submit" value="Register" variant="contained" size="small" sx={{width:2,mt:2 }}>Submit</Button>
        </form>
        </>
    );
}

export default LoginComponent;