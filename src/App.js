import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './Mycomponent/Navabar';
import News from './Mycomponent/News';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = "645d53baf10646d78b6faced62fe1ddf";
  return (
    <ErrorBoundary>
      <Router>
        <div>
          <LoadingBar
              color='#1E3A8A'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" country="us" category="general" />} />
            <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" country="us" category="business" />} />
            <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" country="us" category="entertainment" />} />
            <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general2" country="us" category="general" />} />
            <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" country="us" category="health" />} />
            <Route path="/science" element={<News apiKey={apiKey}  setProgress={setProgress} key="science" country="us" category="science" />} />
            <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" country="us" category="sports" />} />
            <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
