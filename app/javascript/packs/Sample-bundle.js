import ReactOnRails from 'react-on-rails';

import Sample from '../bundles/HelloWorld/components/Sample';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Sample,
});