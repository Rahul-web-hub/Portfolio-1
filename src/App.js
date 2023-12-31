import './App.css';
import LoaderHome from './components/Loader';
import React from 'react';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate data loading
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is loaded
    }, 6000);
  }, []);
  return (
    <div className="App">
      {isLoading ? <LoaderHome /> : null} {/* Conditionally show the loader */}
    </div>
  );
}

export default App;
