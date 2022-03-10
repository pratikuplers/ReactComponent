import './ExpenseDate.css';
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();
    return (
            <div className="expensedate">
                <div className="expensedate__month">{month}</div>
                <div className="expensedate__day">{day}</div>
                <div className="expensedate__year">{year}</div>
            </div>
    );
}
export default ExpenseDate;