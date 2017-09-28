import React from 'react'
import HistoryList from './HistoryList'

class HistoryContainer extends React.Component {

	state = {
		events: []
	}

	componentDidMount(){
		fetch('http://www.vizgr.org/historical-events/search.php?query=arab%20spring&related=true&format=xml')
		.then(resp => resp.text())
		.then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => console.log(data))
		// 	this.setState({
		// 		events: EventJSON.result
		// 	}, () => console.log(this.state.events))
		// })
	}

	render() {
		return (
			<div><HistoryList/></div>
			)
	}
}

export default HistoryContainer