// Button.stories.js|jsx

import React from 'react';

import { SimpleCard } from './SimpleCard';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Display/Card',
  component: SimpleCard,
  argTypes: {
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <SimpleCard {...args}/>;

//๐ Each story then reuses that template
export const Simple = Template.bind({});

Simple.args = {

};