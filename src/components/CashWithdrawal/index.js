import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

denominationList = [
  {id: 1, denomination: 50},
  {id: 2, denomination: 100},
  {id: 3, denomination: 200},
  {id: 4, denomination: 500},
]

class CashWithdrawal extends Component {
  state = {amount: 2000}

  decreaseByValue = () => {
      denominationList.map(each => 
        if (each.id === id) {
          this.setState(prevState => ({
            amount: prevState.amount - each.denomination,
          }))
        })
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
          <ul>
            {denominationList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  decreaseByValue={this.decreaseByValue}
                />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
