import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isShow: false}

  onClickShowing = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  render() {
    const {isShow} = this.state
    const {FaqDetails} = this.props
    const {questionText, answerText} = FaqDetails
    const buttonSelect = isShow ? (
      <button
        className="closeAnswer"
        type="button"
        onClick={this.onClickShowing}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
          alt="minus"
        />
      </button>
    ) : (
      <button
        className="openAnswer"
        type="button"
        onClick={this.onClickShowing}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
          alt="plus"
        />
      </button>
    )

    return (
      <li className="list">
        <div className="listUpper">
          <h1>{questionText}</h1>
          {buttonSelect}
        </div>
        {isShow && (
          <div>
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
