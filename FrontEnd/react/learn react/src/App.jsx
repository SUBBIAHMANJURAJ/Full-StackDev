// import Counter from './components/Counter'
import BlockInline from './components/BlockAndInline';
import Box from './components/Box';
import ContactForm from './components/ContactForm';
import Formatting from './components/Formatting';
import IframeComp from './components/Iframe';
import Interactive from './components/Interactive';
import Lists from './components/List';
import Message from './components/Message';
import MultipleObjs from './components/MultipleObjs';
import Semantic from './components/Semantic';
import UserInfo from './components/UserInfo';
import UserStatus from './components/UserStatus';
import VegetableList from './components/VegitableList';
import Welcome from './components/Welcome'


function App() {
  

  return (
  <>
    {/* <Counter/> */}
    {/* <Welcome/> */}
    {/* <Box/> */}
    {/* <MultipleObjs name="manjuraj" age="21" gender="male"/> */}
    {/* <ContactForm/> */}
    {/* <VegetableList/> */}
    {/* <Message/> */}
    {/* <UserStatus user={user}/> */}
    {/* <UserInfo user={user} 
        skills={skills} 
        isLoggedIn={isLoggedIn} 
      /> */}
      <BlockInline/>
      <Semantic/>
      <Formatting/>
      <Interactive/>
      <form/>
      <Lists/>
      <table/>
      <iframe/>


  </>
  )
}

export default App;