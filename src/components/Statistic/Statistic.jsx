import css from './Statistic.module.css';
import PropTypes from 'prop-types';
export default function Statistic({ statisticData }) {
  const countTotalFeedback = () => {
    const TotalFeedbackCount = Object.values(
      statisticData
    ).reduce((total, value) => {
      return (total += value);
    }, 0);

    return TotalFeedbackCount;
  };
  const countPositiveFeedbackPercentage = totalvalue => {
    const positiveFeedback = statisticData.good;
    const positiveStatictic = Math.floor(
      (positiveFeedback * 100) / totalvalue
    );

    return positiveStatictic;
  };

  const totalFeedbacks = countTotalFeedback();
  const totalPositive =
    countPositiveFeedbackPercentage(totalFeedbacks);
  return (
    <>
      <div className={css.statisticsBox}>
        <div className={css.statisticsInfo}>
          Good:
          <span>{statisticData.good}</span>
        </div>
        <div className={css.statisticsInfo}>
          Neutral:
          <span>{statisticData.neutral}</span>
        </div>
        <div className={css.statisticsInfo}>
          Bad:
          <span>{statisticData.bad}</span>
        </div>
      </div>
      <div className={css.statisticsBox}>
        <span className={css.statisticsInfo}>
          Total feedback: {totalFeedbacks}
        </span>
        <span className={css.statisticsInfo}>
          Positive feedback: {totalPositive}%
        </span>
      </div>
    </>
  );
}
Statistic.propTypes = {
  statisticData: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
};
