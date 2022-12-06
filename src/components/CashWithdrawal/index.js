import {Component} from 'react'
import DenominationItem from '../DenominationItem/index.css'
import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="card">
          <div className="user-details">
            <div className="name-container">
              <p className="name-icon">S</p>
            </div>

            <h1 className="username">Sarah Williams</h1>
          </div>
          <div className="balance-details">
            <h1 className="your-balance">Your Balance</h1>
            <div>
              <h1 className="balance">2000</h1>
              <p className="text">In Rupees</p>
            </div>
          </div>
          <div className="withdrawal-section">
            <h1 className="withdrawal">Withdraw</h1>
            <p className="choose-amt">Choose sum (IN RUPEES) </p>
            <ul className="withdrawal-amt">
              {denominationsList.map(eachValue => (
                <DenominationItem amount={eachValue} key={eachValue.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
