import React from 'react';
import { FiUser } from 'react-icons/fi';
import { MdEmail } from "react-icons/md";
import {BiSolidLockAlt} from "react-icons/bi";
import "./Signup.css";
import { useState } from 'react';
import {auth} from '../firebase.js';
import {useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';

const Signup = () =>{
    const navigate =useNavigate();
    const [values,setValues] = useState({
        name: "",
        email: "",
        passw: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
    const handleSubmission = () =>{
        if(!values.name || !values.email||!values.passw)
        {
            setErrorMsg("Fill all detaiils..")
            return;
        }
        setErrorMsg("");
        setsubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth,values.email,values.passw).then(async(res)=>{
            setsubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user,{
                displayName:values.name,
            });
            navigate("/log");
            console.log(user);
        }).catch((err)=>{
            setsubmitButtonDisabled(false);
            setErrorMsg(err.message);
        });
        
    };
    return(
    <>
    {/* Sign In Box */}
        <div className='container-outer-box'>
        <div className='content-box'>
                    <div className='form-conetent'>
                    <h2>Sign Up</h2>
                    <hr></hr>
                    <form className='sign-up-form'>

                        <div className='username'>
                        <FiUser className='emoji1'/>
                        <input placeholder='Name' name='Uname'id='Uname'type='text'required onChange={(event) => setValues((prev) => ({ ...prev,name:event.target.value}))}/>
                        <br></br>
                        <br></br>
                        </div>
                        <div className='emailid'>
                        <MdEmail className='emoji2'/>
                        <input placeholder='Email' name='Email'id='Email'type='email'required onChange={(event) => setValues((prev) => ({ ...prev,email:event.target.value}))}/>
                        <br></br>
                        <br></br>
                        </div>
                        <div className='pass'>
                        <BiSolidLockAlt className='emoji3'/>
                        <input placeholder='Password' name='password'id='password' type='password'required onChange={(event) => setValues((prev) => ({ ...prev,passw:event.target.value}))}/>
                        </div>
                        <br></br>
                        <div className='SubmitButton'>
                        <b className='errorMsg'>{errorMsg}</b>
                        <br></br>
                        <input type='submit' value={"Sign up"} name='sign-up-button' id='sign-up-button' onClick={handleSubmission} disabled={submitButtonDisabled}/>
                        </div>
                        <div className='link'>
                        <a href='/log'>Already Have an account?Login Here</a>
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
export default Signup;