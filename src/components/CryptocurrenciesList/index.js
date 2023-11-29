import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({currencyData: updatedData, isLoading: false})
  }

  getcurrencyDataDetails = () => {
    const {currencyData} = this.state
    return (
      <>
        <h1 className="title">Cryptocurrency Tracker</h1>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="cryptocurrency-logo"
          />
        </div>
        <div className="currency-list-box-container">
          <div className="list-container first-column-color">
            <div className="left-box-container">
              <div className="box">
                <p className="column-heading">Coin Type</p>
              </div>
            </div>
            <div className="right-box-container">
              <div className="box">
                <p className="column-heading">USD</p>
              </div>
              <div className="box">
                <p className="column-heading">EURO</p>
              </div>
            </div>
          </div>

          {currencyData.map(eachData => (
            <CryptocurrencyItem currencyDetails={eachData} key={eachData.id} />
          ))}
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getcurrencyDataDetails()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
