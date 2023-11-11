import Header from "./Header"
import Login from "./Login"
import Navbar from "../NavigationBar/Navbar"

export default function LoginPage(){
    return(
        <>
        <Navbar />
        <div className=" flex justify-center flex-col items-center mt-6">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login />
        </div></>
    )
}