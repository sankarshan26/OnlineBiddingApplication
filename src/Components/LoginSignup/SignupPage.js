import Header from "./Header";
import Signup from "./Signup";
import Navbar from "../NavigationBar/Navbar"

export default function SignupPage(){
    return(
        <>
         <Navbar />
         <div className=" flex justify-center flex-col items-center mt-6">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/></div>
        </>
    )
}