import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  decreaseByFifty = () => {
    const {amount} = this.state
    this.setState(prevState => ({
      amount: prevState.amount - 50,
    }))
  }

  decreaseByHundred = () => {
    const {amount} = this.state
    this.setState(prevState => ({
      amount: prevState.amount - 100,
    }))
  }

  decreaseByTwoHundred = () => {
    const {amount} = this.state
    this.setState(prevState => ({
      amount: prevState.amount - 200,
    }))
  }

  decreaseByFiveHundred = () => {
    const {amount} = this.state
    this.setState(prevState => ({
      amount: prevState.amount - 500,
    }))
  }

  render() {
    const {amount} = this.state

    return (
      <div className="main-container">
        <div className="card">
          <div className="top-section">
            <div className="letter-container">
              <p className="letter">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="chage">
            <p className="blnc-txt">Your Balance</p>
            <p className="blnc">{amount}</p>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="draw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <DenominationItem
            decreaseFifty={this.decreaseByFifty}
            decreaseHundred={this.decreaseByHundred}
            decreaseTwoHundred={this.decreaseByTwoHundred}
            decreaseFiveHundred={this.decreaseByFiveHundred}
          />
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
