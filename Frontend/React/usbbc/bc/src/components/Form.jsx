/* eslint-disable no-unused-vars */
import React ,{useState} from "react"

const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const handleChange = (e) => {
        setUsername(e.target.value);
        //alert(`your username: ${username}`);

    };
    const emailChange = (e) => {
        setEmail(e.target.value);

    }
      console.log(username);
      console.log(email);
      const handlesubmit = () =>{
        let userobj = {
            
        } 
      }
  return (
    <div>
        <div className="flex  justify-center mt-5 flex-col items-center gap-3">
            <input
                type="txt"
                placeholder="Username"
                required
                value={username}
                onChange={handleChange}
                className="bg-slate-500 text-white"
                />
                <input
                type="email"
                placeholder="email"
                required
                value={email}
                onChange={handleChange}
                className="bg-slate-500 text-white"
                />
                
                <input
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={handleChange}
                className="bg-slate-500 text-white"
                />
                <button className="bg-red-500 text-white m-2">Submit</button>

        </div>
      
    </div>
  );
};

export default Form;
