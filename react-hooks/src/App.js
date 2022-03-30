import './App.css';
import React from 'react'
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import IntervalHookCounterPrac from './components/IntervalHookCounterPrac';
import ComponentC from './components/useContextFolder/ComponentC';
import UseReducer from './components/UseReducer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UseReducer/>
      {/* <UserContext.Provider value={"Outer layer: Vishwas"}>
        <ChannelContext.Provider value = {"inner layer: Codevolution"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <DataFetching/> */}
      {/* <IntervalHookCounterPrac/>
      <IntervalHookCounter/> */}
      {/* <HookMouse/> */}

      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
    </div>
  );
}

export default App;
