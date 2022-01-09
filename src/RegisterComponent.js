import React, {useState} from 'react';
import { Typography, TextField, Button } from '@mui/material'; 
import axios from 'axios';


function RegisterComponent(props) {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e)=> {
		e.preventDefault()
    try{
      var response = await axios.post('http://localhost:3001/customerDetails/create', {
        name: name,
        mail:email,
        password:password
      })
     console.log(response) 
	 props.history.push('/login')
  } catch(err) {
      console.warn(err)
  }
  }
  return (
  <div>
			<Typography variant="h5">Register</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
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
     </div>
  );
}

export default RegisterComponent;