import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type MarkdownProviderProps = {
  children: ReactNode;
};

type MarkdownContextType = [string, Dispatch<SetStateAction<string>>];

const MarkdownContext = createContext<MarkdownContextType>(['', () => {}]);

const MarkdownProvider = ({ children }: MarkdownProviderProps) => {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
      {children}
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = (): MarkdownContextType => useContext(MarkdownContext);

export default MarkdownProvider;