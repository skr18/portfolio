"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const { register, handleSubmit } = useForm<Inputs>();
  const form = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<Inputs> = () => {
    const serviceID = process.env.NEXT_PUBLIC_SERVICEID!;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATEID!;
    const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY!;

    if (!serviceID || !templateID || !publicKey) {
      alert("Missing EmailJS environment variables");
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, form.current!, publicKey)
      .then((result) => {
        console.log("success", result.text);
        alert("Message Sent Successfully, I Will Connect With You ASAP");
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert(
          "There may be a bug. Please mail me directly (sujeetrath123@gmail.com). Thank you."
        );
      });
  };

  return (
    <div className="h-[900px] flex relative overflow-hidden flex-col text-center md:flex-row max-w-full px-0 md:px-10 justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl xl:text-3xl">
        contact
      </h3>

      <div className="flex flex-col space-y-10 items-center md:items-start">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center w-full">
          Like my work?
          <p className="text-[#F7AB0A]">{" <Let's Talk/>"}</p>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm sm:text-xl">+91 7735342622</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm sm:text-xl">Bhubaneswar, India</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm sm:text-xl">sujeetrath123@gmail.com</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          id="myForm"
          className="flex flex-col space-y-2 w-screen px-2 md:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput w-44 sm:w-52"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              {...register("email")}
              className="contactInput w-44 sm:w-52"
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
            name="sub"
            required
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
            name="message"
            required
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-16 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
