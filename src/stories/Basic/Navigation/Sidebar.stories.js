// Button.stories.js|jsx

import React from 'react';

import { Sidebar } from './Sidebar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Navigation/Sidebar',
  component: Sidebar,
  argTypes: {

  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Sidebar {...args} />;

//👇 Each story then reuses that template
export const Basic = Template.bind({});