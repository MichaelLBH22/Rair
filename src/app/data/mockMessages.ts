export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Conversation {
  id: string;
  userId: string;
  lastMessage: Message;
  unreadCount: number;
}

// Mock conversations
export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    userId: '1',
    lastMessage: {
      id: 'msg-1',
      senderId: '1',
      content: 'I love that you\'re into art galleries too. Have you been to the new exhibit downtown?',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      read: false
    },
    unreadCount: 2
  },
  {
    id: 'conv-2',
    userId: '2',
    lastMessage: {
      id: 'msg-2',
      senderId: 'me',
      content: 'That sounds perfect. Looking forward to it!',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: true
    },
    unreadCount: 0
  },
  {
    id: 'conv-3',
    userId: '3',
    lastMessage: {
      id: 'msg-3',
      senderId: '3',
      content: 'Just got back from Barcelona! The architecture was incredible.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: false
    },
    unreadCount: 1
  },
  {
    id: 'conv-4',
    userId: '4',
    lastMessage: {
      id: 'msg-4',
      senderId: 'me',
      content: 'Thanks for the recommendation!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      read: true
    },
    unreadCount: 0
  },
  {
    id: 'conv-5',
    userId: '7',
    lastMessage: {
      id: 'msg-5',
      senderId: '7',
      content: 'Hey! Your profile caught my eye. Love your vibe.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true
    },
    unreadCount: 0
  }
];

// Mock message history for a conversation
export const mockMessageHistory: Record<string, Message[]> = {
  'conv-1': [
    {
      id: 'msg-1-1',
      senderId: 'me',
      content: 'Hey! I noticed we both have "Open to Adventure" vibes. What kind of adventures are you into?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true
    },
    {
      id: 'msg-1-2',
      senderId: '1',
      content: 'Hey! I\'m all about spontaneous road trips, trying new restaurants, and honestly just exploring the city.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23),
      read: true
    },
    {
      id: 'msg-1-3',
      senderId: '1',
      content: 'There\'s something exciting about not having everything planned out, you know?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23),
      read: true
    },
    {
      id: 'msg-1-4',
      senderId: 'me',
      content: 'Absolutely. I love that energy. What\'s the last spontaneous thing you did?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22),
      read: true
    },
    {
      id: 'msg-1-5',
      senderId: '1',
      content: 'Last weekend I literally just drove to the coast at sunset because the weather was perfect. No plans, just vibes.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 20),
      read: true
    },
    {
      id: 'msg-1-6',
      senderId: 'me',
      content: 'That sounds amazing. I\'ve been wanting to do more of that.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 19),
      read: true
    },
    {
      id: 'msg-1-7',
      senderId: '1',
      content: 'We should plan something! I mean, plan to not plan 😄',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18),
      read: true
    },
    {
      id: 'msg-1-8',
      senderId: '1',
      content: 'I love that you\'re into art galleries too. Have you been to the new exhibit downtown?',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      read: false
    }
  ],
  'conv-2': [
    {
      id: 'msg-2-1',
      senderId: '2',
      content: 'Your profile is refreshingly honest. I appreciate that.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
      read: true
    },
    {
      id: 'msg-2-2',
      senderId: 'me',
      content: 'Thanks! That means a lot. I figured there\'s no point in being anything else.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 47),
      read: true
    },
    {
      id: 'msg-2-3',
      senderId: '2',
      content: 'Exactly. So what brings you to Let\'s Be Honest?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 46),
      read: true
    },
    {
      id: 'msg-2-4',
      senderId: 'me',
      content: 'Looking to meet interesting people without all the games. How about you?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 45),
      read: true
    },
    {
      id: 'msg-2-5',
      senderId: '2',
      content: 'Same. I\'m confident in what I want and I\'d rather be direct about it.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 44),
      read: true
    },
    {
      id: 'msg-2-6',
      senderId: '2',
      content: 'Want to grab drinks this week? There\'s a great wine bar in Manhattan I\'ve been wanting to try.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: true
    },
    {
      id: 'msg-2-7',
      senderId: 'me',
      content: 'That sounds perfect. Looking forward to it!',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: true
    }
  ],
  'conv-3': [
    {
      id: 'msg-3-1',
      senderId: '3',
      content: 'Love your travel photos! Where was your favorite place?',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72),
      read: true
    },
    {
      id: 'msg-3-2',
      senderId: 'me',
      content: 'Probably Iceland. The landscapes were otherworldly.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 70),
      read: true
    },
    {
      id: 'msg-3-3',
      senderId: '3',
      content: 'That\'s on my bucket list! I just got back from Barcelona.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
      read: true
    },
    {
      id: 'msg-3-4',
      senderId: '3',
      content: 'Just got back from Barcelona! The architecture was incredible.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: false
    }
  ]
};
