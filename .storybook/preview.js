// If you need global CSS, you can import it here and Storybook will automatically include it in all stories.
// You don't need this if you don't have any global CSS.
import '../styles/app.css';
import './style.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
