import { useReducer } from 'react';
import Feedback from '../components/Feedback/Feedback';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import Notification from './Notofication/Notification';
const iniyState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const AddPointReducer = (prevState, actions) => {
  // console.log(prevState);
  // console.log(actions);
  switch (actions.type) {
    case 'good':
      return { ...prevState, good: prevState.good + actions.payload };
    case 'bad':
      return { ...prevState, bad: prevState.bad + actions.payload };
    case 'neutral':
      return { ...prevState, neutral: prevState.neutral + actions.payload };
    default:
      return prevState;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(AddPointReducer, iniyState);

  const feedbackIsGiven = Object.values(state).some(item => item > 0);

  return (
    <>
      <Section title=" Leave your feedback">
        <Feedback
          addGood={() => dispatch({ type: 'good', payload: 1 })}
          addBad={() => dispatch({ type: 'bad', payload: 1 })}
          addNeutral={() => dispatch({ type: 'neutral', payload: 1 })}
        />
      </Section>

      <Section title="Statistics">
        {!feedbackIsGiven ? (
          <Notification text="There is no feedback yet" />
        ) : (
          <Statistic statisticData={state} />
        )}
      </Section>
    </>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addPoint = value => {
//     const obj = {};

//     this.setState(prevState => {
//       for (const key of Object.keys(prevState)) {
//         obj[key] =
//           key === value
//             ? prevState[key] + 1
//             : prevState[key];
//       }
//       return obj;
//     });
//   };

//   feedbackIsGiven = () =>
//     Object.values(this.state).some(element => element > 0);

//   render() {
//     return (
//       <>
//         <Section title=" Leave your feedback">
//           <Feedback
//             addPoint={this.addPoint}
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//           />
//         </Section>

//         {/* <Section title="Statistics">
//           {!this.feedbackIsGiven() && (
//             <Notification text="There is no feedback yet" />
//           )}

//           {this.feedbackIsGiven() && (
//             <Statistic statisticData={this.state} />
//           )}
//         </Section> */}

//         <Section title="Statistics">
//           {!this.feedbackIsGiven() ? (
//             <Notification text="There is no feedback yet" />
//           ) : (
//             <Statistic statisticData={this.state} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
// export default App;
