import React, { Component } from 'react';
import OnePageCalendar from 'components/OnePageCalendar';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', color: 'grey' }}>
        <h3><u>One Page Calendar (2017)</u></h3>
        <OnePageCalendar year={2017} size={'large'} />
        <br/><br/>
        <a href='https://github.com/RamvigneshPasupathy/react-calc' style={{ cursor: 'pointer', color: 'blue' }}>View Code on GitHub</a>
        <hr style={{ width: '60%' }}/>
        <p>Copyright &copy; 2017 Ramvignesh Pasupathy.</p>
      </div>
    );
  }
}

export default App;
