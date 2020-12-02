import React from 'react'

class Select extends React.Component{
	state={
		value:false
	}
	onChange(e){
		this.setState({value:e.target.value})
	}
	render(){
		return(
			<div>
				<select className='form-control' onChange={this.onChange}>
					<option value="true">Yes</option>
					<option value="false">No</option>
				</select>
			</div>
		)
	}
}

export default Select