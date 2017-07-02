	import React from 'react'
	import { Dropdown } from 'semantic-ui-react'

		var options = [
		    {
		      text: 'Jenny Hess',
		      value: 'Jenny Hess',
		    },
		    {
		      text: 'ME',
		      value: 'ME',
		    }
		]

const Reorder = () => (
  <Dropdown placeholder='Select Friend' fluid selection options={options} />
)
	export default Reorder 	