import React from 'react';
import Count from './mobx-components/Count.jsx'

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <main>
          {Count}
        </main>
      </div>
    );
  }
}
