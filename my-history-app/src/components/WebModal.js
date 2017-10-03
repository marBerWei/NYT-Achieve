import React from 'react'

class WebModal extends React.Component {

  close = (e) => {
    e.preventDefault()
    const parent = document.getElementById('website')
    parent.className = "ui modal"
  }

  render(){
    return(
    <div className="ui modal" id="website">
    <div className="content">
    
    </div>
    <div className="actions">
      <div className="ui black deny button" onClick={this.close}>
        Close
      </div>
    </div>
    </div>
    )
  }

}



export default WebModal
