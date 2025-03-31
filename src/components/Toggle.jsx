import { useEffect, useState } from 'react'
import { Sun , Moon } from "lucide-react";
import './../styles/toggle.css'

const Toggle = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    },[theme])

  return (
    <div id='toggle'>
        <button className='toggle-btn' onClick={() => setTheme("light")} ><Sun size={27}/></button>
        <button className='toggle-btn' onClick={() => setTheme("dark")}><Moon size={26}/></button>
    </div>
  )
}

export default Toggle