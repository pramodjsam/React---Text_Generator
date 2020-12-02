import React from 'react'

const Text = ({values,valueChange})=>{
	console.log(values)
	return(
		<div className='form-group'>
			<input type="number" value={values} onChange={(e)=>valueChange(e)}  className='form-control' />
		</div>
	)
}

export default Text