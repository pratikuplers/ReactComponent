import NewExpenseForm  from "./NewExpenseForm";
const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div>
            <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
}
export default NewExpense;