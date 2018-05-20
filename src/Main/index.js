import React, { Component } from 'react'
import Background from './assets/seattle.jpg'
import Try from './Try'

import './index.css'

class Main extends Component {
  render() {

    const style = {
      backgroundImage: `url(${Background})`,
    }

    return (
      <div
        className="main"
        style={style}
      >
        <div className="info">
          <div className="title">
            Deep Style
          </div>
          <div className="desc">
            Using deep learning for artistic style transfer
          </div>
        </div>
        <Try />
      </div>
    )
  }
}

export default Main
