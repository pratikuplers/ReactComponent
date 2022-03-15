import React, {useState} from 'react'; 
import './NewExpenseForm.css';
const NewExpenseForm = (props) => {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmout] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState ({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const inputChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput = (prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // }
    };
    const amountChangeHandler = (event) => {
        setEnteredAmout(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmout('');
        setEnteredDate('');
        console.log(expenseData);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expernse__controls'>
                <div className='new-expernse__control'>
                    <label>Title</label>
                    <input type="text" placeholder='Title' value={enteredTitle} onChange={inputChangeHandler} />
                </div>
                <div className='new-expernse__control'>
                    <label>Amount</label>
                    <input type="number" placeholder='Amount' value={enteredAmount} onChange={amountChangeHandler} min="1" step='1' />
                </div>
                <div className='new-expernse__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className='new-expernse__actions'>
                    <button type='submit' >Add New Expense</button>
                </div>
            </div>

        </form>

    );
}
export default NewExpenseForm;