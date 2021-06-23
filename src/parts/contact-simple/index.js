import React, { useRef, useState } from "react";
import axios from "axios";
import "./index.scss";

const Clients = () => {
  const first = useRef(null);
  const last = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const about = useRef(null);

  const [userMsg, setUserMsg] = useState("");

  const send = () => {
    if (
      first !== null &&
      last !== null &&
      email !== null &&
      about !== null &&
      email.current.value.length !== 0
    ) {
      const myBodyEmail = `
            Firstname: ${first.current.value}
            LastName: ${last.current.value}
            Phone: ${phone.current.value}
            Email: ${email.current.value}

            Msg:
            ${about.current.value}
            `;

      let dataSend = {
        name: first.current.value,
        email: email.current.value,
        message: myBodyEmail,
      };

      //sending data
      axios.post("https://6thman.us/mail.php", dataSend).then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          setUserMsg("Your message has been sent, thank you!");
        } else if (response.data.status === "fail") {
          setUserMsg(
            "There was an error sending the message, please try again"
          );
        }
      });
    } else {
      setUserMsg("Be sure to fill in all the fields ");
    }
  };

  return (
    <div className="contact-container " id="contact">
      <div className="title pt-5">COMING OFF THE BENCH</div>
      <div className="subtitle">CONTACT US</div>
      <div className="cc-container">
        <div className="cc-safe simple-contact-data">
        Ready for us to come and play for you?
        <br /> Pass us the ball and let us help you achive the vision
        <br />your have for your brand
        <br />
        <a href="mailto:rod@6thman.us">Tell us about your project</a>
        </div>
    
      </div>
    </div>
  );
};

export default Clients;
