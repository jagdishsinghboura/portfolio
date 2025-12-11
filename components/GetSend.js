"use client";
import React, { useState } from "react";

function GetSend() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async () => {
    console.log(name, subject, message);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        subject,
        message,
      }),
    });

    const data = await res.json();

    if(data.success){
        setName("");
        setMessage("");
        setSubject("");
        alert("message send ")
    }
    console.log(data);
  };

  return (
    <div className="w-full flex  flex-col justify-evenly  items-center mt-2 p-2 m-2 gap-6">
      <input
        placeholder="your name "
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-[75%]  outline-none font-sans bg-gray-400 text-white dark:text-black/50  dark:bg-gray-600 p-3 m-1 rounded-md "
      />
      <input
        placeholder="subject "
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-[75%]  outline-none font-sans bg-gray-400 text-white dark:text-black/50  dark:bg-gray-600 p-3 m-1 rounded-md "
      />
      <textarea
        rows={3}
        value={message}
        placeholder="your message "
        onChange={(e) => setMessage(e.target.value)}
        className="w-[75%]  outline-none font-sans bg-gray-400 text-white dark:text-black/50  dark:bg-gray-600 p-3 m-1 rounded-md "
      />
      <button
        onClick={handleMessage}
        className="w-[60%] cursor-pointer hover:scale-105 transition-transform delay-300 text-xl font-sans bg-blue-600 text-nowrap rounded-md m-2 p-2 "
      >
        send  message 📩
      </button>
    </div>
  );
}

export default GetSend;
