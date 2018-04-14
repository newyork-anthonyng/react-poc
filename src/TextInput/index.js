import React from "react";
import styles from "./styles.css";
import PropTypes from "prop-types";
import cx from "classnames";

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInputFocused: false,
      isButtonFocused: false
    };
  }

  handleFocus = ({ target }) => {
    if (target === this.input) {
      this.setState({
        isInputFocused: true
      });
    } else if (target === this.button) {
      this.setState({
        isButtonFocused: true
      });
    }
  };

  handleBlur = ({ target }) => {
    // Use timeout to handle when tabbing from button to input (and vice-versa)
    window.setTimeout(() => {
      if (target === this.input) {
        this.setState({
          isInputFocused: false
        });
      } else if (target === this.button) {
        this.setState({
          isButtonFocused: false
        });
      }
    }, 0);
  };

  render() {
    const {
      placeholder,
      value,
      onChange,
      onInputClear,
      error,
      icon
    } = this.props;
    const { isInputFocused, isButtonFocused } = this.state;
    const shouldDisplayClearButton =
      (isInputFocused || isButtonFocused) && value.length > 0;

    const inputClassName = cx(styles.input, {
      [styles.inputError]: error,
      [styles.inputIcon]: icon
    });

    return (
      <div
        className={styles.container}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        {icon && <div className={styles.icon}>{this.props.icon}</div>}
        <input
          onChange={onChange}
          className={inputClassName}
          type="text"
          placeholder={placeholder}
          value={value}
          ref={input => (this.input = input)}
        />
        {shouldDisplayClearButton && (
          <button
            ref={button => (this.button = button)}
            className={styles.clearButton}
            onClick={onInputClear}
          >
            ❌
          </button>
        )}
      </div>
    );
  }
}

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onInputClear: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.bool,
  icon: PropTypes.node
};

export default TextInput;
