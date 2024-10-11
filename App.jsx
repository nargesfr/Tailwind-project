import { useState } from "react";
import CustomInput from "./components/CustomInput";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Card from "./components/card";




function App() {
 //const[username,setUsername]= useState("ali")
 //const[pasword,setPasword]= useState("1234")

 const [values , setvalues]= useState({ username: "" , password: ""});
 const handelcheng=(e,key)=> {
  setvalues((prev) => ({...prev, [key] :e.terget.value }));
 }


 const handleLogin = () => {
  alert(`username:${values.username}
    password${values.password}
    `)
 }
 console.log(values, "values")

   return (
   <div className="flex items-center justify-center h-[100vh] w-full ">
    <Card>
    
    <Heading />


    <div>
      <CustomInput
       label="Username"
       value={values.username}
        onChange={(e)=>handelcheng(e,"username")}
        />
      <CustomInput label="Password"
       value={values.pasword}
       onChange={(e)=>handelcheng(e,"password")}
       type="password"
       />
     
    </div>
    <Button label="Login" onClick={handleLogin}/>
    </Card>
   </div>
   );
}

export default App

