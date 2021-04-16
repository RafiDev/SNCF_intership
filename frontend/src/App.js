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
      data: []
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
        console.log(res.data.data['Hiérarchie de la flotte'])
        this.setState({
          data: res.data.data['Hiérarchie de la flotte'],
        })
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
          <table>
            <thead>
              <tr>
              <th>H1</th>
              <th>H2</th>
              <th>H3</th>
              <th>H4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.data.H1}</td>
                <td>{this.state.data.H2}</td>
                <td>{this.state.data.H3}</td>
                <td>{this.state.data.H4}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App
