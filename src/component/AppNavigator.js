import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import AppDetails from './AppDetail';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Dashboard1 from './Dashboard';
import BottomNav from './bottomNav';
import Drawer from './drawer';
import ApplyLoan from './ApplyLoan';
import AppliedLoan from './AppliedLoan';
import LoanDetails from './LoanDetails';
import ApprovedLoan from './ApprovedLoan';
import PendingLoan from './PendingLoan';
import ClosedLoan from './ClosedLoan';
import RejectedLoan from './RejectedLoan';
import Refferal from './Refferal';
import LoanTopUp from './LoanTopUp';
const RootStack = createStackNavigator(
    {
      Home: Home,
      Detail:AppDetails,
      Login : Login,
      SignUp : SignUp,
      Dashboard: Dashboard1,
      Bottom:BottomNav,
      drawer:Drawer,
      ApplyLoan:ApplyLoan,
      AppliedLoan:AppliedLoan,
      LoanDetails : LoanDetails,
      ApprovedLoan: ApprovedLoan,
      PendingLoan: PendingLoan,
      ClosedLoan: ClosedLoan,
      RejectedLoan: RejectedLoan,
      Refferal:Refferal,
      LoanTopUp:LoanTopUp
    },
    {
      initialRouteName: 'Home',
      
      }
    
  );
  
  const AppContainer = createAppContainer(RootStack);
  export default AppContainer;