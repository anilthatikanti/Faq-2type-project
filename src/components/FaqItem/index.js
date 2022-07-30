import './index.css'

const FaqItem = props => {
  const {FaqDetails, clickToShow} = props
  const {id, questionText, answerText, isShow} = FaqDetails

  const onClickShowing = () => {
    clickToShow(id)
  }

  const buttonSelect = isShow ? (
    <button className="closeAnswer" type="button" onClick={onClickShowing}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
        alt="minus"
      />
    </button>
  ) : (
    <button className="openAnswer" type="button" onClick={onClickShowing}>
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
export default FaqItem
