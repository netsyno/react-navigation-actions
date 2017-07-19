# react-navigation-actions
Common navigation actions for direct use with [react-navigation](https://reactnavigation.org/).


## Installation
If you use yarn:
```
yarn add react-navigation-actions
```

If you use npm:
```
npm install --save react-navigation-actions
```

Override getStateForAction of your Navigator to be able to use the new actions.
```js
import { StackNavigator } from 'react-navigation';
import { getStateForAction } from 'react-navigation-actions';

const Navigator = new StackNavigator(screens, navigatorConfig);
Navigator.router.getStateForAction = getStateForAction(Navigator.router.getStateForAction);
```

## Usage
react-navigation-actions provides simple action creators, which you can dispatch in navigation-aware components.

```js
import { goBackN } from 'react-navigation-actions';

// inside your navigation-aware component:
this.props.navigation.dispatch(goBackN(3));
```

## Tested environments
Until now this library is only tested with StackNavigator. Nested navigators are also not tested yet. If you encounter problems feel free to open a pull request.


## Available action creators
### `resetTo(routeName, [routeParams])`
Discard the complete navigation stack of your router and show the route defined by `routeName` and optional
`routeParams`.

### `goBackN(n)`
Go back n routes in one step. If there are not enough routes to go back in the stack, this action is ignored.

### `replace(routeName, [routeParams])`
Replace the current route with the route defined by `routeName` and the optional `routeParams`.


# Contribute
Contributions are welcome. Just open a pull request.
