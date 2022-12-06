import './index.css'

const DenominationItem = props => {
  const {amount} = props
  const {id, value} = amount
  return (
    <button className="button" type="button">
      Hello
    </button>
  )
}

export default DenominationItem
