import ReactMarkdown from "react-markdown";
const MedicalBotMessage: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="space-y-3 text-sm text-gray-800">
            <ReactMarkdown
                components={{
                    h3: ({ children }) => (
                        <div className="flex items-center gap-2 font-semibold text-gray-900 mt-3">
                            <span>🩺</span>
                            <span>{children}</span>
                        </div>
                    ),
                    ul: ({ children }) => (
                        <ul className="space-y-1 pl-1">{children}</ul>
                    ),
                    li: ({ children }) => (
                        <li className="flex gap-2">
                            <span>•</span>
                            <span>{children}</span>
                        </li>
                    ),
                    blockquote: ({ children }) => (
                        <div className="border-l-4 border-red-400 bg-red-50 px-3 py-2 rounded-md text-red-700">
                            ⚠️ {children}
                        </div>
                    ),
                }}
            >
                {text}
            </ReactMarkdown>
        </div>
    );
};
export default MedicalBotMessage;