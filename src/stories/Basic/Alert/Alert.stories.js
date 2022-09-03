// Button.stories.js|jsx

import React from 'react';

import { Alert } from './Alert';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Display/Alert',
  component: Alert,
  argTypes: {

  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Alert {...args} />;

//👇 Each story then reuses that template
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const Success = Template.bind({});

Info.args = {
    type: "info"
};

Warning.args = {
    type: "warning"
};

Error.args = {
    type: "error"
};

Success.args = {
    type: "success"
};