export const GO_BACK_N = 'GO_BACK_N';

export function getStateForGoBackN({ passedAction, state }) {
  if (state && state.routes && state.routes.length > passedAction.n) {
    const routes = state.routes.slice(0, state.routes.length - passedAction.n);

    return {
      index: routes.length - 1,
      routes,
    };
  }

  return null;
}

export default n => ({ type: GO_BACK_N, n });
