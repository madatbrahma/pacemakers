import React from 'react';

import CalendarPicker from 'react-native-calendar-picker';
import DailyActivitySummaryScreen from './DailyActivitySummaryScreen';

function CalendarScreen(props) {

    const handleDateChanged =(dateChanged)=>{
        console.log("choosen date is 11"+dateChanged); 
       
    }

    return (
        <CalendarPicker onDateChange={(date)=>{
         props.navigation.navigate({
           routeName : 'DailyActivitySummaryScreenNavigation'
         });    
        
        }}/>
            
        );
}

export default CalendarScreen;