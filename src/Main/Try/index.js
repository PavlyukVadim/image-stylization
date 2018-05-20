import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'

import './index.css'

class Try extends Component {
  constructor(props) {
    super(props)
    this.state = { pictures: [] }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop(picture) {
    const {
      startLoading,
      finishLoading,
    } = this.props

    this.setState({
      pictures: this.state.pictures.concat(picture),
    })

    const file = picture[0]
    const formData = new FormData()
    formData.append('photos[]', file, file.name)

    // Set up the request.
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'handler.php', true)

    // Set up a handler for when the request finishes.
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert('Upload')
        finishLoading()
      } else {
        alert('An error occurred!')
        console.log('formData', formData)
        finishLoading()
      }
    }

    startLoading()

    setTimeout(() => {
      xhr.send(formData)
    }, 5000)
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
