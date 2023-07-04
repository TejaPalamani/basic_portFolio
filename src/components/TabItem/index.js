import './index.css'

const TabItem = props => {
  const {tabDetails, stateChangedFunction} = props
  const {displayText, tabId} = tabDetails
  const clickedFunction = () => {
    stateChangedFunction(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={clickedFunction}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
