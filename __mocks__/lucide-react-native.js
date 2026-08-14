// Mock for lucide-react-native in Jest
// Icon components are replaced with simple View components that render the icon name

const React = require('react');
const { View } = require('react-native');

function createMockIcon(name) {
  const MockIcon = props =>
    React.createElement(View, { ...props, testID: `icon-${name}` });
  MockIcon.displayName = name;
  return MockIcon;
}

// Create a proxy that returns a mock icon for any named export
module.exports = new Proxy(
  {},
  {
    get: (target, prop) => {
      if (prop === '__esModule')
        return true;
      if (typeof prop === 'string') {
        return createMockIcon(prop);
      }
      return undefined;
    },
  },
);
