# Navigation

Routing, which is the ability to route different requested paths to different displayed pages, takes place within the browser for the single page app we are building. This is preferable to routing on the server as the user experiences faster page transitions.

Client side routing does come with the cost of a larger initial download and could harm SEO (although it isn't clear to me if this is the case). It also requires a catch all backend serving route as the backend no longer knows which paths equate to pages.

React Router is a declarative, component based, client and server-side routing library for React. Just as React gives you a declarative and composable API for adding to and updating application state, React Router gives you a declarative and composable API for adding to and updating the user's navigation history.


```javascript
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      // Routes to go here
      <Route>
        // Not found page here
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
```

### Private Routes
A significant fraction of the routes in the app will only be available for users who are logged in. Using the Authentication context allows for a PrivateRoute component that is usable in the same why as Route components but only matches when the user is logged in. 


#### React router dom with Mantine
Mantine has a Text element which integrates with react router dom link very easily.

```

```
