import PropTypes from 'prop-types';
export default function Notification({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
Notification.propTypes = {
  text: PropTypes.string,
};
