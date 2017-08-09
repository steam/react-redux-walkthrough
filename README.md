# React + Redux

### **React** - A Javascript library for building user interfaces

[https://facebook.github.io/react/](https://facebook.github.io/react/)

>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

### Getting Started with React
1. `brew install yarn`
2. `yarn add create-react-app`
3. `create-react-app my-app`
4. `cd my-app && yarn start`

#### JSX - JSX is a preprocessor step that adds XML syntax to JavaScript.

[http://buildwithreact.com/tutorial/jsx](http://buildwithreact.com/tutorial/jsx)

You can definitely use React without JSX but JSX makes React a lot more elegant.

```
<div className="hello-text">Hello</div>
```

#### Class Component - can have internal state
```
class HelloMessage extends React.Component {
  render() {
    return <div>Hello</div>
  }
}
```


#### Pure Functional Component - has no internal state
```
const HelloMessage = () => <div>Hello</div>
```


#### Props - component input data (accessed via this.props)

```
const HelloMessage = (props) => <div>{this.props.name}</div>

ReactDOM.render(<HelloMessage name="John" />, mountNode);
```

#### State - component internal state data (accessed via this.state)

```
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

ReactDOM.render(<Timer />, mountNode);
```

---

### **Redux** - A predictable state container for JavaScript apps

[http://redux.js.org/](http://redux.js.org/)

>The whole state of your app is stored in an object tree inside a single store.
>The only way to change the state tree is to emit an action, an object describing what happened.
>To specify how the actions transform the state tree, you write pure reducers.

>That's it!

Redux architecture revolves around a strict unidirectional data flow.

This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand. It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.

1. You call store.dispatch(action).
2. The Redux store calls the reducer function you gave it.
3. The root reducer may combine the output of multiple reducers into a single state tree.
4. The Redux store saves the complete state tree returned by the root reducer.

### Getting Started with React-Redux
1. `yarn add redux`
2. `yarn add react-redux`
3. `yarn add uuid`

---

## Learning Resources

[Start Using React to Build Web Applications](https://egghead.io/courses/start-using-react-to-build-web-applications) - Getting started with React video series.

[Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) - Excellent video series by the created of Redux, Dan Abramov

[Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) - Another, more in depth video series by Dan Abramov

[React, Redux and react-redux](http://jilles.me/react-redux-and-react-redux/) - building a small react app, adding redux, then adding react-redux



## Further Reading

**Immutable JS** - Immutable collections for JavaScript

[https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)

**React Router** - Declarative routing for React

[https://github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)

**Reselect** - Selector library for Redux

[https://github.com/reactjs/reselect](https://github.com/reactjs/reselect)

**Redux Saga** - A library that aims to make side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.

[https://redux-saga.js.org/](https://redux-saga.js.org/)

**Typescript** - A typed superset of Javascript that compiles to plain Javascript.

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)