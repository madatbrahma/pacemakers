import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CalendarScreen from '../screens/CalendarScreen';
import DailyActivitySummaryScreen from '../screens/DailyActivitySummaryScreen';

const PaceMakersAppNavigator = createStackNavigator({
    CalendarScreenNavigation: CalendarScreen,
    DailyActivitySummaryScreenNavigation: DailyActivitySummaryScreen
});

export default createAppContainer(PaceMakersAppNavigator);