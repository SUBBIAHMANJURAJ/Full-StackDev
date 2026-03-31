import { useState } from "react";

const FormComponent = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Form submitted successfully ✅");
  };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <br /><br />

        <input type="email" placeholder="Email" required />
        <br /><br />

        <input type="password" placeholder="Password" required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p>{msg}</p>
    </div>
  );
};

export default FormComponent;