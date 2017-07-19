import { NavigationActions } from 'react-navigation';

export const RESET_TO = 'RESET_TO';

export function getStateForResetTo({ defaultGetStateForAction, passedAction }) {
  const newState = defaultGetStateForAction(
    NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: passedAction.routeName,
          params: passedAction.params,
        }),
      ],
    })
  );

  return {
    index: 0,
    routes: newState.routes.slice(-1),
  };
}

export default (routeName, params = {}) => ({
  type: RESET_TO,
  routeName,
  params,
});
