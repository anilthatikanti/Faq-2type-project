// Write your code here.
// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = props
    this.state = {FaqList: faqsList}
  }

  clickToShow = id => {
    this.setState(prevState => ({
      FaqList: prevState.FaqList.map(eachFaq => {
        if (eachFaq.id === id) {
          return {...eachFaq, isShow: !eachFaq.isShow}
        }
        return eachFaq
      }),
    }))
  }

  render() {
    const {FaqList} = this.state
    console.log(FaqList)

    return (
      <div className="container">
        <div className="card">
          <h1 className="mainHeading">FAQs</h1>
          <ul>
            {FaqList.map(eachFaq => (
              <FaqItem
                FaqDetails={eachFaq}
                key={eachFaq.id}
                clickToShow={this.clickToShow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
