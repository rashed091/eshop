# Component Architecture
You can split a component into multiple smaller components to have a more readable and maintanable design and/or to achieve reuse.

But how do you know what should be its own component?

Here are some questions to ask yourself when determining when to create another component:

**Is it possible for your code chunk to be reused?**

- If yes, construction of a new component seems like a great idea.
- Even if the reuse is within a single component.

**Is your code quite complex?**

- If yes maybe its good idea to split in separate components in order to make your code more readable and maintainable.

**Software Design**

- In general, just use the same techniques for deciding if you should create a new function or object.
- One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

**After you create more components, more questions arise such as:**

- How should components interact? (Component Communication)
- Are there any design patterns I should follow when creating components? (Lifting State Up, Composition vs Inheritance)
- What types of components are there? (Container vs. Presentation)
- How do I make my components reusable?

This section explores each of those questions.

## Component Communication

How should components interact?

### Common Communication Patterns

Components commonly communicate in these ways:

- Parent to Child
- Child to Parent

**Parent to Child** communication is passing a data property into a component. More specifically, passing some data (could be a string (primitive), object, array) into a child component.

**Child to Parent** communication is passing a function as a property into a component. The function is later invoked in the child but executed in the context of the parent.

### Additional Communication Patterns[#](https://handsonreact.com/docs/component-architecture#additional-communication-patterns)

Now that you understand how this communication works in practice then we can explore these additional communication patterns which are essentially variations on "Parent to Child" and "Child to Parent"

- Child to Child (siblings)
- Grandparent to Grandchild
- Grandchild to Parent

Essentially, **communication doesn't skip generations** so if it is going to happen you need to manually communicate up or down between each generation.

> Component communication does not work like JavaScript events...there is no event bubbling.
> 

# Design Patterns[#](https://handsonreact.com/docs/component-architecture#design-patterns)

## Lifting State Up[#](https://handsonreact.com/docs/component-architecture#lifting-state-up)

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

Here is an example.

### Function Component Example[#](https://handsonreact.com/docs/component-architecture#function-component-example)

### Class Component Example[#](https://handsonreact.com/docs/component-architecture#class-component-example)

The React documentation summarizes it best:

> There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.
> 

> Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.
> 

> If something can be derived from either props or state, it probably shouldn’t be in the state.
> 

## Container and Presentation Components[#](https://handsonreact.com/docs/component-architecture#container-and-presentation-components)

### Container (Smart) Components[#](https://handsonreact.com/docs/component-architecture#container-smart-components)

- Are concerned with *how things work*
- Provide the data and behavior to presentational or other container components
- Loads and modifies data via calls to an API
- May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles
- Also know as container components or controller components

### Presentation Components[#](https://handsonreact.com/docs/component-architecture#presentation-components)

- Are concerned with *how things look*
- Receive data and callbacks exclusively via props
- Don’t specify how the data is loaded or changed
- Also know as pure components or dumb components

### Reference[#](https://handsonreact.com/docs/component-architecture#reference)

- [Presentational and Container Components by Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Not a Rule but Something to Notice](https://twitter.com/dan_abramov/status/802569801906475008)

Until Recently when React introduced `Hooks` seems like almost every component eventually needed state so people tended to just create class components by default. In reality, it's not one or the other...often components are a blend of both. Just be aware the more stateful they become the harder they are to test and reuse but reuse often comes at a cost of complexity.

Often my presentation components aren't pure presentation components, they have some state particularly local form state.

## Composition vs Inheritance[#](https://handsonreact.com/docs/component-architecture#composition-vs-inheritance)

React recommends using composition instead of inheritance to reuse code between components.

In general, components can be nested inside other components or live next to other components just like in HTML where a `<div>` can have a `<p>` inside of it and the `<p>` can have an `<a>` and an `<img>`. HTML works on composition so React components work on composition as they are essentially HTML tags you invented.

See the section [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html) in the React documentation for more information.

> We use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies. - Facebook
> 

## Thinking in React[#](https://handsonreact.com/docs/component-architecture#thinking-in-react)

Here are some steps you might find useful as you learn to **Think in React**

1. Break the UI Into a Component Hierarchy
2. Build a Static Version in React
    - No State or Props
3. Identify The Minimal (but complete) Representation Of UI State
4. Identify Where Your State Should Live
    - For each piece of state in your application:
        - Identify every component that renders something based on that state.
        - Find a common owner component (a single component above all the components that need the state in the hierarchy).
        - Either the common owner or another component higher up in the hierarchy should own the state.
        - If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
5. Add Inverse Data Flow
    - Rendering the screen initially involves props and state flowing down the hierarchy
    - Inverse data flow refers to components deep in the hierarchy responding to user actions (clicking a button, hovering, typing) and then updating the state in the higher container component(s)

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```


#### My favorite fully featured component library:

- [Mantine](https://mantine.dev/) - Build fully functional accessible web applications faster than ever – Mantine includes more than 100 customizable components and 40 hooks to cover you in any situation.

## Styling Solutions

There are multiple ways to style a react application, but preference is always raw CSS style.

## Storybook

[Storybook](https://storybook.js.org/) is a great tool for developing and testing components in isolation. Think of it as a catalogue of all the components your application is using. Very useful for developing and discoverability of components.

[Storybook Story Example Code](../src/components/Elements/Button/Button.stories.tsx)
