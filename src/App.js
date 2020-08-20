import React from 'react';
import Count from './mobx-components/Count.jsx'
import ShowReader from './Hook/ShowReader'

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <main> 
          <Count/>
          <div>*********** 自定义hook部分 *********</div>
          <ShowReader/>
        </main>
      </div>
    );
  }
}
