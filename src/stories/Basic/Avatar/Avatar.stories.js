// Button.stories.js|jsx

import React from 'react';

import { Avatar } from './Avatar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Display/Avatar',
  component: Avatar,
  argTypes: {

  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Avatar {...args} />;

//👇 Each story then reuses that template
export const Status = Template.bind({});

Status.args = {
    type: 'outlined',
};