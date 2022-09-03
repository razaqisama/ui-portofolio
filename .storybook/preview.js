import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen'
}

// export const decorators = [
//   (Story) => (
//     <div style={{ margin: '0' }}>
//       <Story />
//     </div>
//   ),
// ];