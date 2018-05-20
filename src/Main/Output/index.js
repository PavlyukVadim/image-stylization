import React, { Component } from 'react'
import Style from './Style'

import './index.css'

class Output extends Component {
  render() {
    const {
      stylesConfig,
      activeStyle,
      changeStyle,
    } = this.props

    const styles = stylesConfig.map((style) => {
      return (
        <Style
          key={style.name}
          {...style}
          onClick={() => changeStyle(style.name)}
          isActive={style.name === activeStyle}
        />
      )
    })

    return (
      <div>
        Output
        <div className="styles">
          {styles}
        </div>
      </div>
    )
  }
}

export default Output
