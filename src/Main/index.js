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
    value: 'la_muse',
  },
  {
    name: 'Rain Princess',
    img: RainPrincess,
    value: 'rain_princess',
  },
  {
    name: 'The Scream',
    img: TheScream,
    value: 'the_scream',
  },
  {
    name: 'Udnie',
    img: Udnie,
    value: 'udnie',
  },
  {
    name: 'Wave',
    img: Wave,
    value: 'wave',
  },
]

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      activeStyle: stylesConfig[0].value,
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
    this.startLoading()

    this.setState({
      activeStyle: style,
    })

    setTimeout(() => {
      this.finishLoading()
    }, 2000)
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
            activeStyle={activeStyle}
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
