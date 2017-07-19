import { NavigationActions } from 'react-navigation';

export const REPLACE = 'REPLACE';

export function getStateForReplace({
  defaultGetStateForAction,
  passedAction,
  state,
}) {
  if (state && state.routes) {
    if (state.routes.length === 1) {
      const newState = defaultGetStateForAction(
        { ...passedAction, type: NavigationActions.NAVIGATE },
        state
      );

      return {
        index: 0,
        routes: newState.routes.slice(-1),
      };
    } else if (state.routes.length > 1) {
      const routes = state.routes.slice(0, state.routes.length - 1);

      const newState = defaultGetStateForAction(
        { ...passedAction, type: NavigationActions.NAVIGATE },
        { routes, index: routes.length - 1 }
      );
      return newState;
    }
  }

  return null;
}

export default (routeName, params = {}) => ({
  type: REPLACE,
  routeName,
  params,
});
