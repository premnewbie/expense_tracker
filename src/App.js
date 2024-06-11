import './App.css';
import ExpenseDashboard from './Components/ExpenseDashboard';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <ExpenseDashboard />
      </div>
    </SnackbarProvider>
    
  );
}

export default App;
