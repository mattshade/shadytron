import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

class Test extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Voyager introspection={this.introspectionProvider} displayOptions={{skipRelay: false, showLeafFields: true}}/>
    )
  }

  introspectionProvider(query) {
    return fetch('http://localhost:4000/graphql', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }).then(response => response.json());
  }
}

ReactDOM.render(<Test/>, document.getElementById('voyager'));
