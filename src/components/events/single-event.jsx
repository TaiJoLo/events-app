import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;
    const cityId = router?.query.cat;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please introduce a correct email address");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email: emailValue, eventId, cityId }),
      });

      const data = await response.json();

      console.log("data_single_event:", data);

      setMessage(data.message);
      // if (!response.ok) throw new Error(`Throw Error: ${response.status}`);

      inputEmail.current.value = "";
    } catch (e) {
      console.log("ERROR HERE:", e.message);
    }
  };

  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <form onSubmit={submitData} className="email_registration">
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
      <p>{data && message}</p>
    </div>
  );
};

export default SingleEvent;
