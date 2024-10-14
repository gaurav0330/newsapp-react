import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './Mycomponent/Navabar';
import News from './Mycomponent/News';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <ErrorBoundary>
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key="general" country="us" category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} key="business" country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} key="general2" country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} key="health" country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} key="science" country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} key="sports" country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} key="technology" country="us" category="technology" />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
