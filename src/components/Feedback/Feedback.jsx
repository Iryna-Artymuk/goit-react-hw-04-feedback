import { RiEmotionHappyLine, RiEmotionSadLine } from 'react-icons/ri';
import { BsEmojiNeutral } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Rating.module.css';
export default function Feedback({ addGood, addBad, addNeutral }) {
  const [rating, setRating] = useState('');

  const handelChange = event => setRating(event.currentTarget.value);

  return (
    <div className={css.ratingContainer}>
      <div className={css.rating}>
        <form
          className={css.ratingForm}
          onSubmit={event => {
            event.preventDefault();

            const inputs = Array.from(event.target.elements);

            const chekedInput = inputs.find(input => input.checked);

            switch (chekedInput.value) {
              case 'good':
                return addGood();

              case 'bad':
                return addBad();
              case 'neutral':
                return addNeutral();
              default:
                return;
            }
            // setRating('');
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
                onChange={handelChange}
                checked={rating === 'good'}
              />
              <RiEmotionHappyLine className={css.ratingFormSvg} />
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                className="neutral"
                id="neutral"
                value="neutral"
                onChange={handelChange}
                checked={rating === 'neutral'}
              />
              <BsEmojiNeutral className={css.ratingFormSvg} />
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                className="sad"
                id="bad"
                value="bad"
                onChange={handelChange}
                checked={rating === 'bad'}
              />
              <RiEmotionSadLine className={css.ratingFormSvg} />
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

Feedback.propTypes = {
  addGood: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
};
