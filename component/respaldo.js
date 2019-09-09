import React, { useState, useRef } from "react";
import styles from "./input.module.scss";
import PropTypes from "prop-types";

const TextField = () => {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  const onFoucusHandle = () => {
    inputRef.current.focus();
    setFocus(true);
  };

  const onBlurHandle = () => {
    setFocus(false);
  };

  return (
    <div className={styles.container}>
      <label className={(focus && styles.label_up) || ""}>Hola</label>
      <input
        id={"input"}
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
        onFocus={() => {
          onFoucusHandle();
        }}
        onBlur={() => {
          onBlurHandle();
        }}
        ref={inputRef}
      />
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
};
