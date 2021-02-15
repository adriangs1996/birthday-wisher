
import { MDBContainer } from 'mdbreact'
import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
  text-align: center;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 4rem;
  @media screen and (max-width: 900px) {
    white-space: default;
    font-size: 2rem;
  }
`

const Container = styled.div`
  text-align: center;
  margin: 0;
  top: 50%;
  left: 50%;
`

const Wisher = styled.div`
  display: block;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 2rem;
  margin-top: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    white-space: default;
  }
`

class BirthdayMessage extends React.Component {
  render() {
    return (
      <MDBContainer>
        <Message style={{ color: this.props.birthdayData.textColor }}>
          Feliz Cumple, {this.props.birthdayData.wishee}!
        </Message>
        {/* <Wisher style={{ color: this.props.birthdayData.textColor }}>
          -&nbsp;{this.props.birthdayData.wisher}
        </Wisher> */}
      </MDBContainer>
    )
  }
}

export default BirthdayMessage