import { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { ConversationList } from './ConversationList';
import { ChatWindow } from './ChatWindow';
import { mockConversations, mockMessageHistory, Message } from '../data/mockMessages';

interface MessagesViewProps {
  onClose: () => void;
  onViewProfile: (userId: string) => void;
  initialUserId?: string;
}

export function MessagesView({ onClose, onViewProfile, initialUserId }: MessagesViewProps) {
  // Find existing conversation or create a new one
  const findOrCreateConversation = (userId: string) => {
    const existingConv = mockConversations.find(conv => conv.userId === userId);
    if (existingConv) {
      return existingConv.id;
    }
    // Create a new conversation ID
    return `conv-${userId}`;
  };

  const initialConversationId = initialUserId ? findOrCreateConversation(initialUserId) : null;
  
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(initialConversationId);
  const [conversations, setConversations] = useState(() => {
    // If we're starting a new conversation, add it to the list
    if (initialUserId && !mockConversations.find(conv => conv.userId === initialUserId)) {
      return [
        {
          id: `conv-${initialUserId}`,
          userId: initialUserId,
          lastMessage: {
            id: `msg-new`,
            senderId: 'me',
            content: '',
            timestamp: new Date(),
            read: true
          },
          unreadCount: 0
        },
        ...mockConversations
      ];
    }
    return mockConversations;
  });
  const [messageHistory, setMessageHistory] = useState(() => {
    // Initialize empty message history for new conversations
    if (initialUserId && !mockMessageHistory[`conv-${initialUserId}`]) {
      return {
        ...mockMessageHistory,
        [`conv-${initialUserId}`]: []
      };
    }
    return mockMessageHistory;
  });

  const handleSendMessage = (content: string) => {
    if (!selectedConversationId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: 'me',
      content,
      timestamp: new Date(),
      read: true
    };

    setMessageHistory((prev) => ({
      ...prev,
      [selectedConversationId]: [...(prev[selectedConversationId] || []), newMessage]
    }));

    // Update the conversation's last message
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversationId
          ? { ...conv, lastMessage: newMessage }
          : conv
      )
    );
  };

  const selectedMessages = selectedConversationId
    ? messageHistory[selectedConversationId] || []
    : [];

  // Get the userId for the selected conversation
  const selectedUserId = selectedConversationId
    ? conversations.find(conv => conv.id === selectedConversationId)?.userId || ''
    : '';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50"
    >
      {/* Desktop Layout - Two Columns */}
      <div className="hidden lg:grid lg:grid-cols-[400px_1fr] h-screen">
        {/* Conversations List */}
        <ConversationList
          conversations={conversations}
          onSelectConversation={setSelectedConversationId}
          selectedConversationId={selectedConversationId}
          onClose={onClose}
        />

        {/* Chat Window or Empty State */}
        {selectedConversationId ? (
          <ChatWindow
            conversationId={selectedConversationId}
            messages={selectedMessages}
            onBack={() => setSelectedConversationId(null)}
            onSendMessage={handleSendMessage}
            onViewProfile={onViewProfile}
            userId={selectedUserId}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2
              className="text-neutral-400 mb-3"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              Select a conversation
            </h2>
            <p
              className="text-neutral-500 max-w-md"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
            >
              Choose a conversation from the list to start messaging
            </p>
          </div>
        )}
      </div>

      {/* Mobile Layout - Single View */}
      <div className="lg:hidden h-screen">
        {selectedConversationId ? (
          <ChatWindow
            conversationId={selectedConversationId}
            messages={selectedMessages}
            onBack={() => setSelectedConversationId(null)}
            onSendMessage={handleSendMessage}
            onViewProfile={onViewProfile}
            userId={selectedUserId}
          />
        ) : (
          <ConversationList
            conversations={conversations}
            onSelectConversation={setSelectedConversationId}
            selectedConversationId={selectedConversationId}
            onClose={onClose}
          />
        )}
      </div>
    </motion.div>
  );
}