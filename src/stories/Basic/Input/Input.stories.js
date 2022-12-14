// Button.stories.js|jsx

import React from 'react';

import { Input } from './Input';

export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Actions/Input',
  component: Input,
  argTypes: {

  },
  decorators: [
    (Story) => (
      <div style={{ 
          marginTop: '10px',
          marginLeft: '10px',
          marginRight: '10px',
          }}>
        <Story />
      </div>
    ),
  ],
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = (args) => <Input {...args} />;

//๐ Each story then reuses that template
export const Label = Template.bind({});