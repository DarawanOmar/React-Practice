import React from 'react'
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './axios/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = `/register`

const RunFormValidation = () => {

  // useEffect( ()=>{
  //   const fetchData = async() => {
  //   try {
  //     const res = await axios.get(REGISTER_URL);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //     if(!error?.response){
  //       console.log("No Server");
  //     }
  //     else if(error.response?.status === 404){
  //       console.log("You Have An Error 404");
  //     }
  //     else{
  //       console.log("Kura Error'a");
  //     }
  //   }
  //   }
  //   fetchData()
  // },[]) 


    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      userRef.current.focus();
    }, [])

    useEffect(() => {
      setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
      e.preventDefault();
      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      if (!v1 || !v2) {
        setErrMsg("Invalid User Or Password Entriy");
        return;
      }

      try {
        const response = await axios.post(
          REGISTER_URL,
          JSON.stringify({ username: user, password: pwd }),
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setSuccess(true);
      } catch (error) {
        console.log(error);
        if (!error?.response) {
          setErrMsg("No Server Response");
        } else if (error.response?.status === 409) {
          setErrMsg("Username Already Taken");
        }else if (error.response?.status === 404){
          setErrMsg("You have An 404 Error Message!")
        }
        else {
          setErrMsg("Registertion Faild!");
        }
        errRef.current.focus();
      }
    }

    
  return (
    <>
            {success ? (
                <section className='flex flex-col p-4   justify-center h-screen max-w-xl mx-auto font-serif '>
                    <div className='bg-sky-700 text-white p-4'>
                        <h1>Success!</h1>
                        <p>
                            <a href="#">Sign In</a>
                        </p>
                    </div>
                </section>
            ) : (
                <section className='flex flex-col p-4  items- justify-center h-screen max-w-xl mx-auto font-serif '> 
                <div className='bg-sky-700 text-white p-4'>
                    <p ref={errRef} className={errMsg ? " text-center bg-rose-300 text-red-600 p-4 text-xl font-bold" : "hidden"} aria-live="assertive">{errMsg}</p>
                    <h1 className='text-center text-3xl py-6'>Register</h1>
                    <form className='flex flex-col ' onSubmit={handleSubmit}>
                        <label htmlFor="username" className='flex items-center space-x-4'>
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? " text-green-500 font-bold" : "hidden"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hidden" : !validName || user ?  " text-red-500 text-xl font-bold " : ''} />
                        </label>
                        <input
                            className='p-2 rounded-md border-2 text-black'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? " text-white bg-black p-2 rounded-md mt-2" :  "hidden"}>
                            <FontAwesomeIcon icon={faInfoCircle} className='text-red-500 ' />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password" className='pt-4 flex items-center space-x-4'>
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "text-green-500 font-bold" : "hidden"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hidden" : "text-red-500 font-bold text-xl"} />
                        </label>
                        <input
                            className='p-2 rounded-md border-2  text-black'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && pwd && !validPwd ? " text-white bg-black p-2 rounded-md mt-2" : "hidden"}>
                            <FontAwesomeIcon icon={faInfoCircle} className='text-red-500'/>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            <span className='flex'> Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></span>
                        </p>


                        <label htmlFor="confirm_pwd" className='pt-4 flex items-center'>
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? " text-green-500" : "hidden"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hidden" : " text-red-500 text-xl"} />
                        </label>
                        <input
                            className='p-2 rounded-md border-2  text-black'
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? " text-white bg-black p-2 rounded-md mt-2" : "hidden"}>
                            <FontAwesomeIcon icon={faInfoCircle} className='text-red-500'/>
                            Must match the first password input field.
                        </p>

                        <button  className='my-8 border-2 border-sky-600  py-2 rounded-md hover:bg-sky-600 hover:text-white duration-500' disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <button className='underline' >Sign In</button>
                        </span>
                    </p>
            </div>
                </section>
            )}
        </>
  )
}

export default RunFormValidation