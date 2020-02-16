import React from 'react';

import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

function CalendarScreen(props) {

  const handleDateChanged = (dateChanged) => {
    console.log("choosen date is 11" + dateChanged);

  }

  return (
    <CalendarPicker onDateChange={(date) => {
      console.log('date clicked is',date);
      date = moment.utc(date).local().format('YYYY-MM-DD');
      console.log('locale date ',date);

      props.navigation.navigate({
        routeName: 'DailyActivitySummaryScreenNavigation',
        params:
        
        {
          'date': date
        }

      });

    }} />

  );
}

export default CalendarScreen;