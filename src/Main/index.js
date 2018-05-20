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

const url = 'http://127.0.0.1:8000/'

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
    this.load = this._load.bind(this)
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
    }, () => {
      this.load()
    })
  }

  _load(newFile) {
    const { activeStyle } = this.state

    this.startLoading()
    let file = newFile

    if (newFile) {
      this.setState({
        file: newFile,
      })
    } else {
      file = this.state.file
    }

    const header = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Credentials': 'true',
    })

    const formData = new FormData()
    formData.append('original_file', file, file.name)
    formData.append('style', activeStyle)

    const sentData = {
      method: 'POST',
      mode: 'cors',
      header: header,
      body: formData || '',
    }

    fetch(url, sentData)
      .then((response) => {
        this.finishLoading()
        return response.json()
      })
      .then((json) => {
        console.log('json', json)
      })
      .catch((err) => {
        console.log('err', err)
        this.finishLoading()
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
            load={this.load}
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
