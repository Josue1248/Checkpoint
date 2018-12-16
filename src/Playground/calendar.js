import React from 'react';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';

import '../../css/calendarStyle.css';

class MainCalendar extends React.Component {
    constructor(){
        super();
        this.state = {
            date: moment()
        }
      }
      
  render() {
    return (
        <div>
          <Calendar
            onChangeMonth={(date) => this.setState({ date })}
            date={this.state.date}
            onPickDate={(date) => console.log(String(date.format('L')))}
          />
        </div>
    );
  }
}
 
export default MainCalendar;