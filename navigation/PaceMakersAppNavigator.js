import React from 'react';

import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CalendarScreen from '../screens/CalendarScreen';
import DailyActivitySummaryScreen from '../screens/DailyActivitySummaryScreen';
import RunnerDailyActivityDetailsScreen from '../screens/RunnerDailyActivityDetailsScreen';
import EventsScreen from '../screens/EventsScreen';
import  UserHomePageScreenv2 from '../screens/UserHomePageScreenv2';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import UnautorizedScreen from '../screens/UnautorizedScreen';


const PaceMakersAppNavigator = createStackNavigator({
    CalendarScreenNavigation: CalendarScreen,
    DailyActivitySummaryScreenNavigation: DailyActivitySummaryScreen,
    RunnerDailyActivityDetailsScreen:RunnerDailyActivityDetailsScreen

});
const defaultTabNavigator = createBottomTabNavigator({

  Home: UserHomePageScreenv2,
  Calendar:PaceMakersAppNavigator,
  Events : EventsScreen

});
const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen,
  LoginScreen : LoginScreen,
  LoggedInHome : defaultTabNavigator,
  UnautorizedScreen:UnautorizedScreen
})

export default createAppContainer(AppSwitchNavigator);