# One Page Calendar

One Page Calendar helps to display a single page calendar for a desired year.

## Installation

```
npm install react-one-page-calendar --save
```

## Usage

```
var React = require('react');
var ReactDOM = require('react-dom');

var OnePageCalendar = require('react-one-page-calendar');

var App = React.createClass({
  render () {
    return <div><OnePageCalendar year={2017}/></div>;
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
```

### Properties

* year {Number} - Set year for the calendar. Default: 1994
* size {String} - 'large' | 'small'. Default: 'large'
 
Copyright (c) 2017 Ramvignesh Pasupathy.
