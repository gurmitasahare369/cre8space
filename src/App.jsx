import {  Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Profile from "./pages/Profile"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import ForgetPwd from "./pages/ForgetPwd"
import UserProfile from "./pages/UserProfile"
import Discover from "./pages/Discover"


function App() {

  return (
    <Routes>
    <>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget_pwd" element={<ForgetPwd />} />
        <Route path="/user_profile" element={<UserProfile />} />
        <Route path="/discover" element={<Discover />} />
    </>
    </Routes>
  )
}

export default App
