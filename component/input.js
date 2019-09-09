import React, { useState } from "react";
import styles from "./input.module.scss";
import PropTypes from "prop-types";
import classnames from "classnames";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextField = ({
  callBack,
  required,
  style,
  iconLeft,
  iconRight,
  label,
  radius,
  medium,
  big,
  type,
  name
}) => {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState(false);

  const classProps = classnames(styles.container, {
    [styles.medium]: medium,
    [styles.big]: big,
    [styles[`${style}`]]: true,
    [styles["focus-text-area"]]: focus,
    [styles.fullField]: text.length !== 0,
    [styles.required]: required && text.length === 0,
    [styles["icon-text-area-left"]]: iconLeft,
    [styles["icon-text-area-right"]]: iconRight,
    [styles["text-area-radius"]]: radius
  });

  const onFoucusHandle = () => {
    setFocus(true);
  };

  const onBlurHandle = () => {
    setFocus(false);
  };

  return (
    <div className={classProps}>
      <div>
        <FontAwesomeIcon icon={faUser} size="1x" />
      </div>
      <label>{label}</label>
      <input
        id={"input"}
        type={type}
        name={name}
        value={text}
        onChange={event => {
          setText(event.target.value);
          callBack(text);
        }}
        onFocus={() => {
          onFoucusHandle();
        }}
        onBlur={() => {
          onBlurHandle();
        }}
      />
      <div>
        <FontAwesomeIcon icon={faUser} size="1x" />
      </div>
      <span>Required *</span>
    </div>
  );
};

export default TextField;

TextField.defaultProps = {
  style: "default",
  required: false,
  iconLeft: false,
  iconRight: false,
  label: "Input",
  radius: false,
  medium: false,
  big: false,
  type: "text",
  name: ""
};

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
  disabled: PropTypes.bool,
  callBack: PropTypes.string,
  required: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  radius: PropTypes.bool,
  medium: PropTypes.bool,
  big: PropTypes.bool,
  type: PropTypes.string
};
