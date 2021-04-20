import React, { Component } from 'react'
import axios from 'axios'

const endpoint = 'http://localhost:8000/rexmat'

class Rexmat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFile: null,
      loaded: 0,
      nbH1: 0,
      nbH2: 0,
      nbH3: 0,
      nbH4: 0,
      systemeTT: 0,
      nbSET: 0,
      nbCBM: 0,
      nbATESS: 0,
      nbAfficheur: 0,
      nbBS: 0,
      nbCCTV: 0,
      nbClim: 0,
      nbComp: 0,
      nbCompPass: 0,
      nbDectIncendie: 0,
      nbEMCO: 0,
      nbEQS: 0,
      nbEclairage: 0,
      nbFrein: 0,
      nbLectBadge: 0,
      nbPorte: 0,
      nbPupitre: 0,
      nbSono: 0,
      nbTCMS: 0,
      nbTDB: 0,
      nbTraction: 0
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
        //console.log(res.data.data)
        this.setState({
          nbH1: res.data.data['Hiérarchie de la flotte'].H1,
          nbH2: res.data.data['Hiérarchie de la flotte'].H2,
          nbH3: res.data.data['Hiérarchie de la flotte'].H3,
          nbH4: res.data.data['Hiérarchie de la flotte'].H4,
          systemeTT: res.data.data['Nombre de système total'],
          nbSET: res.data.data['Type de signalement']['Nombre total de SET'],
          nbCBM: res.data.data['Type de signalement']['Nombre total de CBM'],
          nbATESS: res.data.data['Type de signalement'].SET.ATESS,
          nbAfficheur: res.data.data['Type de signalement'].SET.Afficheur,
          nbBS: res.data.data['Type de signalement'].SET.BS,
          nbCCTV: res.data.data['Type de signalement'].SET.CCTV,
          nbClim: res.data.data['Type de signalement'].SET.Climatisation,
          nbComp: res.data.data['Type de signalement'].SET.Compresseur,
          nbCompPass: res.data.data['Type de signalement'].SET['Comptage Passagers'],
          nbDectIncendie: res.data.data['Type de signalement'].SET['Detection Incendie'],
          nbEMCO: res.data.data['Type de signalement'].SET.EMCO,
          nbEQS: res.data.data['Type de signalement'].SET.EQS,
          nbEclairage: res.data.data['Type de signalement'].SET.Eclairage,
          nbFrein: res.data.data['Type de signalement'].SET.Frein,
          nbLectBadge: res.data.data['Type de signalement'].SET[''],
          nbPorte: res.data.data['Type de signalement'].SET.Porte,
          nbPupitre: res.data.data['Type de signalement'].SET.Pupitre,
          nbSono: res.data.data['Type de signalement'].SET.Sonorisation,
          nbTCMS: res.data.data['Type de signalement'].SET.TCMS,
          nbTDB: res.data.data['Type de signalement'].SET.TDB,
          nbTraction: res.data.data['Type de signalement'].SET.Traction
        })
      })
  }

  render() {
    return (
      <div>
          <h1>Rexmat file data</h1>
          <input type="file" name="" id="" onChange={this.handleselectedFile} />
          <button onClick={this.handleUpload}>Upload</button>
          <br/>
          <div> {Math.round(this.state.loaded, 2)} %</div>
          <br/>
          <table>
            <thead>
              <tr>
                <th>Nombre de système total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.systemeTT}</td>
              </tr>
            </tbody>
          </table>
          <br/>
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
                <td>{this.state.nbH1}</td>
                <td>{this.state.nbH2}</td>
                <td>{this.state.nbH3}</td>
                <td>{this.state.nbH4}</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <table>
            <thead>
              <tr>
              <th>Nombre total de SET</th>
              <th>Nombre total de CBM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.nbSET}</td>
                <td>{this.state.nbCBM}</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <ul>
            <li>ATESS: {this.state.nbATESS}</li>
            <li>Afficheur: {this.state.nbAfficheur}</li>
            <li>BS: {this.state.nbBS}</li>
            <li>CCTV: {this.state.nbCCTV}</li>
            <li>Climatisation: {this.state.nbClim}</li>
            <li>Compresseur: {this.state.nbComp}</li>
            <li>Comptage Passagers: {this.state.nbCompPass}</li>
            <li>Detection Incendie: {this.state.nbDectIncendie}</li>
            <li>EMCO: {this.state.nbEMCO}</li>
            <li>EQS: {this.state.nbEQS}</li>
            <li>Eclairage: {this.state.nbEclairage}</li>
            <li>Frein: {this.state.nbFrein}</li>
            <li>Lecteur Badge: {this.state.nbLectBadge}</li>
            <li>Porte: {this.state.nbPorte}</li>
            <li>Pupitre: {this.state.nbPupitre}</li>
            <li>Sonorisation: {this.state.nbSono}</li>
            <li>TCMS: {this.state.nbTCMS}</li>
            <li>Traction: {this.state.nbTraction}</li>
          </ul>
      </div>
    )
  }
}

export default Rexmat