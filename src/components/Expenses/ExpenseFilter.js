import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
    const onChangeDropdownHandler = (event) => {
        props.onChangeFilter(event.target.value); 
    }
    return (
        <div className="expense__filter">
            <div className="expense__filter_control">
                <label>Filter By Year:</label>
                <select value={props.selected} onChange={onChangeDropdownHandler}>
                    <option valur="2022">2022</option>
                    <option valur="2021">2021</option>
                    <option valur="2020">2020</option>
                    <option valur="2019">2019</option>
                    <option valur="2018">2018</option>
                </select>
            </div>    
        </div>
    );
}
export default ExpenseFilter;