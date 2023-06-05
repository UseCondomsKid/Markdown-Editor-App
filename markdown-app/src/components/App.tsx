import '../App.css'
import MarkdownProvider from '../providers/markdown-provider'
import Editor from './Editor'


function App() {
  return (
    <MarkdownProvider>
      <Editor/>
    </MarkdownProvider>
  )
}

export default App
