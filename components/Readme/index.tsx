import ReactMarkdown from 'react-markdown';

interface ReadmeProps {
  content: string
}

const Readme: React.FC<ReadmeProps> = ({content}) => {
    console.log(content)
    return (
        <ReactMarkdown>
            { content }
        </ReactMarkdown>
    )
};

export default Readme;