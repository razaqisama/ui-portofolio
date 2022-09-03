import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Actions/Checkbox',
  component: Checkbox,
  argTypes: {
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
const Template = (args) => <Checkbox {...args} />;

//👇 Each story then reuses that template
export const Simple = Template.bind({});

Simple.args = {
    
};