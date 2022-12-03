// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, onClickTab, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  const highLightBtn = isActive ? 'highlightingBtn' : ''
  return (
    <li className="tabListItem">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-button ${highLightBtn}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
