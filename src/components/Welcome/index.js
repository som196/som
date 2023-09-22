import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonClick = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
    } else {
      this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
    }
  }

  buttonContent3 = () => {
    const {isSubscribed} = this.state
    const buttonContent = isSubscribed ? 'subscribed' : 'subscribe'
    return buttonContent
  }

  render() {
    const buttonContent = this.buttonContent1()

    return (
      <div className="container">
        <div className="container2">
          <h1>Welcome</h1>
          <p>Happy Learning!</p>
          <div className="button1">
            <button type="button" onClick={this.buttonClick}>
              {buttonContent}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
