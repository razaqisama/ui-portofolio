// Button.stories.js|jsx

import React from 'react';

import { GlobalSearch } from './GlobalSearch';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'UI Components/Basic/Actions/Search Bar',
  component: GlobalSearch,
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
const Template = (args) => <GlobalSearch {...args} />;

//👇 Each story then reuses that template
export const globalSearch = Template.bind({});

globalSearch.args = {

};