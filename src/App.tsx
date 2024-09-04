import React from 'react';

interface AppProps {
  commit?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <h1>{this.props.commit}</h1>;
  }
}

export default App;
