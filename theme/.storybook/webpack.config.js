/* ./storybook/webpack.config.js */

module.exports = ({ config }) => {
    return require("../config-overrides")(config);
};