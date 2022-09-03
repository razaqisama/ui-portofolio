import React from 'react';

import { FormLogin } from './FormLogin';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Forms/FormLogin',
  component: FormLogin,
  argTypes: {
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FormLogin {...args} />;

//👇 Each story then reuses that template
export const Simple = Template.bind({});

Simple.args = {
    
};