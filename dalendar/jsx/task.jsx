class YearSelect extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentYear: new Date().getFullYear()
        }
        this.yearList=Array(20)
        this.setYearList()
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }
    setYearList(){
        for (let j=0;j<20;j++) {
            this.yearList[j] = this.state.currentYear - 10 + j
        }
        console.log(this.yearList)
    }
    handleSelectChange(event){
        this.setState({currentYear:event.target.value})
        this.setYearList()
    }
    render(){
        let optionItems = this.yearList.map((v,i)=>{
            return <OptionItem value={v} key={i}/>     
        })
        return <form>
            <select value={this.state.currentYear} onChange={this.handleSelectChange}>
                {optionItems}
            </select>
        </form>
    }
}
const OptionItem = function(props){
    return <option {...props}>{props.value}</option>
}
class MonthSelect extends React.Component{
    render(){
        let monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return React.createElement('div',
            {className:'monthBox'},
            monthName.map((v,i)=>{
                return <Tab text={v} key={i} className='month'/>
            })
        )
    }
}
class WeekTab extends React.Component{
    render(){
        let weekName = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
        return React.createElement('div',
            {className:'weekBox'},
            weekName.map((v,i)=>{
                return <Tab text={v} key={i} className='week'/>
            })
        )
    }
}
const Tab = function(props){
    console.log(props)
    return <span {...props}>{props.text}</span>
}
class DayItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return  <div>
            <Tab text={this.props.dateMD} className='dateMD'/>
            <Tab text={this.props.Weekday} className='Weekday'/>
            <Tab text={this.props.workSate} className='workSate'/>
            <ToDoList/>
        </div>
    }
}
class ToDoList extends React.Component{
    render(){
        return <ul>
            <li>ToDo1</li>
            <li>ToDo2</li>
        </ul>
    }
}
class DayBox extends React.Component{
    render(){
        return <div></div>
    }
}
class Dalendar extends React.Component{
    render(){
        return <div>
            <YearSelect/>
            <MonthSelect/>
            <WeekTab/>
            <DayBox/>
        </div>
    }
}
ReactDOM.render(
    <Dalendar/>,
    document.getElementById('content')
)
{/* <DayItem dateMD="09-18" workSate="今天" Weekday="工作日"/> */}