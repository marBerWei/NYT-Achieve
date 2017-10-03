import React from 'react'
import WebModal from './WebModal'

const HistoryItem = (props) => {

  const popUp = (e) => {
    e.preventDefault()
    const web = document.getElementById('website')
    web.className = "ui active modal"
  }

  let image = ""
  props.event.multimedia[0]
    ? image = `https://static01.nyt.com/${props.event.multimedia[0].url}`
    : image = "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"

  return (
    <div id="article" className="item">
      <div className="ui small image">
        <img src={image} alt=""/>
      </div>
      <div className="content">
        <a className="header" onClick={popUp}>{props.event.headline.main}</a>
          <button className="ui icon button" id= {props.id}>
            <i className="heart icon"></i>
          </button>
        <div className="description">
          <p>{props.event.snippet}</p>
        </div>
      </div>
      <div className="ui divider"></div>
      <WebModal url={props.event.web_url}/>
    </div>
  )

}

export default HistoryItem

// https://static01.nyt.com/images/2016/11/02/arts/02SENDAK-ITEM/02SENDAK-ITEM-blog427.jpg
// the image address
