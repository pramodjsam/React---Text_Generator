import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Text=({values})=>{
	if(!values){
		return <h1>Loading...</h1>
	}
	return(
		<div className='container'>
			{values.map((item)=>(
				<p key={uuidv4()}>{item}</p>
			))}
		</div>
	)
}

export default Text