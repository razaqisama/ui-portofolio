// Button.stories.js|jsx

import React from 'react';

import { ButtonIcon } from './ButtonIcon';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Actions/Button',
  component: ButtonIcon,
  argTypes: {
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
    <ButtonIcon {...args}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </ButtonIcon>
)

//👇 Each story then reuses that template
export const Icon = Template.bind({});

Icon.args = {

};