// Button.stories.js|jsx

import React from 'react';

import { Label } from './Label';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Display/Label',
  component: Label,
  argTypes: {

  }
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Label {...args} />;

//๐ Each story then reuses that template
export const Basic = Template.bind({});

Basic.args = {
  text: "This is label"
}