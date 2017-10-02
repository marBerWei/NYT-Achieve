import React from 'react'
import {Route, Link} from 'react-router-dom'

const HistoryItem = (props) => {

	console.log(props.id)

	let image = ""
	props.event.multimedia[0] ? image=`https://static01.nyt.com/${props.event.multimedia[0].url}` : image = "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"
	return (
		<div id="article" className="item">
			<div className="ui small image">
				<img src={image}/>
				</div>
				<div className="content">

					<a className="header"  href={props.event.web_url}>{props.event.headline.main}</a>

					<Link to={`/home/${props.id}`}>
					<a className="header">{props.event.headline.main}</a>
					</Link>

					<div className="meta">
						<span>Description</span>
					</div>
					<div className="description">
						<p>{props.event.snippet}</p>
					</div>
				</div>
				<div className="ui divider"></div>
			</div>
	)

}

export default HistoryItem

// https://static01.nyt.com/images/2016/11/02/arts/02SENDAK-ITEM/02SENDAK-ITEM-blog427.jpg
// the image address
