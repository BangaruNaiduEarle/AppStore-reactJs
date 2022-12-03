// Write your code here

import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="listAppItem">
      <img src={imageUrl} alt={appName} className="AppImage" />
      <p className="AppNameStyle">{appName}</p>
    </li>
  )
}

export default AppItem
