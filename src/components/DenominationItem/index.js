import CashWithdrawal from '../CashWithdrawal'
import './index.css'

const DenominationItem = props => {
  const {
    decreaseFifty,
    decreaseHundred,
    decreaseTwoHundred,
    decreaseFiveHundred,
  } = props

  const fifty = () => {
    decreaseFifty()
  }

  const hundred = () => {
    decreaseHundred()
  }

  const twoHundred = () => {
    decreaseTwoHundred()
  }

  const fiveHundred = () => {
    decreaseFiveHundred()
  }

  return (
    <div className="buttons-containerr">
      <div className="button-row">
        <button type="button" onClick={fifty}>
          50
        </button>
        <button type="button" onClick={hundred}>
          100
        </button>
      </div>
      <div className="button-row">
        <button type="button" onClick={twoHundred}>
          200
        </button>
        <button type="button" onClick={fiveHundred}>
          500
        </button>
      </div>
    </div>
  )
}

export default DenominationItem
