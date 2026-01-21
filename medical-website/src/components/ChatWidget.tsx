import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, ArrowUp } from 'lucide-react';
import MedicalBotMessage from '../components/MedicalBotMessage';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatWidget: React.FC = () => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: 'Xin chào! Tôi là trợ lý ảo AI. Tôi có thể giúp gì cho bạn hôm nay?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isChatbotOpen, isLoading]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const duration = 1000;
        const start = window.scrollY;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

            window.scrollTo(0, start * (1 - easeOutCubic(progress)));

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };
        requestAnimationFrame(animateScroll);
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userText = inputMessage;
        const userMessage: Message = {
            id: messages.length + 1,
            text: userText,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            // Call n8n Webhook
            const response = await fetch('https://n8n.minds.vn/webhook/ccba7aab-2bd8-43b2-bf05-d1e789695f6c/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: "sendMessage",
                    chatInput: userText,
                    sessionId: crypto.randomUUID()

                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // Handle various n8n response formats
            const botText = data.output || data.text || data.message || data.response || "Xin lỗi, tôi không thể trả lời ngay lúc này.";

            const botMessage: Message = {
                id: messages.length + 2,
                text: typeof botText === 'string' ? botText : JSON.stringify(botText),
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                id: messages.length + 2,
                text: "Xin lỗi, hệ thống đang bận. Vui lòng thử lại sau.",
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Left Group: Chat Apps */}
            <div className="fixed bottom-6 left-6 z-[50] flex flex-col gap-4 items-start">
                {/* Chatbot Window */}
                <AnimatePresence>
                    {isChatbotOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="fixed bottom-6 left-[100px] w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col shadow-blue-900/10 z-[60]"
                            style={{ height: '500px' }}
                        >
                            {/* Header */}
                            <div className="bg-white p-4 border-b flex items-center justify-between sticky top-0 z-10">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Bot className="w-6 h-6" />
                                        </div>
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-sm">Trợ lý MediCare+</h3>
                                        <p className="text-xs text-green-500 font-medium">Đang hoạt động</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsChatbotOpen(false)}
                                    className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                                    >
                                        <div className={`flex items-end gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                            {message.sender === 'bot' && (
                                                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-sm flex-shrink-0">
                                                    <Bot className="w-4 h-4" />
                                                </div>
                                            )}

                                            <div
                                                className={`max-w-[85%] px-4 py-2.5 shadow-sm ${message.sender === 'user'
                                                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl rounded-tr-sm'
                                                    : 'bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-tl-sm'
                                                    }`}
                                            >
                                                {message.sender === 'bot' ? (
                                                    <MedicalBotMessage text={message.text} />
                                                ) : (
                                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                                )}
                                            </div>
                                        </div>
                                        <span className={`text-[10px] text-gray-400 mt-1 ${message.sender === 'user' ? 'mr-1' : 'ml-12'}`}>
                                            {message.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                ))}

                                {/* Typing Indicator */}
                                {isLoading && (
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-end gap-2 flex-row">
                                            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-sm flex-shrink-0">
                                                <Bot className="w-4 h-4" />
                                            </div>
                                            <div className="bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                                                <div className="flex gap-1.5">
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-gray-400 mt-1 ml-12">Đang trả lời...</span>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-3 bg-white border-t">
                                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        placeholder="Nhập tin nhắn..."
                                        className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!inputMessage.trim()}
                                        className={`p-1.5 rounded-full transition-all ${inputMessage.trim()
                                            ? 'bg-blue-500 text-white shadow-md hover:scale-105'
                                            : 'bg-gray-200 text-gray-400'
                                            }`}
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Chat Buttons with Bounce Animation */}
                <div className="flex flex-col gap-3">
                    {/* Chatbot Toggle Button */}
                    <motion.button
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1
                        }}
                        whileHover={{ scale: 1.1, y: 0 }} // Stop bouncing on hover
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
                        className={`p-3.5 rounded-full shadow-lg transition-all flex items-center justify-center ${isChatbotOpen
                            ? 'bg-gray-200 text-gray-600 rotate-90'
                            : 'bg-gradient-to-r from-teal-400 to-blue-500 text-white hover:shadow-cyan-200'
                            }`}
                        title="Chat với Bot"
                    >
                        {isChatbotOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                    </motion.button>

                    <motion.a
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1,
                            delay: 0.3
                        }}
                        whileHover={{ scale: 1.05, x: 5, y: 0 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://zalo.me/your-zalo-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center"
                        title="Chat Zalo"
                    >
                        <span className="font-bold text-xs">Zalo</span>
                    </motion.a>

                    <motion.a
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1,
                            delay: 0.6
                        }}
                        whileHover={{ scale: 1.05, x: 5, y: 0 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://m.me/your-facebook-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-purple-200 transition-all flex items-center justify-center"
                        title="Chat Messenger"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.145 2 11.5c0 2.855 1.371 5.424 3.514 7.217v3.783l3.232-1.773c.916.253 1.89.387 2.897.387 5.523 0 10-4.145 10-9.5S17.523 2 12 2zm1.032 12.532l-2.558-2.73-4.993 2.73 5.491-5.823 2.622 2.73 4.929-2.73-5.491 5.823z" />
                        </svg>
                    </motion.a>
                </div>
            </div>

            {/* Right Group: Scroll to Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 z-[45] bg-gradient-to-r from-teal-green to-cyan-500 text-white p-4 rounded-full shadow-glow hover:shadow-glow-lg transition group"
                    >
                        <ArrowUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;