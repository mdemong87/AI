import styles from "../styles/TextArea.module.css";
import {MdSend}from "react-icons/md";
import Loading from "../componnent/Loading";
import { useEffect, useState } from "react";
import { useAllContext } from "../context/allContext";

export default function TextArea() {

  const {text,data,isloading,setisloading,setdata,settext,Logs,setLogs}=useAllContext();


const handleClick=async(e)=>{
  e.preventDefault();
  setLogs([...Logs,{user:"me",prompt:text}]);
  setisloading(true)
  const response=await fetch(`/api`,{
    method:"POST",
    headers:{
      "content-type":"application/josn"
    },
    body:JSON.stringify(text)
  });
  const res=await response.json();
  setdata(res);
  setLogs([...Logs,{user:"ai",prompt:`${res.data}`}]);
  settext("");
  setisloading(false);
  
}



function handleDown(e){
  if(e.key === "Enter"){
    handleClick(e);
  }
}




  return (
    <div className={styles.textareaWrp}>
        <input onKeyDown={(e)=>handleDown(e)} value={text} onChange={(e)=>settext(e.target.value)} disabled={isloading} type="text" placeholder="Discrib what you want..."/>
        <div className={styles.sentbtnWrp}>
            {isloading ? <Loading/> : <MdSend onClick={(e)=>handleClick(e)} className={styles.icons}/>}
        </div>
    </div>
  )
}

