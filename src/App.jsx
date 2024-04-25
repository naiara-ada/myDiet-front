import './App.css';
import { DietProvider } from './context/DietContext.jsx';
import RoutesApp from './routes/RoutesApp.jsx';

function App() {
  

  return (
      <DietProvider>
        <RoutesApp />
      </DietProvider>
  )
}

export default App
