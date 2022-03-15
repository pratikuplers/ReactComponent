import './ChartBar.css';
const ChartBar = (props) => {
    let barHeights = '0%';
    if(props.maxValue > 0){
        barHeights = Math.round((props.value / props.maxValue) * 100) + '%';
       
    }
    
    return (
        <div className='chart__bar'>
            <div className='chart_bar__inner'>
                <div className='chart_bar__fill' style={{height : barHeights}}></div>
                <div className='chart_bar__label'>{props.label}</div>
            </div>
        </div>
    );
}
export default ChartBar;