'use client'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../Shared/Container";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: formData.name,
        message: formData.message,
      };

      // Send email using emailjs
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setIsSent(true); // Set success state
      setFormData({ name: "", message: "" }); // Clear form
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contactWithMe">
      <Container>
        <div className=" my-auto">
          <section className="mx-auto max-w-screen-xl md:rounded-md md:border md:shadow-lg">
            <div className="grid grid-cols-4 text-secondary lg:grid-cols-3">
              <div className="col-span-4 bg-gray-50 px-8 py-10 text-secondary md:col-span-2 md:border-r md:px-10 md:py-12 lg:col-span-1">
                <h2 className="mb-8 text-2xl font-black">Contact me</h2>
                {/* Contact Info Here */}
              </div>
              <div className="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
                <h2 className="mb-8 text-2xl font-black">Get in touch</h2>
                <p className="mt-2 mb-4 font-sans text-sm tracking-normal">
                  I love to contact with you
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="md:col-gap-4 mb-5">
                    <input
                      className="col-span-1 w-full border-b py-3 text-sm outline-none focus:border-b-2 focus:border-primary"
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <textarea
                    className="mb-10 w-full resize-y whitespace-pre-wrap border-b py-3 text-sm outline-none focus:border-b-2 focus:border-primary"
                    rows={6}
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="group flex cursor-pointer items-center rounded-xl bg-primary bg-none px-8 py-4 text-center font-semibold leading-tight text-white"
                  >
                    Send
                    <svg
                      className="group-hover:ml-8 ml-4 transition-all"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
                      />
                    </svg>
                  </button>
                </form>
                {isSent && (
                  <p className="mt-4 text-green-500">
                    Message sent successfully!
                  </p>
                )}
                {error && <p className="mt-4 text-red-500">{error}</p>}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
