import React, { Component } from 'react'
import Check from '../../assets/icon_check.svg'

import './index.css'

class Style extends Component {
  render() {
    const {
      name,
      img,
      isActive,
      onClick,
    } = this.props

    const imgStyle = {
      backgroundImage: `url(${img})`,
    }

    let styleClass = 'style'
    let styleStyle = {}

    if (isActive) {
      styleClass += ' selected'
      styleStyle.backgroundImage = `url(${Check})`
      imgStyle.opacity = '.5'
    }

    return (
      <div
        className={styleClass}
        onClick={onClick}
        style={styleStyle}
      >
        <div
          className="style-img"
          style={imgStyle}
        />
        <div className="style-title">
          {name}
        </div>
      </div>
    )
  }
}

export default Style