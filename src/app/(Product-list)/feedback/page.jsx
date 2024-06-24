import React, { useState } from "react";

function Feedback() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: "POST",
        body: JSON.stringify({ email, message }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Feedback page</h1>
      <br />
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="bg-pink-200 p-2"
            type="text"
            id="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>
          <br></br>
          <input
            className="bg-pink-200 p-2"
            type="text"
            id="message"
            placeholder="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit" className="bg-red-700 p-2">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
