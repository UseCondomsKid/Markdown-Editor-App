import { useState } from 'react';
import '../App.css'
import MarkdownProvider from '../providers/markdown-provider'
import Editor from './Editor'
import Viewer from './Viewer'

enum ViewMode {
  Editor = 'editor',
  Viewer = 'viewer',
}

function App() {

  const [viewMode, setViewMode] = useState(ViewMode.Editor);

  const toggleViewMode = () => {
    setViewMode((prevMode) =>
      prevMode === ViewMode.Editor ? ViewMode.Viewer : ViewMode.Editor
    );
  };

  return (
    <MarkdownProvider>
      {viewMode === ViewMode.Editor ? (
        <Editor toggleViewMode={toggleViewMode} />
      ) : (
        <Viewer toggleViewMode={toggleViewMode} />
      )}
    </MarkdownProvider>
  )
}

export default App
