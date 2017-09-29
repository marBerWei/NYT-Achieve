import React from 'react'
import HistoryList from './HistoryList'
import {Route} from 'react-router-dom'
// import HistoryData from '../HistoryData.js'
import Search from './Search'
import ParseFunc from '../ParseFunc'
import Filter from './Filter'

class HistoryContainer extends React.Component {

	state = {
		startDate: ParseFunc(),
		events: [],
		filteredEvents: []
	}

	componentDidMount(){
		console.log("start date while mounting:", this.state.startDate)
		this.getDates()
		console.log("start date after function for today:", this.state.startDate)
	}

	getDates = () => {
		let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${this.state.startDate}&end_date=${((Number(this.state.startDate)) + 1).toString()}&api-key=09afefee7ce44a7abc224efa804afde9`
		fetch(url)
		.then((res) => res.json())
		.then(data => this.setState({
			events: data.response.docs
		}))
	}

	handleFilter = (event) =>{
		let currentSearchTerm = event.target.value.toLowerCase()
		let filtered = this.state.events.filter((e) => { return e.snippet.toLowerCase().includes(currentSearchTerm)})
		this.setState({
			filteredEvents: filtered
		})
		return filtered
	}



	handleSearch = (event,input) =>{
		let searchDate = input.value.split('-').join("")
		this.setState({
			startDate: searchDate
		}, () => this.getDates())
	}

	render() {
		return (
			<div>
				<Search handleSearch={this.handleSearch}/>
				<Filter handleFilter={this.handleFilter}/>
				<HistoryList events={this.state.filteredEvents.length > 0 ? this.state.filteredEvents : this.state.events}/>
			</div>
			)
	}
}

export default HistoryContainer
