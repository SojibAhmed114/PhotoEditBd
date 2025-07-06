
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const MailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jk77i1e", "template_w2vw9fc", form.current, {
        publicKey: "e7ptrzP0_2FVEBaHw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-purple-600 rounded-md text-white p-2">
      <form className="flex flex-col space-y-2" ref={form} onSubmit={sendEmail}>
        <input
          placeholder="Enter Your Name"
          className="py-2 px-3 outline-none text-black rounded-md placeholder-black/50 bg-white"
          type="text"
          name="user_name"
        />
        <input
          placeholder="Enter Your Email"
          className="py-2 px-3 outline-none text-black rounded-md placeholder-black/50 bg-white"
          type="email"
          name="user_email"
        />
        <textarea
          placeholder="Enter Your Message"
          className="py-2 px-3 resize-none text-black outline-none rounded-md placeholder-black/50 bg-white"
          name="message"
        />
        <input
          className="py-2 px-3 resize-none text-black outline-none rounded-md  bg-white"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};