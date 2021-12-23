import Messenger from "./componemt/Messenger";
import AccountProvider from "./context/AccountProvide";
import TemplateProvider from "./theme/TemplateProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <TemplateProvider>
      <UserProvider>
      <AccountProvider>
      <Messenger />
    </AccountProvider>
      </UserProvider>
      
    </TemplateProvider>
    
      
    
  );
}

export default App;
