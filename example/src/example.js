var React = require('react');
var ReactDOM = require('react-dom');
var OnePageCalendar = require('react-one-page-calendar');

var App = React.createClass({
	getInitialState() {
		return {
			year: 1994
		};
	},
	onYearChange(e) {
		e.persist();
		console.log('New Year: ', e.target.value);
		this.setState({
			year: e.target.value
		});
	},
	render () {
		return (
			<div>
				<div>
					<div>
						<span style={{fontSize: '16px'}}>Pick your year -- </span>
						<input type='number' min={0} max={9999} value={this.state.year} onChange={this.onYearChange}/>
					</div>
				</div>
				<br />
				<OnePageCalendar year={Number(this.state.year)}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
