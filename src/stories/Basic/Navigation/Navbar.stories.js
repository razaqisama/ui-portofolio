// Button.stories.js|jsx

import React from 'react';

import { Navbar } from './Navbar';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Navigation/Navbar',
  component: Navbar,
  argTypes: {

  }
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Navbar {...args} />;

//๐ Each story then reuses that template
export const Basic = Template.bind({});