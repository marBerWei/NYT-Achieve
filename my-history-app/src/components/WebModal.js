import React from 'react'

const WebModal = (props) => {

  const closeModal = (e) => {
    e.preventDefault()
    const parent = document.getElementById('website')
    parent.className = "ui modal"
  }

  return (
    <div className="ui modal" id="website">
      <div className="actions">
        <div className="ui black deny button" onClick={closeModal}>
          Close
        </div>
        <div className="content">
          <object data={props.url} width="100%" height="400">
            Nope
          </object>
        </div>
      </div>
    </div>
  )

}

export default WebModal
