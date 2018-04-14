import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button as DefaultButton, Welcome } from "@storybook/react/demo";
import Button from "../src/Button";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("DefaultButton")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <DefaultButton onClick={action("clicked")}>Hello Button</DefaultButton>
  ))
  .add("with some emoji", () => (
    <DefaultButton onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DefaultButton>
  ));
storiesOf("MyButton", module).add("default", () => <Button />);
