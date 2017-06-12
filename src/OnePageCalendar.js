var React = require('react');

var OnePageCalendar = React.createClass({
	propTypes: {
		year: React.PropTypes.number
	},
	getDefaultProps() {
		return {
			year: new Date().getFullYear()
		};
	},
	getInitialState() {
		return {
			months: [[], [], [], [], [], [], []]
		};
	},
	componentWillMount() {
		this.getMonths(this.props.year);
	},
	componentWillReceiveProps(nextProps){
		this.getMonths(nextProps.year);
	},
	getMonths(year) {
		let months = [[], [], [], [], [], [], []];
	  let MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	  for(let i = 1; i <= 12; i++) {
	      let day = new Date(i + '/1/' + year).getDay(); // mm dd yyyy
	      months[day].push(MONTHS[i-1]);
	  };
		this.setState({
			months: months
		});
	},
	render () {
		return (
			<div>
			<table style={{border: '1px solid silver'}}>
				<thead>
					<tr>
						<th style={{border: '1px solid silver'}} colSpan={5}>Dates</th>
						<th style={{border: '1px solid silver'}} colSpan={7}>Months</th>
					</tr>
					<tr>
						<th style={{border: '1px solid silver'}} colSpan={5}></th>
						<th style={{border: '1px solid silver'}}>{this.state.months[1].map(function(month, key) { return (<div key={key}>{month}</div>)})}</th>
						<th style={{border: '1px solid silver'}}>{this.state.months[2].map(function(month, key) { return (<div key={key}>{month}</div>)})}</th>
						<th style={{border: '1px solid silver'}}>{this.state.months[3].map(function(month, key) { return (<div key={key}>{month}</div>)})}</th>
						<th style={{border: '1px solid silver'}}>{this.state.months[4].map(function(month, key) { return (<div key={key}>{month}</div>)})}</th>
						<th style={{border: '1px solid silver'}}>{this.state.months[5].map(function(month, key) { return (<div key={key}>{month}</div>)})}</th>
						<th style={{border: '1px solid silver'}}>{this.state.months[6].map(function(month, key) { return (<div key={key}>{month}</div>)})}</th>
						<th style={{border: '1px solid silver'}}>{this.state.months[0].map(function(month, key) { return (<div key={key}>{month}</div>)})}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={{border: '1px solid silver'}}>01</td>
						<td style={{border: '1px solid silver'}}>08</td>
						<td style={{border: '1px solid silver'}}>15</td>
						<td style={{border: '1px solid silver'}}>22</td>
						<td style={{border: '1px solid silver'}}>29</td>
						<td style={{border: '1px solid silver'}}>MON</td>
						<td style={{border: '1px solid silver'}}>TUE</td>
						<td style={{border: '1px solid silver'}}>WED</td>
						<td style={{border: '1px solid silver'}}>THU</td>
						<td style={{border: '1px solid silver'}}>FRI</td>
						<td style={{border: '1px solid silver'}}>SAT</td>
						<td style={{border: '1px solid silver'}}>SUN</td>
					</tr>
					<tr>
						<td style={{border: '1px solid silver'}}>02</td>
						<td style={{border: '1px solid silver'}}>09</td>
						<td style={{border: '1px solid silver'}}>16</td>
						<td style={{border: '1px solid silver'}}>23</td>
						<td style={{border: '1px solid silver'}}>30</td>
						<td style={{border: '1px solid silver'}}>TUE</td>
						<td style={{border: '1px solid silver'}}>WED</td>
						<td style={{border: '1px solid silver'}}>THU</td>
						<td style={{border: '1px solid silver'}}>FRI</td>
						<td style={{border: '1px solid silver'}}>SAT</td>
						<td style={{border: '1px solid silver'}}>SUN</td>
						<td style={{border: '1px solid silver'}}>MON</td>
					</tr>
					<tr>
						<td style={{border: '1px solid silver'}}>03</td>
						<td style={{border: '1px solid silver'}}>10</td>
						<td style={{border: '1px solid silver'}}>17</td>
						<td style={{border: '1px solid silver'}}>24</td>
						<td style={{border: '1px solid silver'}}>31</td>
						<td style={{border: '1px solid silver'}}>WED</td>
						<td style={{border: '1px solid silver'}}>THU</td>
						<td style={{border: '1px solid silver'}}>FRI</td>
						<td style={{border: '1px solid silver'}}>SAT</td>
						<td style={{border: '1px solid silver'}}>SUN</td>
						<td style={{border: '1px solid silver'}}>MON</td>
						<td style={{border: '1px solid silver'}}>TUE</td>
					</tr>
					<tr>
						<td style={{border: '1px solid silver'}}>04</td>
						<td style={{border: '1px solid silver'}}>11</td>
						<td style={{border: '1px solid silver'}}>18</td>
						<td style={{border: '1px solid silver'}}>25</td>
						<td style={{border: '1px solid silver'}}></td>
						<td style={{border: '1px solid silver'}}>THU</td>
						<td style={{border: '1px solid silver'}}>FRI</td>
						<td style={{border: '1px solid silver'}}>SAT</td>
						<td style={{border: '1px solid silver'}}>SUN</td>
						<td style={{border: '1px solid silver'}}>MON</td>
						<td style={{border: '1px solid silver'}}>TUE</td>
						<td style={{border: '1px solid silver'}}>WED</td>
					</tr>
					<tr>
						<td style={{border: '1px solid silver'}}>05</td>
						<td style={{border: '1px solid silver'}}>12</td>
						<td style={{border: '1px solid silver'}}>19</td>
						<td style={{border: '1px solid silver'}}>26</td>
						<td style={{border: '1px solid silver'}}></td>
						<td style={{border: '1px solid silver'}}>FRI</td>
						<td style={{border: '1px solid silver'}}>SAT</td>
						<td style={{border: '1px solid silver'}}>SUN</td>
						<td style={{border: '1px solid silver'}}>MON</td>
						<td style={{border: '1px solid silver'}}>TUE</td>
						<td style={{border: '1px solid silver'}}>WED</td>
						<td style={{border: '1px solid silver'}}>THU</td>
					</tr>
					<tr>
						<td style={{border: '1px solid silver'}}>06</td>
						<td style={{border: '1px solid silver'}}>13</td>
						<td style={{border: '1px solid silver'}}>20</td>
						<td style={{border: '1px solid silver'}}>27</td>
						<td style={{border: '1px solid silver'}}></td>
						<td style={{border: '1px solid silver'}}>SAT</td>
						<td style={{border: '1px solid silver'}}>SUN</td>
						<td style={{border: '1px solid silver'}}>MON</td>
						<td style={{border: '1px solid silver'}}>TUE</td>
						<td style={{border: '1px solid silver'}}>WED</td>
						<td style={{border: '1px solid silver'}}>THU</td>
						<td style={{border: '1px solid silver'}}>FRI</td>
					</tr>
					<tr>
						<td style={{border: '1px solid silver'}}>07</td>
						<td style={{border: '1px solid silver'}}>14</td>
						<td style={{border: '1px solid silver'}}>21</td>
						<td style={{border: '1px solid silver'}}>28</td>
						<td style={{border: '1px solid silver'}}></td>
						<td style={{border: '1px solid silver'}}>SUN</td>
						<td style={{border: '1px solid silver'}}>MON</td>
						<td style={{border: '1px solid silver'}}>TUE</td>
						<td style={{border: '1px solid silver'}}>WED</td>
						<td style={{border: '1px solid silver'}}>THU</td>
						<td style={{border: '1px solid silver'}}>FRI</td>
						<td style={{border: '1px solid silver'}}>SAT</td>
					</tr>
				</tbody>
			</table>
			</div>
		);
	}
});

export default OnePageCalendar;
