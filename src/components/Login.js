import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdEmail } from "react-icons/md";
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './login.css';
const Login = () =>{
    const navigate =useNavigate();
    const [values,setValues] = useState({
        email: "",
        passw: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
    const handleSubmission = () =>{
        if(!values.email||!values.passw)
        {
            setErrorMsg("Fill all detaiils..")
            return;
        }
        setErrorMsg("");
        setsubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth,values.email,values.passw).then(async(res)=>{
            setsubmitButtonDisabled(false);
            navigate("/home");
        }).catch((err)=>{
            setsubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
        
    };
    return(
        <>
        <div className='container-outer-box'>
        <div className='content-box'>
                    <div className='form-conetent'>
                    <h2>Login</h2>
                    <hr></hr>
                    <form className='sign-up-form'>

                        <div className='username'>
                        <FiUser className='emoji1'/>
                        <input placeholder='Email' name='email'id='email'type='email'required onChange={(event) => setValues((prev) => ({ ...prev,email:event.target.value}))}/>
                        <br></br>
                        <br></br>
                        </div>
                        <div className='emailid'>
                        <MdEmail className='emoji2'/>
                        <input placeholder='Password' name='pass'id='pass'type='password'required onChange={(event) => setValues((prev) => ({ ...prev,passw:event.target.value}))}/>
                        <br></br>
                        </div>
                        <b className='errorMsg'>{errorMsg}</b>
                        <br></br>
                        <br></br>
                        <div className='SubmitButton'>
                        <input type='submit' value={"Login"} name='sign-up-button' id='sign-up-button' onClick={handleSubmission} disabled={submitButtonDisabled}/>
                        </div>
                        <div className='link1'>
                        <a href='/sign'>New to GiphyHub?Sign up</a>
                        </div>
                    </form>
                    </div>
                </div>
            <div className='image-section-container'>
            </div>
            
        </div>        
        </>
    );
}
export default Login;