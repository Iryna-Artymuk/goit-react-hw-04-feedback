import {
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';
import { BsEmojiNeutral } from 'react-icons/bs';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Rating.module.css';
class Feedback extends Component {
  state = {
    rating: '',
  };

  handelChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div className={css.ratingContainer}>
        <div className={css.rating}>
          <form
            className={css.ratingForm}
            onSubmit={event => {
              event.preventDefault();
              this.props.addPoint(this.state.rating);
              this.setState({
                rating: '',
              });
            }}
          >
            <div className={css.inputBox}>
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="superHappy"
                  id="super-happy"
                  value="good"
                  onChange={this.handelChange}
                  checked={this.state.rating === 'good'}
                />
                <RiEmotionHappyLine
                  className={css.ratingFormSvg}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="neutral"
                  id="neutral"
                  value="neutral"
                  onChange={this.handelChange}
                  checked={this.state.rating === 'neutral'}
                />
                <BsEmojiNeutral
                  className={css.ratingFormSvg}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="rating"
                  className="sad"
                  id="bad"
                  value="bad"
                  onChange={this.handelChange}
                  checked={this.state.rating === 'bad'}
                />
                <RiEmotionSadLine
                  className={css.ratingFormSvg}
                />
              </label>
            </div>

            <button className={css.button} type="submit">
              {' '}
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  addPoint: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
export default Feedback;
