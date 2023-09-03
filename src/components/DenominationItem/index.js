import './index.css'

const DenominationItem = props => {
  const {decreaseByValue} = props

  const fifty = () => {
    decreaseByValue()
  }

  const hundred = () => {
    decreaseByValue()
  }

  const twoHundred = () => {
    decreaseByValue()
  }

  const fiveHundred = () => {
    decreaseByValue()
  }

  return (
    <li className="buttons-container">
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
    </li>
  )
}

export default DenominationItem
