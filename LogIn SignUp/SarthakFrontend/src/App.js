import { LoginPage } from './Components/LoginPage';
import { RegistrationPage } from './Components/RegistrationPage';

function App() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <LoginPage/>
      <RegistrationPage/>
    </div>
  );
}

export default App;
