"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { GrSend } from "react-icons/gr";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const notifySuccess = () =>
    toast.success("Message sent successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const notifyError = () =>
    toast.error("Something went wrong. Try again.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      notifySuccess();
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen mx-8 flex justify-between pt-6" id="contact">
      <p
        data-aos="fade-right"
        className="text-secondary font-bold text-6xl mb-6"
      >
        Contact <span className="text-primary">Me</span>
      </p>

      <form onSubmit={handleSubmit} className="w-[70%]">
        <div
          data-aos="fade-left"
          className="flex justify-between mb-8 w-full pr-20"
        >
          <div>
            <p className="text-secondary font-bold">Your Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-additional w-72 mt-2 rounded-xl text-secondary px-4 py-2 placeholder:text-secondary/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Name"
              type="text"
              required
            />
          </div>

          <div>
            <p className="text-secondary font-bold">Your Email</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-additional mt-2 w-72 rounded-xl text-secondary px-4 py-2 placeholder:text-secondary/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Email"
              type="email"
              required
            />
          </div>
        </div>

        <div className="pr-20" data-aos="fade-up">
          <p className="text-secondary font-bold">Your Message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-additional resize-none h-64 w-full mt-2 rounded-xl text-secondary px-4 py-2 placeholder:text-secondary/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Message"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          data-aos="fade-up"
          className="px-4 py-1 shadow-additional rounded-3xl bg-primary text-secondary mt-4 font-bold cursor-pointer flex gap-2 items-center disabled:opacity-60"
        >
          <p className="drop-shadow-2xl">
            {loading ? "Sending..." : "Send Message"}
          </p>
          <GrSend />
        </button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </form>
    </div>
  );
}
