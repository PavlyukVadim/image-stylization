import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'

import './index.css'

class Try extends Component {
  constructor(props) {
    super(props)
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(picture) {
    const { load } = this.props
    const file = picture[0]
    load(file)
  }

  render() {
    return (
      <div className="try">
        <div className="title">
          Try Deep Style Transfer
        </div>
        <ImageUploader
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
