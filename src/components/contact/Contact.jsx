import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

function Contact() {
  const form = useRef();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current["name"].value;
    const email = form.current["email"].value;
    const project = form.current["project"].value;

    if (!name || !email || !project) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_s74xdjv",
        "template_olrezfq",
        form.current,
        "vkuNtYLr7FD5bz4HO"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          toast.error("Failed to send your message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <ToastContainer />
      <div className="title-con-contact">
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>
      </div>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>
          <div className="contact_info">
            {/* contact cards */}
            <div className="contact_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--title-color)"
                width="24px"
                height="24px"
                className="contact_card-icon"
                id="email"
              >
                <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1 1 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-7 6.75L6.666 6h12.668z" />
                <path
                  fill="currentColor"
                  d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"
                />
              </svg>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">tamanshelp@gmail.com</span>
              <a href="mailto:tamanshelp@gmail.com" className="contact_button">
                Write me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--title-color)"
                  width="24px"
                  height="24px"
                  className="contact_button-icon"
                  id="email"
                >
                  <path d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z" />
                </svg>
              </a>
            </div>

            {/* second card */}
            <div className="contact_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--title-color)"
                width="24px"
                height="24px"
                className="contact_card-icon"
                id="whatsapp"
              >
                <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
              </svg>
              <h3 className="contact_card-title">WhatsApp</h3>
              <span className="contact_card-data">0309-3536319</span>
              <a href="https://wa.me/3093536319" className="contact_button">
                Write me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--title-color)"
                  width="24px"
                  height="24px"
                  className="contact_button-icon"
                  id="whatsapp"
                >
                  <path d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z" />
                </svg>
              </a>
            </div>
            {/* third card */}
            <div className="contact_card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="var(--title-color)"
                width="24px"
                height="24px"
                className="contact_card-icon"
                id="messenger"
              >
                <path d="M11.991 1a10.614 10.614 0 0 0-11 10.7a10.46 10.46 0 0 0 3.414 7.866l.052 1.69A1.8 1.8 0 0 0 6.256 23a1.8 1.8 0 0 0 .726-.152L8.903 22a12 12 0 0 0 3.088.4a10.615 10.615 0 0 0 11.001-10.7a10.615 10.615 0 0 0-11-10.7m0 19.4a10 10 0 0 1-2.635-.35a1.8 1.8 0 0 0-1.196.092l-1.714.756l-.045-1.493A1.8 1.8 0 0 0 5.8 18.13a8.5 8.5 0 0 1-2.81-6.43a8.66 8.66 0 0 1 9-8.7a8.705 8.705 0 1 1 0 17.4m3.735-11.815l-2.313 2.755l-3.347-2.056a1 1 0 0 0-1.289.21l-3.05 3.636a1 1 0 1 0 1.53 1.285l2.499-2.975l3.347 2.056a1 1 0 0 0 1.289-.21l2.866-3.415a1 1 0 1 0-1.531-1.286" />
              </svg>
              <h3 className="contact_card-title">Messenger</h3>
              <span className="contact_card-data">taimoor.chauhdry </span>
              <a
                href="https://www.facebook.com/taimoor.chauhdry"
                className="contact_button"
              >
                Write me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="var(--title-color)"
                  width="24px"
                  height="24px"
                  className="contact_button-icon"
                  id="messenger"
                >
                  <path d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact_form">
            {/* form inputs */}
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
