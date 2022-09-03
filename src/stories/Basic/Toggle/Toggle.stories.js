// Button.stories.js|jsx

import React from 'react';

import { Toggle } from './Toggle';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Actions/Toggle',
  component: Toggle,
  argTypes: {
    type: {
        description: "Toggle type",
        control: 'select',
        options: ['simple', 'short']
    },
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: '10px' }}>
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Toggle {...args} />;

//👇 Each story then reuses that template
export const Simple = Template.bind({});
export const Short = Template.bind({});


Simple.args = {
    type: "simple"
};

Short.args = {
    type: "short"
}