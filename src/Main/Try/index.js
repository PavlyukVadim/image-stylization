import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'

import './index.css'

const url = 'http://127.0.0.1:8000/'

class Try extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      activeStyle: props.activeStyle,
    }
    this.onDrop = this.onDrop.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeStyle !== this.props.activeStyle) {
      this.setState({
        activeStyle: nextProps.activeStyle,
      })
    }
  }

  onDrop(picture) {
    const {
      startLoading,
      finishLoading,
    } = this.props

    startLoading()

    const { activeStyle } = this.state
    this.setState({
      pictures: this.state.pictures.concat(picture),
    })

    const header = new Headers({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Credentials': 'true',
    })

    const file = picture[0]
    const formData = new FormData()
    formData.append('original_file', file, file.name)
    formData.append('style', activeStyle);

    const sentData = {
      method: 'POST',
      mode: 'cors',
      header: header,
      body: formData || '',
    }

    fetch(url, sentData)
      .then((response) => {
        console.log('response', response)
        finishLoading()
      })
      .catch((err) => {
        console.log('err', err)
        finishLoading()
      })
  }

  render() {
    return (
      <div className="try">
        <div className="title">
          Try Deep Style Transfer
        </div>
        <ImageUploader
          ref={(input) => this.input = input}
          name="fileInput"
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
      </div>
    )
  }
}

export default Try
