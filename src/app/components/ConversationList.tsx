import { motion } from 'motion/react';
import { X, Search, MessageCircle } from 'lucide-react';
import { mockUsers } from '../data/mockUsers';
import { Conversation } from '../data/mockMessages';

interface ConversationListProps {
  conversations: Conversation[];
  onSelectConversation: (conversationId: string) => void;
  selectedConversationId: string | null;
  onClose: () => void;
}

export function ConversationList({ conversations, onSelectConversation, selectedConversationId, onClose }: ConversationListProps) {
  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString();
  };

  return (
    <div className="h-full bg-white border-r border-neutral-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-neutral-200 space-y-6">
        <div className="flex items-center justify-between">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}
          >
            Messages
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-6 text-center">
            <MessageCircle className="w-16 h-16 text-neutral-300 mb-4" />
            <p
              className="text-neutral-600 mb-2"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 500 }}
            >
              No messages yet
            </p>
            <p
              className="text-neutral-400"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}
            >
              Start a conversation with someone you're interested in
            </p>
          </div>
        ) : (
          <div>
            {conversations.map((conversation) => {
              const user = mockUsers.find((u) => u.id === conversation.userId);
              if (!user) return null;

              const isSelected = selectedConversationId === conversation.id;
              const isUnread = conversation.unreadCount > 0;

              return (
                <motion.button
                  key={conversation.id}
                  onClick={() => onSelectConversation(conversation.id)}
                  className={`w-full p-6 border-b border-neutral-200 hover:bg-neutral-50 transition-colors text-left ${
                    isSelected ? 'bg-neutral-50' : ''
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex gap-4">
                    {/* Profile Image */}
                    <div className="relative w-14 h-14 flex-shrink-0">
                      <img
                        src={user.images[0]}
                        alt={user.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                      {user.isOnline && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={isUnread ? '' : 'text-neutral-600'}
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '1rem',
                              fontWeight: isUnread ? 600 : 500
                            }}
                          >
                            {user.name}
                          </span>
                          {user.isOnline && (
                            <span
                              className="text-green-600"
                              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem' }}
                            >
                              online
                            </span>
                          )}
                        </div>
                        <span
                          className="text-neutral-400 flex-shrink-0"
                          style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem' }}
                        >
                          {formatTimestamp(conversation.lastMessage.timestamp)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <p
                          className={`flex-1 truncate ${isUnread ? 'text-neutral-900' : 'text-neutral-500'}`}
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9375rem',
                            fontWeight: isUnread ? 500 : 400
                          }}
                        >
                          {conversation.lastMessage.senderId === 'me' ? 'You: ' : ''}
                          {conversation.lastMessage.content}
                        </p>
                        {isUnread && (
                          <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
