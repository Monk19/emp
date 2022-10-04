import React, { useState } from "react";
import "./screens.modules.css";
function Register() {
  const [formData, setFormData] = useState({
    name: "Please Enter your Name",
    password: "Please Enter your Password",
    phone: "Please Enter your Mobile Number",
    place: "please enter your address",
  });
  const submitFromHandler = () => {};
  const onFromValueChangeHandler = (e) => {
    if (e.target.name === "fname") {
      setFormData((prev) => ({ ...prev, name: e.target.value }));
    } else if (e.target.name === "password") {
      setFormData((prev) => ({ ...prev, password: e.target.value }));
    } else if (e.target.name === "phone") {
      setFormData((prev) => ({ ...prev, phone: e.target.value }));
    } else if (e.target.name === "place") {
      setFormData((prev) => ({ ...prev, place: e.target.value }));
    }
  };
  return (
    <div>
      <form className="register">
        <input
          type="text"
          name="fname"
          placeholder={formData.name}
          onChange={onFromValueChangeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder={formData.password}
          onChange={onFromValueChangeHandler}
        />
        <input
          type="number"
          name="phone"
          maxLength={10}
          placeholder={formData.mobile}
          onChange={onFromValueChangeHandler}
        />
        <textarea
          type="text"
          name="place"
          placeholder={formData.address}
          onChange={onFromValueChangeHandler}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(formData);
            fetch("http://localhost:8090/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },

              body: JSON.stringify({ ...formData }),
            }).then((res) => console.log(res));
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
