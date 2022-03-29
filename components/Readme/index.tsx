import ReactMarkdown from 'react-markdown';

interface ReadmeProps {
  content: string
};

const Readme: React.FC<ReadmeProps> = ({content}) => {
    return (
        <ReactMarkdown>
            { content }
        </ReactMarkdown>
    )
};

export default Readme;