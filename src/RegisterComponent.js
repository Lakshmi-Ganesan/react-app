import React, {useState} from 'react';
import { Typography, TextField, Button } from '@mui/material'; 
import axios from 'axios';
import { typography } from "@mui/system";

function RegisterComponent(props) {
  const [name, setName] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || mail == "" || password == "") {
      window.alert("All fields are requied");
    }
    try {
      var response = await axios.post(
        "https://integra-node.herokuapp.com/customerDetails/create",
        {
          name: name,
          mail: mail,
          password: password,
        }
      );
      if (response.data) {
        props.history.push("/login");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5">Register</Typography>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
            <br />
            <TextField
              value={mail}
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
            <Button
              type="submit"
              value="Register"
              variant="contained"
              size="small"
              sx={{ width: 2, mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default RegisterComponent;