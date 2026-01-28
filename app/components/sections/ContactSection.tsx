import React from "react";
import ContactForm from "../ContactForm";
import Card from "../Card";
import { Github, Linkedin, Mail, MessageSquareHeart } from "lucide-react";
import Link from "next/link";

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
            <Link
              href="https://www.linkedin.com/in/barthelemypousset/"
              className="flex flex-col items-center w-25 bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p>LinkedIn</p>
              <Linkedin size={30} strokeWidth={1.75} color="#0A66C2" />
            </Link>
          </div>
          <div>
            <Link
              href="https://github.com/barthelemypousset/"
              className="flex flex-col items-center w-25 bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p>GitHub</p>
              <Github size={30} strokeWidth={1.75} color="#0FBF3E" />
            </Link>
          </div>
          <div>
            <Link
              href="mailto:barthelemypousset@gmail.com"
              className="flex flex-col items-center w-25 bg-white rounded-xl p-6 m-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <p>Mail</p>
              <Mail size={30} strokeWidth={1.75} color="#c71610" />
            </Link>
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
