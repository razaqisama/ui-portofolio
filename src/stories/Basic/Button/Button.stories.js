// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Actions/Button',
  component: Button,
  argTypes: {
    type: {
        description: "Button style: Solid / Outlined",
        control: 'select',
        options: ['outlined', 'solid']
    },
  }
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Button {...args}>Button</Button>;

//๐ Each story then reuses that template
export const Outlined = Template.bind({});
export const Solid = Template.bind({});

Outlined.args = {
    type: 'outlined',
};

Solid.args = {
    type: 'solid',  
}