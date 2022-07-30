// Write your code here.
// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="container">
      <div className="card">
        <h1 className="mainHeading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem FaqDetails={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
