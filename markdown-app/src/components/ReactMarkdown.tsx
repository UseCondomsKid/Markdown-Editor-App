import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { gruvboxDark } from '@uiw/codemirror-themes-all';

function ReactMarkdown() {
    return (
        <CodeMirror
            value='# Hello World'
            height="200px"
            extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
            theme={gruvboxDark}
        />
    )
}

export default ReactMarkdown