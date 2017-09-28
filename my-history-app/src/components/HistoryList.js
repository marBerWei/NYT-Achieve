import React from 'react'
import HistoryItem from './HistoryItem'

const HistoryList = (props) => {
	const headlines = props.events.map((event, i) => {
		return <HistoryItem key= {i} event = {event} />
	})
	return (
		<div>
			<ul>
				{headlines}
			</ul>
		</div>
		)
}

export default HistoryList
