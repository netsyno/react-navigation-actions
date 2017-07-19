import { GO_BACK_N, getStateForGoBackN } from './actions/goBackN';
import { REPLACE, getStateForReplace } from './actions/replace';
import { RESET_TO, getStateForResetTo } from './actions/resetTo';

const mapping = {
  [GO_BACK_N]: getStateForGoBackN,
  [REPLACE]: getStateForReplace,
  [RESET_TO]: getStateForResetTo,
};

export default defaultGetStateForAction => (passedAction, state) => {
  const getStateForAction = mapping[passedAction.type];

  if (getStateForAction) {
    const params = { defaultGetStateForAction, passedAction, state };
    const newState = getStateForAction(params);

    if (newState) {
      return newState;
    }
  }

  return defaultGetStateForAction(passedAction, state);
};
