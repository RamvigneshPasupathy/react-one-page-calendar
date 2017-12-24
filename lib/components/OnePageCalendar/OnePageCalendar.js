'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OnePageCalendar = require('./OnePageCalendar.css');

var _OnePageCalendar2 = _interopRequireDefault(_OnePageCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DAYS_SHORT = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
var DAYS_LONG = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

var MONTHS_SMALL = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_LARGE = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

var OnePageCalendar = function (_Component) {
	_inherits(OnePageCalendar, _Component);

	function OnePageCalendar() {
		_classCallCheck(this, OnePageCalendar);

		var _this = _possibleConstructorReturn(this, (OnePageCalendar.__proto__ || Object.getPrototypeOf(OnePageCalendar)).call(this));

		_this.state = {
			months: [[], [], [], [], [], [], []],
			days: []
		};
		_this.getMonths = _this.getMonths.bind(_this);
		return _this;
	}

	_createClass(OnePageCalendar, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props = this.props,
			    size = _props.size,
			    year = _props.year;

			if (Number.isInteger(year)) {
				if (size === 'small') {
					this.setState({ days: DAYS_SHORT });
				} else {
					this.setState({ days: DAYS_LONG });
				}
				this.getMonths(this.props.year);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _props2 = this.props,
			    size = _props2.size,
			    year = _props2.year;

			if (Number.isInteger(year)) {
				if (size === 'small') {
					this.setState({ days: DAYS_SHORT });
				} else {
					this.setState({ days: DAYS_LONG });
				}
				this.getMonths(this.props.year);
			}
		}
	}, {
		key: 'getMonths',
		value: function getMonths(year) {
			var months = [[], [], [], [], [], [], []];
			var MONTHS = this.props.size === 'small' ? MONTHS_SMALL : MONTHS_LARGE;
			for (var i = 1; i <= 12; i++) {
				var day = new Date(i + '/1/' + year).getDay(); // mm dd yyyy
				months[day].push(MONTHS[i - 1]);
			};
			this.setState({ months: months });
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    days = _state.days,
			    months = _state.months;
			var _props3 = this.props,
			    size = _props3.size,
			    year = _props3.year;

			return Number.isInteger(year) ? _react2.default.createElement(
				'table',
				{ className: 'OnePageCalendar ' + (size === 'small' ? 'Small' : 'Large') },
				_react2.default.createElement(
					'thead',
					null,
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'th',
							{ colSpan: 5 },
							'Dates'
						),
						_react2.default.createElement(
							'th',
							{ colSpan: 7 },
							'Months'
						)
					),
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'th',
							{ colSpan: 5 },
							'Year: ',
							year
						),
						_react2.default.createElement(
							'th',
							null,
							months[1].map(function (month, key) {
								return _react2.default.createElement(
									'div',
									{ key: key },
									month
								);
							})
						),
						_react2.default.createElement(
							'th',
							null,
							months[2].map(function (month, key) {
								return _react2.default.createElement(
									'div',
									{ key: key },
									month
								);
							})
						),
						_react2.default.createElement(
							'th',
							null,
							months[3].map(function (month, key) {
								return _react2.default.createElement(
									'div',
									{ key: key },
									month
								);
							})
						),
						_react2.default.createElement(
							'th',
							null,
							months[4].map(function (month, key) {
								return _react2.default.createElement(
									'div',
									{ key: key },
									month
								);
							})
						),
						_react2.default.createElement(
							'th',
							null,
							months[5].map(function (month, key) {
								return _react2.default.createElement(
									'div',
									{ key: key },
									month
								);
							})
						),
						_react2.default.createElement(
							'th',
							null,
							months[6].map(function (month, key) {
								return _react2.default.createElement(
									'div',
									{ key: key },
									month
								);
							})
						),
						_react2.default.createElement(
							'th',
							null,
							months[0].map(function (month, key) {
								return _react2.default.createElement(
									'div',
									{ key: key },
									month
								);
							})
						)
					)
				),
				_react2.default.createElement(
					'tbody',
					null,
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							'01'
						),
						_react2.default.createElement(
							'td',
							null,
							'08'
						),
						_react2.default.createElement(
							'td',
							null,
							'15'
						),
						_react2.default.createElement(
							'td',
							null,
							'22'
						),
						_react2.default.createElement(
							'td',
							null,
							'29'
						),
						_react2.default.createElement(
							'td',
							null,
							days[0]
						),
						_react2.default.createElement(
							'td',
							null,
							days[1]
						),
						_react2.default.createElement(
							'td',
							null,
							days[2]
						),
						_react2.default.createElement(
							'td',
							null,
							days[3]
						),
						_react2.default.createElement(
							'td',
							null,
							days[4]
						),
						_react2.default.createElement(
							'td',
							null,
							days[5]
						),
						_react2.default.createElement(
							'td',
							null,
							days[6]
						)
					),
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							'02'
						),
						_react2.default.createElement(
							'td',
							null,
							'09'
						),
						_react2.default.createElement(
							'td',
							null,
							'16'
						),
						_react2.default.createElement(
							'td',
							null,
							'23'
						),
						_react2.default.createElement(
							'td',
							null,
							'30'
						),
						_react2.default.createElement(
							'td',
							null,
							days[1]
						),
						_react2.default.createElement(
							'td',
							null,
							days[2]
						),
						_react2.default.createElement(
							'td',
							null,
							days[3]
						),
						_react2.default.createElement(
							'td',
							null,
							days[4]
						),
						_react2.default.createElement(
							'td',
							null,
							days[5]
						),
						_react2.default.createElement(
							'td',
							null,
							days[6]
						),
						_react2.default.createElement(
							'td',
							null,
							days[0]
						)
					),
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							'03'
						),
						_react2.default.createElement(
							'td',
							null,
							'10'
						),
						_react2.default.createElement(
							'td',
							null,
							'17'
						),
						_react2.default.createElement(
							'td',
							null,
							'24'
						),
						_react2.default.createElement(
							'td',
							null,
							'31'
						),
						_react2.default.createElement(
							'td',
							null,
							days[2]
						),
						_react2.default.createElement(
							'td',
							null,
							days[3]
						),
						_react2.default.createElement(
							'td',
							null,
							days[4]
						),
						_react2.default.createElement(
							'td',
							null,
							days[5]
						),
						_react2.default.createElement(
							'td',
							null,
							days[6]
						),
						_react2.default.createElement(
							'td',
							null,
							days[0]
						),
						_react2.default.createElement(
							'td',
							null,
							days[1]
						)
					),
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							'04'
						),
						_react2.default.createElement(
							'td',
							null,
							'11'
						),
						_react2.default.createElement(
							'td',
							null,
							'18'
						),
						_react2.default.createElement(
							'td',
							null,
							'25'
						),
						_react2.default.createElement('td', null),
						_react2.default.createElement(
							'td',
							null,
							days[3]
						),
						_react2.default.createElement(
							'td',
							null,
							days[4]
						),
						_react2.default.createElement(
							'td',
							null,
							days[5]
						),
						_react2.default.createElement(
							'td',
							null,
							days[6]
						),
						_react2.default.createElement(
							'td',
							null,
							days[0]
						),
						_react2.default.createElement(
							'td',
							null,
							days[1]
						),
						_react2.default.createElement(
							'td',
							null,
							days[2]
						)
					),
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							'05'
						),
						_react2.default.createElement(
							'td',
							null,
							'12'
						),
						_react2.default.createElement(
							'td',
							null,
							'19'
						),
						_react2.default.createElement(
							'td',
							null,
							'26'
						),
						_react2.default.createElement('td', null),
						_react2.default.createElement(
							'td',
							null,
							days[4]
						),
						_react2.default.createElement(
							'td',
							null,
							days[5]
						),
						_react2.default.createElement(
							'td',
							null,
							days[6]
						),
						_react2.default.createElement(
							'td',
							null,
							days[0]
						),
						_react2.default.createElement(
							'td',
							null,
							days[1]
						),
						_react2.default.createElement(
							'td',
							null,
							days[2]
						),
						_react2.default.createElement(
							'td',
							null,
							days[3]
						)
					),
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							'06'
						),
						_react2.default.createElement(
							'td',
							null,
							'13'
						),
						_react2.default.createElement(
							'td',
							null,
							'20'
						),
						_react2.default.createElement(
							'td',
							null,
							'27'
						),
						_react2.default.createElement('td', null),
						_react2.default.createElement(
							'td',
							null,
							days[5]
						),
						_react2.default.createElement(
							'td',
							null,
							days[6]
						),
						_react2.default.createElement(
							'td',
							null,
							days[0]
						),
						_react2.default.createElement(
							'td',
							null,
							days[1]
						),
						_react2.default.createElement(
							'td',
							null,
							days[2]
						),
						_react2.default.createElement(
							'td',
							null,
							days[3]
						),
						_react2.default.createElement(
							'td',
							null,
							days[4]
						)
					),
					_react2.default.createElement(
						'tr',
						null,
						_react2.default.createElement(
							'td',
							null,
							'07'
						),
						_react2.default.createElement(
							'td',
							null,
							'14'
						),
						_react2.default.createElement(
							'td',
							null,
							'21'
						),
						_react2.default.createElement(
							'td',
							null,
							'28'
						),
						_react2.default.createElement('td', null),
						_react2.default.createElement(
							'td',
							null,
							days[6]
						),
						_react2.default.createElement(
							'td',
							null,
							days[0]
						),
						_react2.default.createElement(
							'td',
							null,
							days[1]
						),
						_react2.default.createElement(
							'td',
							null,
							days[2]
						),
						_react2.default.createElement(
							'td',
							null,
							days[3]
						),
						_react2.default.createElement(
							'td',
							null,
							days[4]
						),
						_react2.default.createElement(
							'td',
							null,
							days[5]
						)
					)
				)
			) : _react2.default.createElement(
				'div',
				{ className: 'InvalidYear' },
				'Invalid Year! Calendar Not Available.'
			);
		}
	}]);

	return OnePageCalendar;
}(_react.Component);

OnePageCalendar.defaultProps = {
	year: new Date().getFullYear(),
	size: 'large'
};

exports.default = OnePageCalendar;