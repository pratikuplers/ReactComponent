import logo from './images/logo.svg';
import './App.css';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import ExpenseChart from './components/Expenses/ExpenseChart';
const dummyData = [
  {
    id: '1',
    title: 'Medical',
    amount: 660,
    date: new Date(2021, 1, 1)
  },
  {
    id: '2',
    title: 'IT',
    amount: 780,
    date: new Date(2018, 3, 1)
  },
  {
    id: '3',
    title: 'Car',
    amount: 200,
    date: new Date(2019, 1, 4)
  },
  {
    id: '4',
    title: 'Photo',
    amount: 300,
    date: new Date(2019, 2, 5)
  },
  {
    id: '5',
    title: 'Books',
    amount: 50,
    date: new Date(2020, 1, 4)
  },
];
const App = (props) => {
  
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const [expense, setNewExpense] = useState(dummyData);
  const addExpenseHandler = expenses => {
    setNewExpense((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  }

  const filterExpense = expense.filter(
    expense => {
      return expense.date.getFullYear().toString() == filteredYear;
    }
  )
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expense={filterExpense}/>
      <div className="App-header">
      {filterExpense.length === 0 && <h4>No expenses found here.</h4>}
      {filterExpense.length > 0 &&
      filterExpense.map( (data) =>(
        <ExpenseItem 
            key={data.id}
            title={data.title} 
            amount={data.amount} 
            date={data.date}>
        </ExpenseItem>
        ))}
      </div>
    </div>
  );
}
export default App;