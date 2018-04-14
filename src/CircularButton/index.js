import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const CircularButton = ({ onClick, children, disabled }) => (
  <button className={styles.button} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

CircularButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default CircularButton;
