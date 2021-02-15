import React from 'react'
import BirthdayMessage from './components/BirthdayMessage'
import BirthdayData from './data/BirthdayData'
import BootstrapCarousel from './components/BootstrapCarousel'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Music from './components/Music'
class App extends React.Component {
  componentWillMount() {
    document.body.style.background = BirthdayData.color
    document.querySelector('title').innerText = `Happy Birthday, ${BirthdayData.wishee}!`
    document.querySelector('.favicon').href = `//dummyimage.com/64x64/${BirthdayData.color.substring(1)}/${BirthdayData.color.substring(1)}`
    document.querySelector('.theme-color').content = BirthdayData.color
  }
  
  render() {
    return (
        <MDBContainer>

        <MDBCol lg="12">
          <MDBRow>
            <BirthdayMessage birthdayData={ BirthdayData } />
          </MDBRow>
          <MDBRow>
              <BootstrapCarousel></BootstrapCarousel>
          </MDBRow>
        </MDBCol>
        <MDBCol lg="12">
          <Music/>
        </MDBCol>
        </MDBContainer>
    )
  }
}

export default App