import { useEffect, useState } from 'react';
import '../App.css'
import MarkdownProvider from '../providers/markdown-provider'
import Editor from './Editor'
import Viewer from './Viewer'
import Store from 'electron-store'

enum ViewMode {
  Editor = 'editor',
  Viewer = 'viewer',
}

const store = new Store();
const empty_dir_info = ['','']

function App() {

  const [viewMode, setViewMode] = useState(ViewMode.Editor);
  const [dirInfo, setDirInfo] = useState<string[]>(empty_dir_info);

  useEffect(() => {
    const info = store.get('dir_info') as string[]
    if (info) {
      setDirInfo(info)
    }
    else {
      setDirInfo(empty_dir_info)
    }
  }, []);

  const toggleViewMode = () => {
    setViewMode((prevMode) =>
      prevMode === ViewMode.Editor ? ViewMode.Viewer : ViewMode.Editor
    );
  };


  return (
    <MarkdownProvider>
      {
        dirInfo == empty_dir_info ? (
          <>
          <div>No Directory Selected</div>
          <p>Please select a directory</p>
          </>
        ) :
        (
          viewMode === ViewMode.Editor ? (
            <Editor toggleViewMode={toggleViewMode} />
          ) : (
            <Viewer toggleViewMode={toggleViewMode} />
          )
        )
      }
    </MarkdownProvider>
  )
}

export default App
