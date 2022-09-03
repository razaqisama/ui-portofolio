import React from 'react';

import { Carousel } from './Carousel';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Displays/Carousel',
  component: Carousel,
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
const Template = (args) => <Carousel {...args} />;

//👇 Each story then reuses that template
export const Simple = Template.bind({});

Simple.args = {
    
};