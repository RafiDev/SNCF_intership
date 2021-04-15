import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

const endpoint = 'http://localhost:8000/upload'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
      loaded: 0,
    }
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    axios
      .post(endpoint, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })
  }

  handleDisplay = () => {
    axios.get(endpoint).then(res => {
      console.log(res.data);
    })
  }

  render() {
    return (
      <div className="App">
        <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <div> {Math.round(this.state.loaded, 2)} %</div>
        <hr/>
        <div>
          <h2>Rexmat file data</h2>
          <button onClick={this.handleDisplay}>Display data</button>
        </div>
      </div>
    )
  }
}

export default App
