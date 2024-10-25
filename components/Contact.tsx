import emailjs from "@emailjs/browser";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// emailjs.init({
//   publicKey: process.env.EMAILJS_PUBLIC_KEY,
//   // Do not allow headless browsers
//   blockHeadless: true,
//   blockList: {
//     // Block the suspended emails
//     list: ["abc@emailjs.com"],
//     // The variable contains the email address
//     watchVariable: "userEmail",
//   },
//   limitRate: {
//     // Set the limit rate for the application
//     id: "app",
//     // Allow 1 request per 10s
//     throttle: 10000,
//   },
// });

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      toast.warning("Empty Fields!");
      return false;
    }

    setLoading(true);
    emailjs.init(
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        : ""
    );

    emailjs
      .send(
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
          ? ""
          : process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
          ? ""
          : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          mail_id: values.email,
          message: values.message,
        }
      )
      .then(
        () => {
          setValues({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
          toast.success("Your message was sent successfully.");
        },
        (error) => {
          setLoading(false);
          toast.error("There was an error sending your message.");
          console.error("Email send failed...", error);
        }
      );
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-4xl">Contact Us</h2>
      <ToastContainer />

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
        <Image
          unoptimized={true}
          quality={100}
          alt="contact"
          src="/contact.png"
          className="hidden md:block w-1/2 h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="flex-1">
          <h3 className="text-2xl">Get in touch</h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-xl pt-10"
          >
            <input
              onChange={handleChange}
              required
              value={values.name}
              name="name"
              type="text"
              placeholder="Full Name *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <input
              onChange={handleChange}
              required
              value={values.email}
              name="email"
              type="email"
              placeholder="Email *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={4}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
            />
            <button
              disabled={loading}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Send <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
