/* eslint global-require: 0 */

module.exports = {
  get getStateForAction() {
    return require('./getStateForAction').default;
  },

  get goBackN() {
    return require('./actions/goBackN').default;
  },

  get replace() {
    return require('./actions/replace').default;
  },

  get resetTo() {
    return require('./actions/resetTo').default;
  },
};
