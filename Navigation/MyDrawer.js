import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "../Screens/About"
import Home from "../Screens/Home"
const Drawer = createDrawerNavigator();
export default function MyDrawer({MyDrawer}) {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerPosition="right"
    >
      <Drawer.Screen name="Home" component={Home}options={{
       headerTitle: "",
       headerTitleStyle: { color: "white" },
       headerStyle: { backgroundColor: "#000304",shadowColor: 'transparent',  
       elevation: 0 },
       headerTintColor: "#FFFFFF",
       defaultNavigationOptions: {
         title: "Aligned Center",
         headerTitleAlign: "center", 
       }, 
      }} />
      <Drawer.Screen name="About" component={About} options={{
       headerTitle: "",
       headerTitleStyle: { color: "white" },
       headerStyle: { backgroundColor: "#000304",shadowColor: 'transparent',  
       elevation: 0 },
       headerTintColor: "#FFFFFF",
       defaultNavigationOptions: {
         title: "Aligned Center",
         headerTitleAlign: "center",
       }, 
      }} />
    </Drawer.Navigator>
  );
}
