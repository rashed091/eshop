## Project Structure
The root project structure looks like this:

```ts
+-- .github/workflows   # github actions for running our tests
|
+-- src              		# all client code resides here
|
+-- docker-compose      # for runnning code in a contranerized format
|
+-- package.json        # for running both client and server natively
```

Most of the client side code lives in the `client/src` folder and looks like this:

```ts
client/src
|
+-- assets            # assets folder can contain all the static files
|
+-- components        # shared components used across the entire application
|
+-- containers        # shared components used across the entire application
|
+-- hooks             # shared hooks used across the entire application
|
+-- routes            # routes configuration
|
+-- types             # base types used accross the application
|
+-- utils             # shared utility functions
|
+-- index.tsx         # app entry
```


In order to scale the application in the easiest and most maintainable way, keep most of the client code inside the `src ` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.
