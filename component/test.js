import React, { useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/dist/style.css";

const Input = () => {
  const [count, setCount] = useState(0);
  const [phone, setPhone] = useState("");
  function handleOnChange(value) {
    setPhone(value);
  }

  const classStyle = () => ({
    backgroundColor: "red"
  });

  console.log(classStyle());

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>
        <ReactPhoneInput
          defaultCountry={"us"}
          value={phone}
          onChange={handleOnChange}
          inputStyle={classStyle()}
        />
      </div>
    </div>
  );
};

export default Input;
