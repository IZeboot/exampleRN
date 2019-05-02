const Home =  DrawerNavigator (
  {
    Home: {screen: Home}
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    navigationOptions: {
      drawerLockMode: 'locked-closed',
    },
  },
  {
      initialRouteName:'Home'
  }
)