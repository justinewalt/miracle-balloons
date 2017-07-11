import React from 'react';
// import { Dropdown } from 'semantic-ui-react';
var SelectedOrder = function (props) {

	return (
		<option value={props.num} selected={props.active}>{props.num}</option>
	)
}



class Reorder extends React.Component {
	

	componentWillMount() {
		function getDefaultState () {
			if (window && window.localStorage) {
				return window.localStorage.balloonCount || '';
			} 
			return '';
		};
		this.setState({currentDropdownState: getDefaultState()});
	}
	
	selectHandler = (e) => {
		window.localStorage.setItem('balloonCount', e.target.value)
	}

	render() {
		var numberOfBaloons = [ 100, 200, 300, 400]
		var currentDropdownState = this.state.currentDropdownState;
		return(
			<select
			onChange={this.selectHandler}
		>
			{numberOfBaloons.map(function(num) {
				return (<SelectedOrder 
					num={num}
					active={num.toString() === currentDropdownState.toString()} 
				/>)
			})}
		</select>
		)
	}
}

export default Reorder;




