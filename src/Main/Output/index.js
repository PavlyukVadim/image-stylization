import React, { Component } from 'react'
import Style from './Style'

import './index.css'

class Output extends Component {
  render() {
    const {
      stylesConfig,
      activeStyle,
      changeStyle,
      responseUrl,
      isHide,
    } = this.props

    console.log('isHide', isHide)

    const outputStyle = {}
    if (isHide) {
      outputStyle.display = 'none'
    }

    const styles = stylesConfig.map((style) => {
      return (
        <Style
          key={style.name}
          {...style}
          onClick={() => changeStyle(style.value)}
          isActive={style.value === activeStyle}
        />
      )
    })

    return (
      <div style={outputStyle}>
        <img src={responseUrl} alt="" />
        <div className="styles">
          {styles}
        </div>
      </div>
    )
  }
}

export default Output
