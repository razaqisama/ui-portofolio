// Button.stories.js|jsx

import React from 'react';

import { Tabs } from './Tabs';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Navigation/Tabs',
  component: Tabs,
  argTypes: {
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Tabs {...args} />;

//๐ Each story then reuses that template
export const Simple = Template.bind({});

Simple.args = {

};