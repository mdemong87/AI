import styles from "../styles/ChatLog.module.css";
import { useEffect,useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import {BsChatRightDots}from "react-icons/bs";
import React from "react";

export default function ChatLog({avatar,messege,uqnic}) {



  return (
    <div key={uqnic} className={`${styles.chatlogWrp} ${avatar === "me" && styles.meMessege}`}>
        <div className={styles.textWrper}>
              <div className={`${styles.avatar} ${avatar === "me" && styles.meAvatar}`}>{avatar === "ai" ? <BsChatRightDots/> : "MD"}</div>
              <div className={`${styles.messege} ${avatar === "me" && styles.meMessege}`}>
        
        <pre className={`${styles.pre} ${avatar === "me" && styles.mepre}`}>
        {avatar === "me" ? messege:<Typewriter 
                          options={{
                            strings:messege,
                            autoStart: true,
                            loop: false,
                            delay:15,
                            cursor:""
                          }}
                />}
        </pre>
             
              </div>
        </div>
    </div>
  )
}











