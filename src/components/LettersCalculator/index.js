import {Component} from 'react'

import './index.css'

class LettersCalculator12 extends Component {
  state = {word: ''}

  getWord = event => {
    this.setState({word: event.target.value})
    // console.log(('word': event.target.value))
  }

  //   getCount = () => {
  //     const {word} = this.state
  //     if (word !== '') {
  //       this.setState({count: word.length})
  //     }
  //   }

  render() {
    const {word} = this.state
    console.log(word)

    return (
      <div className="letters-container">
        <div className="letters-card">
          <h1>Calculate the Letters you Enter</h1>
          <label htmlFor="letter_count">Enter the phrase</label>
          <br />
          <input
            onChange={this.getWord}
            placeholder="Enter the phrase"
            id="letter_count"
            type="text"
          />
          <br />
          <p className="word-counter">No.of letters: {word.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator12
