import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const Button = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
