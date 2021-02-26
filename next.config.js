const withTM = require("next-transpile-modules")([
  "@react-three/drei",
  "three",
]);
config.module.rules.push({
  test: /react-spring/,
  sideEffects: true,
});
module.exports = withTM();
