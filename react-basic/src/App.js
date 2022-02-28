import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import MessagePrac from './components/MessagePrac';
import Counter from './components/Counter'
import CallBackFunction from './components/CallBackFunction';
import ParentComponet from './components/ParentComponet';
import MainPage from './components/MainPage'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCyclePhaseA from './components/LifeCyclePhaseA';
import Ref from './components/Ref';
import InputRef from './components/InputRef';
import ParentRef from './components/ParentRef';
import FRComponent from './components/FRComponent';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCounter/>
      {/* <FRComponent /> */}
      {/* <ParentRef/> */}
      {/* <InputRef/> */}
      {/* <Ref/> */}
      {/* <Greet name="Sajana" heroName="superWoman">
        <p>
          This is childern paragraph
        </p>
      </Greet>
      <Greet name="Surendra" heroName="superMan">
        <button>Action</button>
      </Greet>
      <Greet name="Sunil" heroName="batman"/>
      <Welcome name="Sajana" heroName="superWoman"/>
      <Welcome name="Surendra" heroName="superMan"/>
      <Welcome name="Sunil" heroName="batman"/> */}
      {/* <Message /> */}
      {/* <MessagePrac/> */}
      {/* <Counter /> */}
      {/* <CallBackFunction/> */}
      {/* <ParentComponet/> */}
      {/* <MainPage /> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <StyleSheet mystyle={true}/> */}
      {/* <Inline/> */}
      {/* <Form/> */}
      {/* <LifeCyclePhaseA/> */}

    </div>
  );
}
export default App;
