import React from 'react'
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
		<div>
				<div className="ui items">
					{headlines}
				</div>
			</div>
		)
}

export default HistoryList
