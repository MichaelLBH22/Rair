import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, MoreVertical, Sparkles, MessageCircle } from 'lucide-react';
import { mockUsers } from '../data/mockUsers';
import { Message } from '../data/mockMessages';

interface ChatWindowProps {
  conversationId: string;
  messages: Message[];
  onBack: () => void;
  onSendMessage: (content: string) => void;
  onViewProfile: (userId: string) => void;
  userId: string;
}

export function ChatWindow({ conversationId, messages, onBack, onSendMessage, onViewProfile, userId }: ChatWindowProps) {
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Get user directly from userId prop
  const user = mockUsers.find((u) => u.id === userId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [messageText]);

  const handleSend = () => {
    if (messageText.trim()) {
      onSendMessage(messageText.trim());
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatMessageTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { date: string; messages: Message[] }[] = [];
    let currentDate = '';
    let currentGroup: Message[] = [];

    messages.forEach((message) => {
      const messageDate = message.timestamp.toLocaleDateString();
      if (messageDate !== currentDate) {
        if (currentGroup.length > 0) {
          groups.push({ date: currentDate, messages: currentGroup });
        }
        currentDate = messageDate;
        currentGroup = [message];
      } else {
        currentGroup.push(message);
      }
    });

    if (currentGroup.length > 0) {
      groups.push({ date: currentDate, messages: currentGroup });
    }

    return groups;
  };

  const formatDateLabel = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toLocaleDateString() === today.toLocaleDateString()) return 'Today';
    if (date.toLocaleDateString() === yesterday.toLocaleDateString()) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  if (!user) return null;

  const messageGroups = groupMessagesByDate(messages);

  return (
    <div className="h-full bg-white flex flex-col min-h-screen lg:min-h-0">
      {/* Header */}
      <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors lg:hidden"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div
            className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onViewProfile(user.id)}
          >
            <div className="relative w-12 h-12">
              <img
                src={user.images[0]}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
              />
              {user.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              )}
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600 }}>
                {user.name}
              </h3>
              <div className="flex items-center gap-2 text-neutral-500">
                <Sparkles className="w-3 h-3" />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem' }}>
                  {user.currentVibe}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {messageGroups.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-neutral-400" />
              </div>
              <h3
                className="text-neutral-800 mb-2"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  letterSpacing: '-0.01em'
                }}
              >
                Start a conversation
              </h3>
              <p
                className="text-neutral-500 max-w-sm"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}
              >
                Send a message to {user.name} to get the conversation started
              </p>
            </div>
          ) : (
            <>
              {messageGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-4">
                  {/* Date divider */}
                  <div className="flex items-center justify-center">
                    <span
                      className="px-4 py-1.5 bg-neutral-100 text-neutral-500 rounded-full"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500 }}
                    >
                      {formatDateLabel(group.date)}
                    </span>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3">
                    {group.messages.map((message, index) => {
                      const isMyMessage = message.senderId === 'me';
                      const showAvatar = !isMyMessage && (index === 0 || group.messages[index - 1].senderId !== message.senderId);

                      return (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`flex gap-3 ${isMyMessage ? 'justify-end' : 'justify-start'}`}
                        >
                          {!isMyMessage && (
                            <div className="w-8 h-8 flex-shrink-0">
                              {showAvatar && (
                                <img
                                  src={user.images[0]}
                                  alt={user.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              )}
                            </div>
                          )}

                          <div className={`flex flex-col ${isMyMessage ? 'items-end' : 'items-start'}`}>
                            <div
                              className={`max-w-lg px-5 py-3 ${
                                isMyMessage
                                  ? 'bg-black text-white'
                                  : 'bg-neutral-100 text-neutral-900'
                              }`}
                              style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.9375rem',
                                lineHeight: 1.5
                              }}
                            >
                              {message.content}
                            </div>
                            <span
                              className="text-neutral-400 mt-1 px-1"
                              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem' }}
                            >
                              {formatMessageTime(message.timestamp)}
                            </span>
                          </div>

                          {isMyMessage && <div className="w-8 h-8 flex-shrink-0" />}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-start">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                rows={1}
                className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none resize-none max-h-32"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.5
                }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!messageText.trim()}
              className="p-4 bg-black text-white hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p
            className="text-neutral-400 mt-2"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem' }}
          >
            Press Enter to send, Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}