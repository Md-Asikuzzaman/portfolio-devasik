import { NextPage } from "next";

interface Props {}

const ContactForm: NextPage<Props> = ({}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl w-full border-[#434865] border rounded-lg p-5 lg:p-10">
        <h3 className="text-lg lg:text-2xl text-center text-[#d3d8e8] mb-8 md:mb-12">
          I'm here for you, Send a quote for any questions or help.
        </h3>
        <form>
          <p className="mb-4">
            <label className="text-[#d3d8e8]" htmlFor="email">
              Your email:
            </label>
            <input
              type="text"
              id="email"
              className="bg-[#121629] border border-[#262B42] text-white text-base rounded-lg focus:outline-none focus:border-violet-500/70 block w-full p-2.5"
            />
            <span className="text-pink-500 text-sm">
              Invalid Email Address!
            </span>
          </p>

          <p className="mb-4">
            <label className="text-[#d3d8e8]" htmlFor="message">
              Your message:
            </label>
            <textarea
              className="bg-[#121629] border border-[#262B42] text-white text-base rounded-lg focus:outline-none focus:border-violet-500/70  block w-full p-2.5"
              id="message"
              rows={5}
            ></textarea>
            <span className="text-pink-500 text-sm">Field is required!</span>
          </p>

          <button className="gradient-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
