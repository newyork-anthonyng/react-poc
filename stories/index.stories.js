import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import Button from "../src/Button";
import CircularButton from "../src/CircularButton";
import TextInput from "../src/TextInput";
import DropdownInput from "../src/DropdownInput";
import { PinIcon, CalendarIcon, KeyIcon } from "../src/Icons";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => <Button>Find a hotel</Button>)
  .add("Circular Button", () => (
    <CircularButton
      disabled={boolean("Disabled", false)}
      onClick={action("clicked")}
    >
      +
    </CircularButton>
  ))
  .add("Circular Button disabled", () => (
    <CircularButton disabled={true} onClick={action("clicked")}>
      +
    </CircularButton>
  ));

storiesOf("Icons", module)
  .add("Pin", () => <PinIcon />)
  .add("Calendar", () => <CalendarIcon />)
  .add("Key", () => <KeyIcon />);

storiesOf("TextInput", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    function getIcon(name) {
      switch (name) {
        case "pin":
          return <PinIcon />;
        case "calendar":
          return <CalendarIcon />;
        case "key":
          return <KeyIcon />;
        default:
          return false;
      }
    }
    const options = ["none", "calendar", "pin", "key"];
    const iconName = select("Icon", options, "none");

    return (
      <TextInput
        placeholder={text("Placeholder", "Where would you like to stay?")}
        value={text("Input value", "San Francisco")}
        onChange={action("input changed")}
        onInputClear={action("input cleared")}
        error={boolean("Has error", false)}
        icon={getIcon(iconName)}
      />
    );
  })
  .add("functional", () => {
    class ControlledTextInput extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          value: "",
          error: false
        };
      }

      handleTextChange = e => {
        const inputValue = e.target.value;
        this.setState({
          value: inputValue,
          error: inputValue.length === 0
        });
      };

      handleInputClear = () => {
        this.setState({ value: "" });
      };

      render() {
        return (
          <TextInput
            placeholder="Where would you like to stay?"
            value={this.state.value}
            onChange={this.handleTextChange}
            onInputClear={this.handleInputClear}
            error={this.state.error}
          />
        );
      }
    }
    return <ControlledTextInput />;
  });

storiesOf("DropdownInput", module).add("default", () => (
  <DropdownInput icon={<KeyIcon />}>
    5 rooms, 5 adults, 0 children
  </DropdownInput>
));
