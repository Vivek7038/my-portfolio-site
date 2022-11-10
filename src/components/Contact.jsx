import React, { useState } from 'react'
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import {db} from "../firebase";

const Contact = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const [disableBtn,setDisableBtn]=useState(false);

  const submitHandler=async(e)=>{
    e.preventDefault();
    setDisableBtn(true);
   
try {
  await addDoc(collection(db,"contacts"),{
    name,
    email,message,
  });
  setName("");
  setEmail("");
  setMessage("");
  toast.success("Message Sent ");
  setDisableBtn(false);

} catch (error) {
  toast.error("Error");
  console.log(error);
  setDisableBtn(false);

}
    };
  return (
    <div id="contact">
       <section>
        <motion.form onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <motion.button
            
            type="submit"
          disabled={disableBtn}
          className={disableBtn ? "disablebtn" : ""}>
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  )
}

export default Contact