import React, {useState } from 'react'

const useShowPassword = () => {

    const [hide, setHide] = useState("notShow");
    
    const handleShow=()=>{
        if(hide==="show"){
            setHide("notShow")
        }else{
            setHide("show")
        }
    }
  return (
    {hide, handleShow}
  )
}

export default useShowPassword
