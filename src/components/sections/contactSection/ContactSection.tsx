import Wrapper from "@/components/shared/Wrapper";
import React from "react";

const ContactSection = () => {
  return (
    <Wrapper>
      <div id="contact">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          Contact Us
        </h1>
        <div className="my-8">
          <form action="#" className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="FullName" className="block text-lg">
                Full Name
              </label>
              <input
                type="text"
                id="Full Name"
                placeholder="John Doe"
                className="border border-black placeholder:text-gray-500  w-full p-2 rounded-md"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                placeholder="wWJ9T@example.com"
                className="border border-black placeholder:text-gray-500  w-full p-2 rounded-md"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="Message">Message</label>
              <textarea
                name="Message"
                id="Message"
                cols={30}
                rows={10}
                placeholder="Your Message"
                className="border border-black placeholder:text-gray-500  w-full p-2 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md mx-auto block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactSection;
