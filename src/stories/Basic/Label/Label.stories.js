// Button.stories.js|jsx

import React from 'react';

import { Label } from './Label';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Display/Label',
  component: Label,
  argTypes: {

  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Label {...args} />;

//👇 Each story then reuses that template
export const Basic = Template.bind({});

Basic.args = {
  text: "This is label"
}