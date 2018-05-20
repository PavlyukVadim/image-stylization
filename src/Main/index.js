import React, { Component } from 'react'
import Background from './assets/seattle.jpg'
import Try from './Try'
import Output from './Output'

import Spinner from './../Spinner'

import LaMuse from './assets/la_muse.jpg'
import RainPrincess from './assets/rain_princess.jpg'
import TheScream from './assets/the_scream.jpg'
import Udnie from './assets/udnie.jpg'
import Wave from './assets/wave.jpg'

import './index.css'

const stylesConfig = [
  {
    name: 'La Muse',
    img: LaMuse,
  },
  {
    name: 'Rain Princess',
    img: RainPrincess,
  },
  {
    name: 'The Scream',
    img: TheScream,
  },
  {
    name: 'Udnie',
    img: Udnie,
  },
  {
    name: 'Wave',
    img: Wave,
  },
]

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      activeStyle: stylesConfig[0].name,
    }

    this.startLoading = this._startLoading.bind(this)
    this.finishLoading = this._finishLoading.bind(this)
    this.changeStyle = this._changeStyle.bind(this)
  }

  _startLoading() {
    const { loading } = this.state
    if (!loading) {
      this.setState({
        loading: true,
      })
    }
  }

  _finishLoading() {
    const { loading } = this.state
    if (loading) {
      this.setState({
        loading: false,
      })
    }
  }

  _changeStyle(style) {
    this.setState({
      activeStyle: style,
      loading: true,
    })
  }

  render() {
    const {
      loading,
      activeStyle,
    } = this.state

    const spinner = loading
      ? <Spinner />
      : null

    const style = {
      backgroundImage: `url(${Background})`,
    }

    return (
      <div>
        {spinner}
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
          <Try
            startLoading={this.startLoading}
            finishLoading={this.finishLoading}
          />
        </div>
        <Output
          stylesConfig={stylesConfig}
          activeStyle={activeStyle}
          changeStyle={this.changeStyle}
        />
      </div>
    )
  }
}

export default Main
