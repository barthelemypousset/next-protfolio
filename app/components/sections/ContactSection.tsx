import React from "react";
import ContactForm from "../ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <div>
      <div className="text-center p-3">
        <h2 className="text-2xl font-permanent">Contact Me</h2>
      </div>
      <hr className="h-px m-6 bg-neutral-quaternary" />

      <div className="w-full md:w-1/2 md:mx-auto">
        <h3 className="text-xl font-bold text-center">Via my socials</h3>

        <div className="flex justify-evenly">
          <div>
            <a
              href="https://www.linkedin.com/in/barthelemypousset/"
              className="flex flex-col items-center w-25 bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer">
              <p>LinkedIn</p>
              <Linkedin size={30} strokeWidth={1.75} color="#0A66C2" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/barthelemypousset/"
              className="flex flex-col items-center w-25 bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer">
              <p>GitHub</p>
              <Github size={30} strokeWidth={1.75} color="#0FBF3E" />
            </a>
          </div>
          <div>
            <a
              href="mailto:barthelemypousset@gmail.com"
              className="flex flex-col items-center w-25 bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p>Mail</p>
              <Mail size={30} strokeWidth={1.75} color="#c71610" />
            </a>
          </div>
        </div>
      </div>
      <hr className="h-px m-6 bg-neutral-quaternary" />
      <div className="w-full md:w-1/2 md:mx-auto">
        <h3 className="text-xl font-bold text-center">Or directly via this form</h3>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default ContactSection;
