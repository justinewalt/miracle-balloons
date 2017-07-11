import React from 'react';
// import { Dropdown } from 'semantic-ui-react';

class Reorder extends React.Component {
	render() {
		var numberOfBaloons = [ 100, 200, 300]
		return(
			<select>
				{numberOfBaloons.map(function(num) {
					return(<option value={num}>{num}</option>);
				})}
			</select>
		)
	}
}

export default Reorder;

