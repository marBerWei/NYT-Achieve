import React from 'react'
import HistoryList from './HistoryList'
import HistoryData from '../HistoryData.js'
import Search from './Search'
import ParseFunc from '../ParseFunc'

class HistoryContainer extends React.Component {

	state = {
		startDate: ParseFunc(),
		events: []
	}


	componentDidMount(){
		let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?source=world&begin_date=${this.state.startDate}&end_date=${((Number(this.state.startDate)) + 1).toString()}&page=7&api-key=09afefee7ce44a7abc224efa804afde9`
		fetch(url)
		.then((res) => res.json())
		.then(data => this.setState({
			events: data.response.docs
		}))
	}



	handleSearch = (event,input) =>{
		let searchDate = input.value.split('-').join("")
		this.setState({
			startDate: searchDate
		})
		console.log(this.state.startDate)
	}

	render() {
		return (
			<div>
				<Search handleSearch={this.handleSearch}/>
				<HistoryList events={this.state.events}/>
			</div>
			)
	}
}

export default HistoryContainer
