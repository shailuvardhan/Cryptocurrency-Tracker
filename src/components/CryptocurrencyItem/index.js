import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyDetails
  return (
    <li className="list-container">
      <div className="left-box-container">
        <div className="box group-logo-name">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p className="column-heading">{currencyName}</p>
        </div>
      </div>
      <div className="right-box-container">
        <div className="box">
          <p className="column-heading">{usdValue}</p>
        </div>
        <div className="box">
          <p className="column-heading">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
