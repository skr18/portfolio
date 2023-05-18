import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
type Props = {}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // console.log(formData);
    // window.location.href = `mailto:sujeetrath123@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email}) `;
        const form = useRef();

      const onSubmit = (e:any) => {
        // e.preventDefault();

        emailjs.sendForm('service_f5r1pgn', 'template_f3mincp', form.current!, 'b9Oko6aiEW8RS9-B_')
          .then((result) => {
              console.log(result.text);
              console.log("sucess");
              alert("Message Sent Sucessfully, I Will Connect With You ASAP");
          }, (error) => {
              alert("There May Be A Bug , Could You please Mail Me Directly (sujeetrath123@gmail.com). Thank you ");
              console.log(error.text);
          });
      };
  // };

  return (
    <div className='h-[900px] flex relative overflow-hidden flex-col text-center md:text-center md:flex-row max-w-full px-0 md:px-10 justify-evenly items-center'>
        <h3 className='absolute top-24 sm:top-20 uppercase tracking-[20px]  text-gray-400 text-2xl xl:text-3xl'>
            contact
        </h3>
        <div className='flex flex-col space-y-10 sm:space-y-10 items-center md:items-start'>
            <h4 className='text-2xl sm:text-4xl font-semibold text-center w-full'>
            Like my work? <p className="text-[#F7AB0A]"> {"  <Let's Talk/>"}</p>
            </h4>

            <div className="space-y-1 sm:space-y-10">
              <div className="flex items-center space-x-5">
                <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
                <p className="text-sm sm:text-xl">+91 7735342622</p>
              </div>
              <div className="flex items-center space-x-5">
                <MapPinIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
                <p className="text-sm sm:text-xl">Bhubaneswar, India</p>
              </div>
              <div className="flex items-center space-x-5">
                <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
                <p className="sm:text-xl text-sm">sujeetrath123@gmail.com</p>
              </div>
            </div>

          <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col space-y-2 w-screen px-2 md:w-fit mx-auto"
          // @ts-ignore
          ref={...form}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput w-44 sm:w-52"
              type="text"
              placeholder="Name"
              name='user_name'
              required
            />{" "}
            <input
              {...register("email")}
              className="contactInput w-44 sm:w-52"
              type="email"
              placeholder="Email"
              name='user_email'
              required
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
            name='sub'
            required
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#F7AB0A] py-2 px-16 sm:py-5  rounded-md text-black fond-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe