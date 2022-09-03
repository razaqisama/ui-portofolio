// Button.stories.js|jsx

import React from 'react';

import { Select } from './Select';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Actions/Select',
  component: Select,
  argTypes: {
    title: { control: "text"}
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: '10px', marginLeft: '5px', marginRight: '5px' }}>
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Select {...args} />;

//👇 Each story then reuses that template
export const Basic = Template.bind({});

Basic.args = {

};