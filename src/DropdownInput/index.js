import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const DropdownInput = ({ children, icon, onClick, open }) => (
  <div
    tabIndex={0}
    className={styles.container}
    onClick={onClick}
    expanded={open ? "true" : "false"}
  >
    <div className={styles.icon}>{icon}</div>
    {children} <span className={styles.caret}>👇</span>
  </div>
);

DropdownInput.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  open: PropTypes.bool
};

export default DropdownInput;
