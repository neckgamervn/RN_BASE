# React Native base project
version: 0.63.1

# Struct

## assets
  - images: name must be `ic_home.png` or `img_home.png`
## components
  - ScreenComponent: 
  
| Props | Type |Description |Require|
| --- | --- | --- |:---:|
| `renderView` |React.ReactNode| Main view |√|
| `isLoading` | boolean | Show loading screen | |
| `isError` | boolean | Show error screen | |
| `back` | boolean | Show back button on header | |
| `rightComponent` | React.ReactNode | Right componet on header | |
| `leftComponent` | React.ReactNode | Left componet on header | |
| `titleHeader` | string | Show header with title | |
| `reload` | function | call when press on error screen | |
| `header` | React.ReactNode | add header under main header | |
| `dialogLoading` | boolean | Show dialog loading modal | |
| `isSafeAre` | boolean | is SafeAreaView | |

  - FstImage:
  already include lazy loading
  same props with react-native-fast-image: https://github.com/DylanVann/react-native-fast-image
  
  - Avatar:
   same props with FstImage above and `onPress` props
   
## navigation
  - stack :
    - StackBottomBar: screen of bottom bar ( Home , User ,...)
    - StackApp: main app screen not include Bottom bar screen ( HomeDetail,UserDetail,...)
    - StackAuth: authentication screen ( Login , Register ,...)
  - AppNavigator:
    for config Authentication flows :https://reactnavigation.org/docs/auth-flow/
## utils
  - 
