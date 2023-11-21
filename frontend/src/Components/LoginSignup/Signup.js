import { useState } from 'react';
import { signupFields } from "./formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
const fields=signupFields;
// const fields = {
//   username : {
//     id : "username",
//     placeholder : "username",

//   }
// }
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  const PasswordMisnatch_notification = () => {
    toast.error('Password Mismatch', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };

  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    if(signupState.password === signupState.confirmpassword) {
    createAccount();

    }
    else{
      //password mismatch .
      PasswordMisnatch_notification() ;
    }
  }

  //handle Signup API Integration here
  const createAccount=()=>{
    Axios.post("https://black-intern-bnsow.pwskills.app:8000/createuser",
    {signupState}).then((result)=>{toast.success('Registration Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      console.log(result);
    })
    .catch(err => console.log(err))
  }

    return(
      <>
        <form className="mt-3 space-y-6 min-w-[270px] w-[50vw] max-w-[500px]" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
            {/* <input type="text" className={fixedInputClass} /> */}
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
      <ToastContainer />
      </>
    )
}