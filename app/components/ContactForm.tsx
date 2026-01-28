import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }
    setStatus("sending");

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
          form.current?.reset();
          setTimeout(() => setStatus("idle"), 3000); // Reset status after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          setErrorMessage(error.text);
          setTimeout(() => setStatus("idle"), 5000); // Reset status after 5 seconds
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="p-4 m-4 border-2 rounded-2xl border-stone-300 flex flex-col gap-4">
        <div>
          <label htmlFor="user_email">Email</label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Your email address"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message to me ;)"
            required
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>
        <input
          type="submit"
          value={status === "sending" ? "Sending..." : "Send"}
          disabled={status === "sending" || status === "success"}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
        />
        {status === "success" && <p className="text-green-500 text-center">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-500 text-center">Failed to send message: {errorMessage}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
