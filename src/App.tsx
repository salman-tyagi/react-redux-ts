import React from 'react';

interface AppProps {
  commit?: string;
}

// interface AppState {
//   count: number;
// }

// const App = (props: AppProps): JSX.Element => {
//   return <h1>{props.commit}</h1>;
// };

class App extends React.Component<AppProps> {
  state = { count: 0 };

  // Inside class this keyword is undefined in function declaration and expression so we have to bind
  incrementHandler() {
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }

  // Here in arrow function this always points to lexical scope's `this` or its parent's `this` keyword
  decrementHandler = () => {
    console.log(this);
    this.setState({ count: this.state.count - 1 });
  };

  render(): JSX.Element {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <button onClick={this.decrementHandler}>Decrement</button>
        <p>{this.state.count}</p>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
      </div>
    );
  }
}

export default App;
