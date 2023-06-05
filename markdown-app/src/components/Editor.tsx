import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { gruvboxDark } from '@uiw/codemirror-themes-all';
import { vim } from '@replit/codemirror-vim' 
import { useMarkdown } from '../providers/markdown-provider';

function Editor() {

    const [md, setMarkdown] = useMarkdown();

    const updateMarkdown = (value : string) => {
        setMarkdown(value);
        console.log(value);
    }

    const extensions = [vim(), markdown({ base: markdownLanguage, codeLanguages: languages })];
    return (
        <CodeMirror
            value={md}
            height="200px"
            extensions={extensions}
            theme={gruvboxDark}
            onChange={(editor) => {
                updateMarkdown(editor);
            }}
        />
    )
}

export default Editor