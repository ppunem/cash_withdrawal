import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  decreaseByValue = id => {
    const {amount} = this.state
    const {denominationsList} = this.props

    denominationsList.map(each => {
      if (id === each.id) {
        this.setState(prevState => ({
          amount: prevState.amount - each.value,
        }))
      }
      return amount
    })
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="card">
          <div className="top-section">
            <div className="letter-container">
              <p className="letter">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="change">
            <p className="blnc-txt">Your Balance</p>
            <p className="blnc">{amount}</p>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="draw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                decreaseByValue={this.decreaseByValue}
                item={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
