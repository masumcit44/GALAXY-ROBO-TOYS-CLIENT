import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ActionCard from "../CategoryCard/ActionCard";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RemoteControl = () => {
  const [RemoteControl, setRemoteControl] = useState([]);
  useEffect(() => {
    const url = "https://toy-galaxy-assignment-11-server.vercel.app/alltoys?category=RemoteControl";
    fetch(url)
    .then(res=>{
      toast.info('Loading remote control toys...', { autoClose: 1000 });
      return res.json();
    })
      .then((data) => {
        setRemoteControl(data);
      });
  }, []);
  const { _id } = RemoteControl;
  return (
    <div className="grid md:grid-cols-3 gap-4 ">
      {RemoteControl.map((card) => (
        <ActionCard key={card._id} card={card}></ActionCard>
      ))}
      <ToastContainer />
    </div>
  );
};

export default RemoteControl;
