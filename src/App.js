import logo from './images/logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';

const App = () => {
  const expense = [
    {
      id: '1',
      title: 'Medical',
      amount: 660,
      date: new Date(2022, 1, 1)
    },
    {
      id: '2',
      title: 'IT',
      amount: 780,
      date: new Date(2022, 3, 1)
    },
    {
      id: '3',
      title: 'Car',
      amount: 980,
      date: new Date(2022, 1, 4)
    }
  ];
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-header">
        <ExpenseItem 
            title={expense[0].title} 
            amount={expense[0].amount} 
            date={expense[0].date}>
        </ExpenseItem>
        <ExpenseItem 
            title={expense[1].title} 
            amount={expense[1].amount} 
            date={expense[1].date}>
        </ExpenseItem>
        <ExpenseItem 
            title={expense[2].title} 
            amount={expense[2].amount} 
            date={expense[2].date}>
        </ExpenseItem>
      </div>
    </div>
  );
}
export default App;