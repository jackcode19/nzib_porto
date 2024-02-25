import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from "react-toastify"
function Contact() {
  const notify = () => toast.success("Message Sent!")

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_l9hdidc", "template_yzjlt8i", form.current, {
        publicKey: "A3ft7knGh8fnKFbFu",
      })
      .then(
        (result) => {
          notify()
          console.log(result.text)
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div className="container mx-auto">
      <div id="contact" className="w-full px-4 pt-32 pb-16">
        <div className="max-w-full mx-auto text-center mb-16">
          <h2 className="font-pixelF text-4xl sm:text-6xl text-slate-100">
            Contact Me
          </h2>
        </div>
        <div className="w-full lg:w-1/2 lg:mx-auto">
          <form ref={form} onSubmit={sendEmail}>
            <div className="px-4 mb-4">
              <label
                htmlFor=""
                className="font-semibold text-slate-100 mb-2 inline-block"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"
              ></input>
            </div>
            <div className="px-4 mb-4">
              <label
                htmlFor=""
                className="font-semibold text-slate-100 mb-2 inline-block"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow"
              ></input>
            </div>
            <div className="px-4 mb-4">
              <label
                htmlFor=""
                className="font-semibold text-slate-100 mb-2 inline-block"
              >
                Mesagge
              </label>
              <textarea
                type="text"
                name="message"
                className="w-full bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-primaryYellow focus:ring-2 focus:border-primaryYellow h-32"
              ></textarea>
            </div>
            <div className="px-4">
              <button
                type="submit"
                value="Send"
                className="bg-transparent border border-primaryYellow text-primaryYellow rounded-md py-2 px-6 font-medium hover:bg-primaryYellow hover:text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        /> */}
      </div>
    </div>
  )
}
export default Contact
