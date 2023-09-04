import './index.css'

const DenominationItem = props => {
  const {item, decreaseByValue} = props
  const {id, value} = item

  const decreaseValue = () => {
    decreaseByValue(id)
  }

  return (
    <li className="buttons-container">
      <div className="button-row">
        <button type="button" onClick={decreaseValue}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
