# State Management
Modern day react state management through hooks.
Hooks are specially-implemented functions that let us add functionality to React components beyond just creating and returning React elements.

We'll look at the following built-in hooks in more detail:

- useState - Persist state within a component function
- useReducer - Similar to useState, but for state that involves multiple sub-values
- useEffect - Perform side effects within our component functions
We can also compose built-in hooks to build our own.


## Application State

This is the state that controls interactive parts of an application. Opening modals, notifications, changing color mode, etc. For best performance and maintainability, keep the state as close as possible to the components that are using it. Don't make everything global out of the box.

Good Application State Solutions:

- [context](https://reactjs.org/docs/context.html) + [hooks](https://reactjs.org/docs/hooks-intro.html)
- [xstate](https://xstate.js.org/)


## Server Cache State

This is the state that comes from the server which is being cached on the client for further usage. It is possible to store remote data inside a state management store such as redux, but there are better solutions for that.

Good Server Cache Libraries:

- [react-query](https://react-query.tanstack.com/) - REST + GraphQL

## URL State

State that is being kept in the address bar of the browser. It is usually tracked via url params (`/app/${dynamicParam}`) or query params (`/app?dynamicParam=1`). It can be accessed and controlled via your routing solution such as `react-router-dom`.
