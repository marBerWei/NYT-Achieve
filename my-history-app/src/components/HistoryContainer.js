import React from 'react'
import HistoryList from './HistoryList'
import HistoryData from '../HistoryData.js'

class HistoryContainer extends React.Component {

	state = {
		events: [...HistoryData.response.docs]
	}


	// componentDidMount(){// 	fetch('')
	// 	.then(resp => resp.text())
	// 	.then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
 //        .then(data => console.log(data))
	// 	// 	this.setState({
	// 	// 		events: EventJSON.result
	// 	// 	}, () => console.log(this.state.events))
	// 	// })
	// 
	

	render() {
		console.log(this.state.events)
		return (
			<div><HistoryList events={this.state.events}/></div>
			)
	}
}

export default HistoryContainer