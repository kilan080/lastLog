'use client'
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiPinetwork } from "react-icons/si";


  const inputCheckBoxStyle = {
  border: "2px solid red",
  outline: "2px solid black",
  accentColor: "red",
  outlineOffset: "2px",
};

const inputCheckBoxStyleErr = {
  outline: "2px solid red",
};

  // return (

  export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasNoSymbolErr, setHasNoSymbolErr] = useState(false);
  const [greaterThanSixErr, setGreaterThanSixErr] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [isLongEnough, setIsLongEnough] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const checkUsernameValidation = (name) => {
    const hasNoSymbol = /^[a-zA-Z0-9]*$/.test(name);
    const greaterThanSix = username.length > 6;
    // Check if username is greater than 6
    // check if username has no character
    setGreaterThanSixErr(greaterThanSix);
    setHasNoSymbolErr(hasNoSymbol);

    // setIsValid(hasNoSymbol && greaterThanSix);
    // if (hasNoSymbol) {
    //   setHasNoSymbolErr(true);
    //   return false;
    // }
    // if(greaterThanSix) {
    //   setGreaterThanSixErr(true);
    //   return false;
    // }
    // return true
    return hasNoSymbol && greaterThanSix;
  };

  const checkPasswordValidation = (pwd) => {
    const hasNum = /\d/.test(pwd);
    const hasCapital = /[A-Z]/.test(pwd);
    const isLong = pwd.length > 6;


    setHasNumber(hasNum);
    setHasUpperCase(hasCapital);
    setIsLongEnough(isLong);


    // check if password is greater 6
    // check if password has atleast one character
    // check if password has atleast one capital letter
    // return true;
    return hasNum && hasCapital && isLong;
  };

  const login = () => {
    if (checkUsernameValidation(username) && checkPasswordValidation(password)) {
      setIsLoggedIn(true);
    } else {
      alert("Check input and try again");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const symbolErr = hasNoSymbolErr ? inputCheckBoxStyleErr : {};
  console.log("hasNoSymbolErr", hasNoSymbolErr);
  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
           <div className="bg-gray-50 flex flex-col  justify-center items-center text-center">
            <h1 className="text-3xl mt-5 pt-4">Profile Page</h1>
            <img className="flex items-center object-cover justify-center object-center rounded-full h-60 w-60 mt-2" src='./profImage.webp' alt="" />
            <h2 className="text-2xl pt-7">Name: Kilani Olamilekan</h2>
            <h2 className="text-2xl pt-3">Username : @Olamie03</h2>
            <h3 className="text-2xl pt-3">Web Developer</h3>
            <h2 className="text-2xl pt-3 pb-3">Phone Number: 090-695-829-40</h2>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 max-w-70% mt-6" onClick={logout}>LOG OUT</button>
            <div className="flex flex-row w-3xl justify-center text-center gap-20 mt-8">
              <button className="justify-center object-center rounded-full  w-12 h-13 bg-stone-100" > <FaWhatsapp size={50} /> </button>
              <button className="justify-center object-center rounded-full  w-12 h-13 bg-stone-100" ><SiPinetwork size={50} /></button>
              <button className="justify-center object-center rounded-full  w-12 h-13 bg-stone-100" ><FaTelegram size={50} /></button>
            </div>
          </div>
        </div>
      ) : (
      <div className=" bg-blue-400 flex flex-col justify-center items-center">
        <h1 className="flex justify-center pt-7.5 font-bold text-4xl text--100">Login Page</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 100 }}>
            <input 
                className="flex justify-center align-middle border-2 items-center w-100 h-8 "
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  checkUsernameValidation(e.target.value);
                }}
            />
            <div>
                <label>
                    <input className="text-red-200" disabled type="checkbox" checked={hasNoSymbolErr} /> No Symbols
                </label>
                <br />
                <label>
                    <input disabled type="checkbox" checked={greaterThanSixErr} /> Length greater 6
                </label>
            </div>
            <input 
                className="flex items-center justify-center border-2 w-100 h-8"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    checkPasswordValidation(e.target.value);
                }}
            />
            <div className="flex flex-col">
                <label>
                    <input disabled type="checkbox" checked={isLongEnough} /> Length greater 6
                </label>
                <br />
                <label>
                    <input disabled type="checkbox" checked={hasNumber} /> Contains at least one number
                </label>
                <br />
                <label>
                    <input disabled type="checkbox" checked={hasUpperCase} /> Contains at least one capital letter
                </label>
            </div>
            <button className=" flex flex-row items-center justify-center gap-1 bg-blue-500 text-black font-bold py-3 px-4 rounded hover:bg-blue-700  text-center mt-12" type="button" onClick={login}> LOGIN </button>
        </div>
    </div>
   )}
    </div>
  );
}

