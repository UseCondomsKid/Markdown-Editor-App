import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useMarkdown } from "../providers/markdown-provider";

type ViewerProps = {
  toggleViewMode: () => void;
};

function Viewer({ toggleViewMode }: ViewerProps) {
    const [markdown] = useMarkdown();
    return (
        <>
            <ReactMarkdown>{ markdown }</ReactMarkdown>
            <button onClick={toggleViewMode}>Switch to Editor</button>
        </>
    )
}

export default Viewer