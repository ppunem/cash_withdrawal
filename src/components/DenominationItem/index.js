import './index.css'

const DenominationItem = props => {
  const {denominationsList, decreaseByValue} = props
  const {id, value} = denominationsList

  const decreaseValue = () => {
    decreaseByValue(id)
  }

  return (
    <li className="buttons-container">
      <div className="button-row">
        <button type="button" onClick={decreaseValue}>
          50
        </button>
        <button type="button" onClick={decreaseValue}>
          100
        </button>
      </div>
      <div className="button-row">
        <button type="button" onClick={decreaseValue}>
          200
        </button>
        <button type="button" onClick={decreaseValue}>
          500
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
