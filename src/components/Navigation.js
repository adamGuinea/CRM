import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';

const NavStack = createBottomTabNavigator ({
    PeopleList: {screen: PeopleList},
    AddPerson: {screen: AddPerson},
    CompanyList: {screen: CompanyList},
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        swipeEnabled: true,
        showLabel: false,
        style: {
            backgroundColor: '26a69a',
        },
    },
});

const Navigation = createAppContainer(NavStack)

export default Navigation;