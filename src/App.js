import React from 'react';
import Count from './mobx-components/Count.jsx'
import ShowReader from './Hook/ShowReader'
import Timer from './mobx-components/Timer.jsx'

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <main> 
          <Count/>
          <div>observable的使用</div>
          <Timer/>
          <div>*********** 自定义hook部分 *********</div>
          <ShowReader/>
        </main>
      </div>
    );
  }
}
