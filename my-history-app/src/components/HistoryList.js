import React from 'react'
//import {Route} from 'react-router-dom'
import HistoryItem from './HistoryItem'

const HistoryList = (props) => {
	const headlines = props.events.map((event, i) => {
		return <HistoryItem 
			key= {i} 
			id={i+1} 
			event = {event}
			/>
	})
	return (
				<div className="ui items">
					{headlines}
				</div>
		)
}

export default HistoryList
