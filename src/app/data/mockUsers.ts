export type Vibe = 
  | 'Spoil Me' 
  | 'Wild' 
  | 'Serious' 
  | 'Generous' 
  | 'Chill' 
  | 'Naughty'
  | 'Sexy'
  | 'Classy';

export interface User {
  id: string;
  name: string;
  age: number;
  height: string;
  weight: string;
  location: string;
  bio: string;
  currentVibe: Vibe;
  images: string[];
  prompts: {
    question: string;
    answer: string;
  }[];
  interests: string[];
  isOnline: boolean;
  gender?: 'Male' | 'Female';
  featured?: boolean;
  verified?: boolean;
  isOut?: boolean;
  currentLocation?: string;
  moments?: string[];
}

export const AVAILABLE_VIBES: Vibe[] = [
  'Spoil Me',
  'Wild',
  'Serious',
  'Generous',
  'Chill',
  'Naughty',
  'Sexy',
  'Classy'
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sophia',
    age: 25,
    height: '5\'7"',
    weight: '125 lbs',
    location: 'Brooklyn, NY',
    bio: 'Creative director by day, vintage treasure hunter by night. I believe in honesty, good wine, and conversations that last until sunrise.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1654760314824-c10d23139cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIweW91bmclMjBpbnN0YWdyYW0lMjBtb2RlbCUyMGdpcmx8ZW58MXx8fHwxNzcyMDU5NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1640465978467-fa011a5dfb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluc3RhZ3JhbSUyMGdpcmwlMjBtb2RlbHxlbnwxfHx8fDE3NzIwNTk2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1578067141755-c40d45e10124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZ2lybCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m really looking for',
        answer: 'Someone who can match my energy and isn\'t afraid to be real about what they want'
      },
      {
        question: 'My ideal Saturday night',
        answer: 'Starting at a gallery opening, ending at a speakeasy with someone interesting'
      }
    ],
    interests: ['Art', 'Design', 'Jazz', 'Architecture'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'West Village',
    moments: [
      'https://images.unsplash.com/photo-1763651958358-c71aa2da72f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGxpZmUlMjBwYXJ0eSUyMGZyaWVuZHN8ZW58MXx8fHwxNzc0MDM5NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1632840766469-9897a845c514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwd2luZXxlbnwxfHx8fDE3NzQwMzk2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763544161335-a21daf50d0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwYmFyJTIwY29ja3RhaWxzfGVufDF8fHx8MTc3NDAzOTYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1702533586864-f548c237fe04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHRsaWZlJTIwbGlnaHRzfGVufDF8fHx8MTc3NDAzOTYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767619946289-96cea6c14081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwbGF1Z2hpbmclMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzQwMzk2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768508949492-d4a6c9978f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZXZlbnQlMjBnYWxhfGVufDF8fHx8MTc3NDAzOTYwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1719262883717-ae4e197d8a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMGRyaW5rc3xlbnwxfHx8fDE3NzQwMzk2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1742497360136-3c7f3110bc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwb3BlbmluZ3xlbnwxfHx8fDE3NzQwMzQ1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767969457898-51d5e9cf81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NzM5NDU1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1665989215795-f67f4723087d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGxhdHRlciUyMGRpbmluZ3xlbnwxfHx8fDE3NzQwMzk2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1620518060623-75dbbee2ed37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGRyaW5rJTIwY2xvc2V8ZW58MXx8fHwxNzc0MDM5NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1643759543477-347e4b5b98b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jaW5nJTIwY2x1YiUyMGxpZ2h0c3xlbnwxfHx8fDE3NzQwMzk2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: '13',
    name: 'Stacy',
    age: 23,
    height: '5\'5"',
    weight: '118 lbs',
    location: 'Miami, FL',
    bio: 'Life\'s too short to be boring. I love dressing up, having fun, and being unapologetically me. Looking for someone who can handle my wild side.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/flagged/photo-1565993225353-98be5528bbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zdWFsJTIwd29tYW4lMjBwb3J0cmFpdCUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1622632095747-7bf2f4d1c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3VyJTIwbW9kZWwlMjBwaG90b3Nob290fGVufDF8fHx8MTc3MjA1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1654760314824-c10d23139cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZmVtYWxlJTIwbW9kZWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzIwNTkxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Let\'s be honest',
        answer: 'I\'m confident, I love attention, and I\'m not afraid to go after what I want'
      },
      {
        question: 'What I\'m into',
        answer: 'Good energy, late nights, and people who know how to have a good time'
      }
    ],
    interests: ['Nightlife', 'Fashion', 'Dancing', 'Cocktails'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'South Beach'
  },
  {
    id: '2',
    name: 'Maya',
    age: 26,
    height: '5\'6"',
    weight: '130 lbs',
    location: 'Manhattan, NY',
    bio: 'Entrepreneur and travel enthusiast. Life\'s too short for games—I\'m here to meet genuine people and see where things go.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1690960912572-ebd856e3c7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwaW5zdGFncmFtJTIwZ2lybHxlbnwxfHx8fDE3NzIwNTkxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1596602550873-8160a9d9bd97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBtb2RlbCUyMGZhY2UlMjBzZW5zdWFsfGVufDF8fHx8MTc3MjA1OTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1560322259-830777d84394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBnaXJsJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'I\'m being honest about',
        answer: 'I work hard and play hard. Looking for someone who appreciates directness and adventure'
      },
      {
        question: 'What turns me on',
        answer: 'Confidence, ambition, and people who know what they want'
      }
    ],
    interests: ['Travel', 'Business', 'Fitness', 'Fine Dining'],
    isOnline: true,
    isOut: true,
    currentLocation: 'Soho'
  },
  {
    id: '3',
    name: 'Aria',
    age: 26,
    height: '5\'8"',
    weight: '128 lbs',
    location: 'Los Angeles, CA',
    bio: 'Photographer exploring the world one city at a time. Open-minded, curious, and always ready for the next adventure.',
    currentVibe: 'Naughty',
    images: [
      'https://images.unsplash.com/photo-1610360665397-c78136fff4e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWR1Y3RpdmUlMjB3b21hbiUyMG1vZGVsJTIwcGhvdG98ZW58MXx8fHwxNzcyMDU5MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1666112218030-c72dbe407cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBmZW1hbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762114468187-971a71a5fe70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwd29tYW4lMjBoZWFkc2hvdCUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDU5MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    isOut: true,
    currentLocation: 'Venice Beach',
    prompts: [
      {
        question: 'Right now I\'m open to',
        answer: 'Meeting interesting people, spontaneous trips, and experiences I\'ll remember'
      },
      {
        question: 'My vibe lately',
        answer: 'Free-spirited and open to whatever feels right'
      }
    ],
    interests: ['Photography', 'Travel', 'Yoga', 'Music Festivals'],
    isOnline: false,
    featured: true
  },
  {
    id: '4',
    name: 'Juliana',
    age: 26,
    height: '5\'9"',
    weight: '135 lbs',
    location: 'Miami, FL',
    bio: 'Serial entrepreneur. I love treating the right person to incredible experiences. Looking for someone genuine who appreciates the finer things.',
    currentVibe: 'Generous',
    images: [
      'https://images.unsplash.com/photo-1696622102812-1c69e89d4ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBpbmZsdWVuY2VyJTIwc2V4eXxlbnwxfHx8fDE3NzIwNTkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1727934403995-90cd67a658ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBtb2RlbCUyMHdvbWFuJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIwNTkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759003527318-678b19902da2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGx1cmluZyUyMGZlbWFsZSUyMG1vZGVsJTIwc2hvdHxlbnwxfHx8fDE3NzIwNTkyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What makes me happy',
        answer: 'Creating unforgettable moments and being with someone who appreciates them'
      },
      {
        question: 'I\'m looking for someone who',
        answer: 'Is confident, authentic, and knows their worth'
      }
    ],
    interests: ['Business', 'Travel', 'Wine', 'Luxury Lifestyle'],
    isOnline: true
  },
  {
    id: '5',
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    weight: '122 lbs',
    location: 'San Francisco, CA',
    bio: 'Tech lead with a wild side. Not here for small talk—let\'s be real about what we\'re looking for.',
    currentVibe: 'Sexy',
    images: [
      'https://images.unsplash.com/photo-1712212601990-8274d5566304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZmFzaGlvbiUyMHBvcnRyYWl0JTIwZ2lybHxlbnwxfHx8fDE3NzIwNTkyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1730283193559-5f9db56d3430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3JnZW91cyUyMG1vZGVsJTIwd29tYW4lMjBzZXh5fGVufDF8fHx8MTc3MjA1OTIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1762474548831-057531fd871b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBzZW5zdWFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDU5MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Let\'s be honest',
        answer: 'I know what I want and I\'m not shy about it. Looking for someone who can handle that'
      },
      {
        question: 'My ideal connection',
        answer: 'Chemistry, honesty, and someone who matches my energy'
      }
    ],
    interests: ['Tech', 'Fashion', 'Dancing', 'Wine Bars'],
    isOnline: false
  },
  {
    id: '6',
    name: 'Elena',
    age: 25,
    height: '5\'5"',
    weight: '120 lbs',
    location: 'Austin, TX',
    bio: 'Music producer and chill vibes curator. Taking things easy but always down for good company.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1739379263414-e315aeba31b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWwlMjBmYWNlfGVufDF8fHx8MTc3MjA1OTg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1654760314824-c10d23139cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWwlMjBzaG90fGVufDF8fHx8MTc3MjA1OTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1654760314824-c10d23139cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWwlMjBwaWN0dXJlfGVufDF8fHx8MTc3MjA1OTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m into right now',
        answer: 'Meeting new people without pressure, seeing where things naturally go'
      },
      {
        question: 'My speed',
        answer: 'Laid-back but intentional. I like real connections over forced ones'
      }
    ],
    interests: ['Music', 'Vinyl', 'Coffee', 'Live Shows'],
    isOnline: true
  },
  {
    id: '7',
    name: 'Isabella',
    age: 24,
    height: '5\'7"',
    weight: '126 lbs',
    location: 'Chicago, IL',
    bio: 'Fashion stylist with a taste for the finer things. I\'m bold, direct, and love people who can keep up with my energy.',
    currentVibe: 'Sexy',
    images: [
      'https://images.unsplash.com/photo-1617380518232-9c3e95a118d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZ2lybCUyMGZhc2hpb24lMjBtb2RlbHxlbnwxfHx8fDE3NzIwNTkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1610441995419-a673724a8224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWx0cnklMjB3b21hbiUyMG1vZGVsJTIwZmFjZXxlbnwxfHx8fDE3NzIwNTkyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1633531122001-0f878f313002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBmZW1hbGUlMjBwb3J0cmFpdCUyMHBob3RvfGVufDF8fHx8MTc3MjA1OTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Let\'s be honest',
        answer: 'I know my worth and I\'m looking for someone who appreciates confidence and style'
      },
      {
        question: 'What I\'m craving',
        answer: 'Intense connections, late nights, and someone who isn\'t afraid of a strong woman'
      }
    ],
    interests: ['Fashion', 'Nightlife', 'Art Galleries', 'Champagne'],
    isOnline: true
  },
  {
    id: '8',
    name: 'Luna',
    age: 25,
    height: '5\'8"',
    weight: '132 lbs',
    location: 'Miami, FL',
    bio: 'Model and free spirit. Life\'s about experiences and I\'m here for all of them. No judgments, just vibes.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1604663299044-ad56ba901647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGx1cmluZyUyMGluc3RhZ3JhbSUyMGZlbWFsZSUyMG1vZGVsfGVufDF8fHx8MTc3MjA1OTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1571385808320-1415e74da906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3JnZW91cyUyMGluc3RhZ3JhbSUyMGZlbWFsZSUyMG1vZGVsfGVufDF8fHx8MTc3MjA1OTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1571385808320-1415e74da906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWx0cnklMjBpbnN0YWdyYW0lMjBmZW1hbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzIwNTk4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m open to',
        answer: 'Fun, adventure, and people who live in the moment like I do'
      },
      {
        question: 'My energy right now',
        answer: 'Playful, curious, and ready for whatever comes my way'
      }
    ],
    interests: ['Modeling', 'Beach Life', 'Dancing', 'Sunset Parties'],
    isOnline: true
  },
  {
    id: '9',
    name: 'Natasha',
    age: 26,
    height: '5\'10"',
    weight: '140 lbs',
    location: 'Las Vegas, NV',
    bio: 'Entrepreneur who built my own empire. I appreciate luxury, authenticity, and people who match my ambition.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1550455491-9d15842c18f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob3QlMjBtb2RlbCUyMHdvbWFufGVufDF8fHx8MTc3MjA1OTIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1730283193559-5f9db56d3430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGx1cmluZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBzZXh5fGVufDF8fHx8MTc3MjA1OTIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1578067141755-c40d45e10124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBtb2RlbCUyMHNleHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Being real about what I want',
        answer: 'Someone successful, confident, and ready for something genuine'
      },
      {
        question: 'What excites me',
        answer: 'Power couples, jet-setting, and building something amazing together'
      }
    ],
    interests: ['Business', 'High Fashion', 'Real Estate', 'Fine Dining'],
    isOnline: false
  },
  {
    id: '10',
    name: 'Jade',
    age: 24,
    height: '5\'6"',
    weight: '124 lbs',
    location: 'Los Angeles, CA',
    bio: 'Actress and adventurer. I\'m unapologetically myself and looking for someone who celebrates that.',
    currentVibe: 'Naughty',
    images: [
      'https://images.unsplash.com/photo-1571385808320-1415e74da906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWx8ZW58MXx8fHwxNzcyMDU5ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1733394914724-91eb118c2a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTk4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1739379263414-e315aeba31b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWwlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA1OTg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Right now I\'m feeling',
        answer: 'Bold, free, and ready to explore with the right person'
      },
      {
        question: 'What I\'m drawn to',
        answer: 'Spontaneity, creativity, and people who aren\'t afraid to be themselves'
      }
    ],
    interests: ['Acting', 'Traveling', 'Yoga', 'Indie Films'],
    isOnline: true
  },
  {
    id: '11',
    name: 'Violet',
    age: 26,
    height: '5\'5"',
    weight: '118 lbs',
    location: 'New York, NY',
    bio: 'Artist living my truth. I create, I explore, I connect. Looking for depth and authenticity.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1582308280652-03b96657ae28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzIwNTk4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1604663299044-ad56ba901647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBpbnN0YWdyYW0lMjBmZW1hbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzIwNTk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1514976575739-7902e7066844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWx8ZW58MXx8fHwxNzcyMDU5ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m looking for',
        answer: 'Genuine connections and people who see the world differently'
      },
      {
        question: 'My vibe',
        answer: 'Curious, expressive, and always evolving'
      }
    ],
    interests: ['Contemporary Art', 'Poetry', 'Coffee Culture', 'Museums'],
    isOnline: false
  },
  {
    id: '12',
    name: 'Carmen',
    age: 25,
    height: '5\'7"',
    weight: '135 lbs',
    location: 'San Diego, CA',
    bio: 'Personal trainer and wellness coach. Strong body, stronger mind. I value honesty and real connections.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1762195020829-835d05d3ee80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZmVtYWxlJTIwZmFzaGlvbiUyMHNob3R8ZW58MXx8fHwxNzcyMDU5MjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1550455491-9d15842c18f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBtb2RlbCUyMHdvbWFuJTIwaG90fGVufDF8fHx8MTc3MjA1OTIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1672794776762-18dddc72982e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBzZXh5JTIwbW9kZWwlMjBmYWNlfGVufDF8fHx8MTc3MjA1OTIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'I\'m being honest about',
        answer: 'I work hard on myself and want someone who does the same'
      },
      {
        question: 'What I\'m ready for',
        answer: 'A real connection with someone who values health, honesty, and growth'
      }
    ],
    interests: ['Fitness', 'Nutrition', 'Beach Workouts', 'Wellness'],
    isOnline: true
  },
  {
    id: '14',
    name: 'Dakota',
    age: 26,
    height: '5\'8"',
    weight: '130 lbs',
    location: 'Seattle, WA',
    bio: 'Software architect who loves the outdoors. Building things during the week, exploring mountains on weekends.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1578819386107-c2bf8f08b783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGx1cmluZyUyMG1vZGVsJTIwd29tYW4lMjBwaG90b3xlbnwxfHx8fDE3NzIwNTkyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1531908012224-8f8865e79a96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBnaXJsJTIwcG9ydHJhaXQlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA1OTIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1646851636117-38ccdf503178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWR1Y3RpdmUlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjA1OTIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What gets me excited',
        answer: 'Real conversations, new perspectives, and people who aren\'t afraid to be themselves'
      },
      {
        question: 'I\'m being honest about',
        answer: 'I want something real without the games'
      }
    ],
    interests: ['Hiking', 'Tech', 'Coffee', 'Craft Beer'],
    isOnline: true
  },
  {
    id: '15',
    name: 'Sienna',
    age: 24,
    height: '5\'4"',
    weight: '115 lbs',
    location: 'Portland, OR',
    bio: 'Baker, bookworm, and hopeless romantic. I believe in morning coffee, late-night talks, and being completely honest.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1567099648639-b0ff27e8dd54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwaW5zdGFncmFtJTIwZ2lybCUyMHBob3RvfGVufDF8fHx8MTc3MjA1OTIwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1736239284054-e83b50cc7cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWx0cnklMjBmZW1hbGUlMjBtb2RlbCUyMHNob3R8ZW58MXx8fHwxNzcyMDU5MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1596602549686-b3492ada33f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3VyJTIwd29tYW4lMjBmYWNlJTIwc2V4eXxlbnwxfHx8fDE3NzIwNTkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m really looking for',
        answer: 'Someone who values depth, authenticity, and isn\'t afraid of vulnerability'
      },
      {
        question: 'My perfect date',
        answer: 'A farmers market in the morning, baking together in the afternoon'
      }
    ],
    interests: ['Baking', 'Books', 'Farmers Markets', 'Indie Music'],
    isOnline: true
  },
  {
    id: '16',
    name: 'Phoenix',
    age: 25,
    height: '5\'9"',
    weight: '138 lbs',
    location: 'Denver, CO',
    bio: 'Adventure guide living life at full speed. If you can keep up with my energy, we\'ll get along great.',
    currentVibe: 'Naughty',
    images: [
      'https://images.unsplash.com/photo-1584969405346-5230ae2bc4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwaG90JTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1654760314824-c10d23139cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZ2lybCUyMG1vZGVsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcyMDU5MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1563703755801-ff511f2a60e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGhvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Right now I\'m into',
        answer: 'Rock climbing, spontaneous road trips, and people who say yes to adventure'
      },
      {
        question: 'Let\'s be honest',
        answer: 'I need someone who can match my wild side'
      }
    ],
    interests: ['Rock Climbing', 'Skiing', 'Travel', 'Photography'],
    isOnline: false
  },
  {
    id: '17',
    name: 'Daniella',
    age: 26,
    height: '5\'7"',
    weight: '128 lbs',
    location: 'Boston, MA',
    bio: 'Investment banker with expensive tastes. I work hard so I can play harder. Looking for someone who appreciates the good life.',
    currentVibe: 'Spoil Me',
    images: [
      'https://images.unsplash.com/photo-1619520166328-6eccd4fb8e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBpbnN0YWdyYW0lMjBmZW1hbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzIwNTk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1733394914724-91eb118c2a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zdWFsJTIwaW5zdGFncmFtJTIwZmVtYWxlJTIwbW9kZWx8ZW58MXx8fHwxNzcyMDU5ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1571385808320-1415e74da906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVubmluZyUyMGluc3RhZ3JhbSUyMGZlbWFsZSUyMG1vZGVsfGVufDF8fHx8MTc3MjA1OTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What makes me happy',
        answer: 'Treating someone special to incredible experiences and watching their face light up'
      },
      {
        question: 'I\'m attracted to',
        answer: 'Confidence, sophistication, and people who know their worth'
      }
    ],
    interests: ['Fine Dining', 'Wine', 'Travel', 'Luxury Lifestyle'],
    isOnline: true,
    featured: true
  },
  {
    id: '18',
    name: 'Raven',
    age: 25,
    height: '5\'6"',
    weight: '125 lbs',
    location: 'Atlanta, GA',
    bio: 'R&B singer with a voice that\'ll stop you in your tracks. I\'m all about passion, music, and living authentically.',
    currentVibe: 'Sexy',
    images: [
      'https://images.unsplash.com/photo-1695048994291-2e96839a0a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWR1Y3RpdmUlMjBnaXJsJTIwcG9ydHJhaXQlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA1OTIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1730283193559-5f9db56d3430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwbW9kZWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTE5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1561450863-83d1391238bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBtb2RlbCUyMGdpcmwlMjBnbGFtb3JvdXN8ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Let\'s be honest',
        answer: 'I\'m confident in who I am and what I bring. Looking for someone who matches that energy'
      },
      {
        question: 'What turns me on',
        answer: 'Creativity, passion, and someone who isn\'t afraid to be vulnerable'
      }
    ],
    interests: ['Music', 'Performing', 'Fashion', 'Soul Food'],
    isOnline: true
  },
  {
    id: '19',
    name: 'Maxine',
    age: 25,
    height: '5\'5"',
    weight: '120 lbs',
    location: 'Nashville, TN',
    bio: 'Country music songwriter with a heart full of stories. Looking for someone to write new chapters with.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1561450863-83d1391238bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHNleHklMjBpbnN0YWdyYW0lMjBnaXJsfGVufDF8fHx8MTc3MjA1OTc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1491234710240-3113bbcc62c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjB5b3VuZyUyMGluc3RhZ3JhbSUyMG1vZGVsfGVufDF8fHx8MTc3MjA1OTc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1759873911531-f6ea6a178378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB5b3VuZyUyMG1vZGVsJTIwZ2lybHxlbnwxfHx8fDE3NzIwNTk3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m into',
        answer: 'Deep conversations, dive bars, and people who appreciate the simple things'
      },
      {
        question: 'My vibe',
        answer: 'Easy-going, genuine, and open to whatever feels right'
      }
    ],
    interests: ['Songwriting', 'Guitar', 'Live Music', 'Whiskey'],
    isOnline: false,
    featured: true
  },
  {
    id: '20',
    name: 'Amara',
    age: 24,
    location: 'Houston, TX',
    bio: 'Doctor by profession, adrenaline junkie by passion. I save lives and take risks in equal measure.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1654760314824-c10d23139cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZmVtYWxlJTIwbW9kZWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzIwNTkxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1690960912572-ebd856e3c7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwaW5zdGFncmFtJTIwZ2lybHxlbnwxfHx8fDE3NzIwNTkxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1596602550873-8160a9d9bd97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBtb2RlbCUyMGZhY2UlMjBzZW5zdWFsfGVufDF8fHx8MTc3MjA1OTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'I\'m being honest about',
        answer: 'I\'m intense, driven, and looking for someone who can handle both sides of me'
      },
      {
        question: 'What excites me',
        answer: 'Intelligent conversation, spontaneous adventures, and raw honesty'
      }
    ],
    interests: ['Medicine', 'Skydiving', 'Rock Climbing', 'Travel'],
    isOnline: true
  },
  {
    id: '21',
    name: 'Kaia',
    age: 26,
    height: '5\'7"',
    weight: '128 lbs',
    location: 'Honolulu, HI',
    bio: 'Surf instructor living the island dream. Life\'s better in board shorts and bare feet.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1560322259-830777d84394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBnaXJsJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1610360665397-c78136fff4e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWR1Y3RpdmUlMjB3b21hbiUyMG1vZGVsJTIwcGhvdG98ZW58MXx8fHwxNzcyMDU5MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1666112218030-c72dbe407cb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBmZW1hbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m about',
        answer: 'Good vibes, ocean sunrises, and living in the moment'
      },
      {
        question: 'I\'m looking for',
        answer: 'Someone who\'s down to try new things and doesn\'t take life too seriously'
      }
    ],
    interests: ['Surfing', 'Beach Volleyball', 'Ukulele', 'Island Life'],
    isOnline: true,
    featured: true
  },
  {
    id: '22',
    name: 'Celeste',
    age: 26,
    location: 'Phoenix, AZ',
    bio: 'Interior designer creating beautiful spaces. I believe your environment should reflect your truth.',
    currentVibe: 'Classy',
    images: [
      'https://images.unsplash.com/photo-1762114468187-971a71a5fe70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwd29tYW4lMjBoZWFkc2hvdCUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDU5MTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1696622102812-1c69e89d4ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBpbmZsdWVuY2VyJTIwc2V4eXxlbnwxfHx8fDE3NzIwNTkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1727934403995-90cd67a658ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBtb2RlbCUyMHdvbWFuJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIwNTkxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'Right now I\'m craving',
        answer: 'Exploring new cities, discovering hidden gems, and sharing it with someone special'
      },
      {
        question: 'My travel style',
        answer: 'Boutique hotels, local cuisine, and getting lost in beautiful places'
      }
    ],
    interests: ['Design', 'Travel', 'Architecture', 'Wine Tasting'],
    isOnline: false
  },
  {
    id: '23',
    name: 'River',
    age: 25,
    location: 'Boulder, CO',
    bio: 'Environmental scientist fighting the good fight. Passionate about the planet and people who care.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1759003527318-678b19902da2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGx1cmluZyUyMGZlbWFsZSUyMG1vZGVsJTIwc2hvdHxlbnwxfHx8fDE3NzIwNTkyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1712212601990-8274d5566304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZmFzaGlvbiUyMHBvcnRyYWl0JTIwZ2lybHxlbnwxfHx8fDE3NzIwNTkyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1730283193559-5f9db56d3430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3JnZW91cyUyMG1vZGVsJTIwd29tYW4lMjBzZXh5fGVufDF8fHx8MTc3MjA1OTIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What drives me',
        answer: 'Making a difference and connecting with people who share my passion for change'
      },
      {
        question: 'My ideal partner',
        answer: 'Someone conscious, driven, and ready to make the world better together'
      }
    ],
    interests: ['Sustainability', 'Hiking', 'Activism', 'Organic Living'],
    isOnline: true
  },
  // Male Profiles
  {
    id: '101',
    name: 'Marcus',
    age: 32,
    height: '6\'2"',
    weight: '195 lbs',
    location: 'Los Angeles, CA',
    bio: 'Film producer who believes in authentic connections. Life\'s too short for games—let\'s be real with each other.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1735777192155-dec95124a585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA2MTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1643138818940-c85d78c3f0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwbWFuJTIwbW9kZWwlMjBwaG90b3xlbnwxfHx8fDE3NzIwNjEyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1624532450286-b13c5545d1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwbWFsZSUyMG1vZGVsJTIwZmFjZXxlbnwxfHx8fDE3NzIwNjEyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I\'m looking for',
        answer: 'Someone who knows what they want and isn\'t afraid to go after it'
      },
      {
        question: 'Being honest about',
        answer: 'I want chemistry, connection, and zero drama'
      }
    ],
    interests: ['Film', 'Travel', 'Fine Dining', 'Fitness'],
    isOnline: true,
    gender: 'Male',
    verified: true
  },
  {
    id: '102',
    name: 'Tyler',
    age: 28,
    height: '5\'11"',
    weight: '180 lbs',
    location: 'Miami, FL',
    bio: 'Entrepreneur and beach enthusiast. I live for spontaneous adventures and genuine vibes.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1565679871226-33cfa91bedae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBndXklMjBtb2RlbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA2MTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1709371525938-080a46bc4e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjBtYWxlJTIwbW9kZWwlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA2MTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1640463025633-693268423e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWdnZWQlMjBoYW5kc29tZSUyMG1hbiUyMHBob3RvfGVufDF8fHx8MTc3MjA2MTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My vibe is',
        answer: 'Spontaneous nights that turn into unforgettable stories'
      },
      {
        question: 'What gets me going',
        answer: 'Someone who can keep up with my energy and isn\'t afraid to get a little wild'
      }
    ],
    interests: ['Surfing', 'Nightlife', 'Entrepreneurship', 'Travel'],
    isOnline: false
  },
  {
    id: '103',
    name: 'Dominic',
    age: 35,
    height: '6\'3"',
    weight: '210 lbs',
    location: 'New York, NY',
    bio: 'Investment banker with a taste for the finer things. I appreciate ambition, style, and intellectual conversation.',
    currentVibe: 'Generous',
    images: [
      'https://images.unsplash.com/photo-1751246671934-a92f0a165a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbWFsZSUyMG1vZGVsJTIwc2hvdHxlbnwxfHx8fDE3NzIwNjEyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1616273313747-cb6841ac108d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29kJTIwbG9va2luZyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjAzNjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1565144483867-8fb6518d668f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMHlvdW5nJTIwbWFuJTIwbW9kZWx8ZW58MXx8fHwxNzcyMDYxMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I can offer',
        answer: 'Luxury experiences, deep conversations, and a partner who values your ambitions'
      },
      {
        question: 'Being real about',
        answer: 'I work hard and play harder—looking for someone who appreciates both sides'
      }
    ],
    interests: ['Fine Dining', 'Wine', 'Art Galleries', 'Travel'],
    isOnline: true
  },
  {
    id: '104',
    name: 'Jake',
    age: 26,
    height: '6\'0"',
    weight: '185 lbs',
    location: 'Austin, TX',
    bio: 'Music producer and festival junkie. Looking for someone who loves good vibes and isn\'t afraid to be themselves.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1594194251926-0e406e733a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBtYWxlJTIwbW9kZWwlMjBpbnN0YWdyYW18ZW58MXx8fHwxNzcyMDYxMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1630411996618-02c53a95b141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXQlMjBhdHRyYWN0aXZlJTIwbWFuJTIwcGhvdG98ZW58MXx8fHwxNzcyMDYxMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1740948267260-a738065a4b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZ3V5JTIwcG9ydHJhaXQlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA2MTI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My perfect night',
        answer: 'Live music, good company, and wherever the night takes us'
      },
      {
        question: 'What I value',
        answer: 'Authenticity over everything—just be yourself'
      }
    ],
    interests: ['Music Production', 'Concerts', 'Coffee', 'Vinyl Records'],
    isOnline: true
  },
  {
    id: '105',
    name: 'Roman',
    age: 31,
    height: '6\'1"',
    weight: '190 lbs',
    location: 'Chicago, IL',
    bio: 'Personal trainer and fitness enthusiast. I believe in taking care of yourself—mind, body, and soul.',
    currentVibe: 'Sexy',
    images: [
      'https://images.unsplash.com/photo-1758598497190-f609ecba227b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjBoYW5kc29tZSUyMG1hbGUlMjBmYWNlfGVufDF8fHx8MTc3MjA2MTI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1709371525938-080a46bc4e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwbWFuJTIwbW9kZWwlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA2MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1585923491671-0ced430efe9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMGd1eSUyMG1vZGVsJTIwc2hvdHxlbnwxfHx8fDE3NzIwNjEyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What turns me on',
        answer: 'Confidence, ambition, and someone who takes care of themselves'
      },
      {
        question: 'Let\'s be honest',
        answer: 'Physical chemistry matters, but so does the mental connection'
      }
    ],
    interests: ['Fitness', 'Nutrition', 'Hiking', 'Wellness'],
    isOnline: false,
    gender: 'Male',
    verified: true
  },
  {
    id: '106',
    name: 'Dante',
    age: 29,
    height: '5\'10"',
    weight: '175 lbs',
    location: 'Brooklyn, NY',
    bio: 'Photographer capturing life\'s raw moments. Looking for someone who sees beauty in authenticity.',
    currentVibe: 'Classy',
    images: [
      'https://images.unsplash.com/photo-1628836816270-7190b3b37edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBtYW4lMjBwb3J0cmFpdCUyMHBob3RvfGVufDF8fHx8MTc3MjA2MTI2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1744535814651-4eef500f7a39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwZ3V5JTIwbW9kZWwlMjBwaWN0dXJlfGVufDF8fHx8MTc3MjA2MTI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1636261377189-793a2bc43422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwbWFsZSUyMGZhY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNjEyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What inspires me',
        answer: 'Art, culture, and people who aren\'t afraid to show their true colors'
      },
      {
        question: 'My type',
        answer: 'Someone with depth, style, and a little mystery'
      }
    ],
    interests: ['Photography', 'Art', 'Fashion', 'Street Culture'],
    isOnline: true
  },
  {
    id: '107',
    name: 'Cole',
    age: 27,
    height: '6\'1"',
    weight: '188 lbs',
    location: 'San Diego, CA',
    bio: 'Surfer and software developer. I code by day and catch waves by sunset. Life\'s about balance.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGhlYWRzaG90JTIwcGhvdG98ZW58MXx8fHwxNzcyMDYxMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1745824785860-536ed6f6023d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwbWFsZSUyMG1vZGVsJTIwcGljdHVyZXxlbnwxfHx8fDE3NzIwNjEyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1601397217569-d2413068e508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29kJTIwbG9va2luZyUyMGd1eSUyMG1vZGVsfGVufDF8fHx8MTc3MjA2MTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My ideal day',
        answer: 'Morning surf, afternoon coding at a beachside cafe, evening with good company'
      },
      {
        question: 'What I\'m after',
        answer: 'Easy-going vibes and someone who loves the ocean as much as I do'
      }
    ],
    interests: ['Surfing', 'Tech', 'Beach Life', 'Travel'],
    isOnline: true
  },
  {
    id: '108',
    name: 'Xavier',
    age: 34,
    height: '6\'2"',
    weight: '200 lbs',
    location: 'Las Vegas, NV',
    bio: 'Club owner and nightlife connoisseur. I built my empire from scratch—looking for someone who matches my hustle.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1745270008562-318fb7dbfe1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXQlMjBoYW5kc29tZSUyMG1hbiUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDYxMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1758523672156-7a7b62d701f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwbWFsZSUyMHBvcnRyYWl0JTIwc2hvdHxlbnwxfHx8fDE3NzIwNjEyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1584999734482-0361aecad844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBndXklMjBmYWNlJTIwcGhvdG98ZW58MXx8fHwxNzcyMDYxMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I bring',
        answer: 'VIP treatment, unforgettable nights, and a lifestyle most only dream about'
      },
      {
        question: 'Being honest',
        answer: 'I want someone confident enough to handle the spotlight'
      }
    ],
    interests: ['Nightlife', 'Business', 'Luxury Cars', 'Entertainment'],
    isOnline: false,
    gender: 'Male',
    verified: true
  },
  {
    id: '109',
    name: 'Leo',
    age: 30,
    height: '5\'11"',
    weight: '182 lbs',
    location: 'Seattle, WA',
    bio: 'Architect with a creative soul. I design spaces and seek meaningful connections in them.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1641466578751-46bfd407146a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjBtYW4lMjBtb2RlbCUyMHBob3RvfGVufDF8fHx8MTc3MjA2MTI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1705247815016-fb23ebf07a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwaGFuZHNvbWUlMjBndXklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNjEyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1616641611019-0830e6383a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwbWFuJTIwbW9kZWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzIwNjEyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What matters to me',
        answer: 'Substance, creativity, and building something real together'
      },
      {
        question: 'Looking for',
        answer: 'Someone intelligent, driven, and ready for something genuine'
      }
    ],
    interests: ['Architecture', 'Design', 'Coffee', 'Museums'],
    isOnline: true
  },
  {
    id: '110',
    name: 'Ace',
    age: 25,
    height: '6\'0"',
    weight: '178 lbs',
    location: 'Portland, OR',
    bio: 'Tattoo artist and creative spirit. I believe in self-expression and living unapologetically.',
    currentVibe: 'Naughty',
    images: [
      'https://images.unsplash.com/photo-1615848266524-c1e03af5f4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwZ3V5JTIwY2xvc2V1cCUyMHNob3R8ZW58MXx8fHwxNzcyMDYxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1571335734354-2b6148195f75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbGUlMjBmYWNlJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIwNjEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1619306844778-25e4429cafa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBtYW4lMjBtb2RlbCUyMGluc3RhZ3JhbXxlbnwxfHx8fDE3NzIwNjEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My vibe',
        answer: 'Late nights, deep talks, and a little mischief'
      },
      {
        question: 'What I want',
        answer: 'Someone who\'s not afraid to get a little wild and be themselves'
      }
    ],
    interests: ['Tattoo Art', 'Music', 'Skateboarding', 'Alternative Culture'],
    isOnline: true
  },
  {
    id: '111',
    name: 'Julian',
    age: 33,
    height: '6\'1"',
    weight: '192 lbs',
    location: 'Boston, MA',
    bio: 'Doctor specializing in emergency medicine. I save lives by day and seek connection by night.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29kJTIwbG9va2luZyUyMG1hbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNjEyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1758523672156-7a7b62d701f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwbWFuJTIwZmFjZSUyMHNob3R8ZW58MXx8fHwxNzcyMDYxMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1662971640032-ed60396966a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMGd1eSUyMGNsb3NldXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNjEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What drives me',
        answer: 'Helping people and finding someone who understands the demands of my career'
      },
      {
        question: 'Looking for',
        answer: 'Intelligence, empathy, and someone who values genuine connection'
      }
    ],
    interests: ['Medicine', 'Running', 'Reading', 'Cooking'],
    isOnline: false
  },
  {
    id: '112',
    name: 'Kai',
    age: 24,
    height: '5\'10"',
    weight: '170 lbs',
    location: 'Honolulu, HI',
    bio: 'Dive instructor living the island life. I\'m all about ocean vibes, adventure, and living in the moment.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1647410949938-bbf5bc102906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwbWFsZSUyMGhlYWRzaG90JTIwcGhvdG98ZW58MXx8fHwxNzcyMDYxMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1625502664816-4938b1d0d685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbWFuJTIwbW9kZWwlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA2MTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1590242156269-1bd22c1b8f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBhdHRyYWN0aXZlJTIwZ3V5JTIwcGljdHVyZXxlbnwxfHx8fDE3NzIwNjEyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My happy place',
        answer: 'Underwater, exploring reefs, or watching the sunset from the beach'
      },
      {
        question: 'What I\'m after',
        answer: 'Someone spontaneous who loves the ocean and adventure'
      }
    ],
    interests: ['Scuba Diving', 'Surfing', 'Marine Life', 'Island Living'],
    isOnline: true
  },
  {
    id: '113',
    name: 'Blaze',
    age: 28,
    height: '6\'0"',
    weight: '185 lbs',
    location: 'Nashville, TN',
    bio: 'Country musician chasing dreams and good times. Life\'s a song—let\'s write it together.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1693756222675-a4b88ff09975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjBoYW5kc29tZSUyMG1hbiUyMHNob3R8ZW58MXx8fHwxNzcyMDYxMjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1607613992484-4df4d97b48fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29kJTIwbG9va2luZyUyMG1hbiUyMGZhY2V8ZW58MXx8fHwxNzcyMDYxMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1591849401653-f2b4f6383915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwbWFsZSUyMG1vZGVsJTIwaW5zdGFncmFtfGVufDF8fHx8MTc3MjA2MTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My vibe',
        answer: 'Honky-tonks, late-night jams, and spontaneous road trips'
      },
      {
        question: 'What I need',
        answer: 'Someone who loves music, adventure, and isn\'t afraid to dance'
      }
    ],
    interests: ['Music', 'Guitar', 'Concerts', 'Southern Culture'],
    isOnline: true,
    gender: 'Male',
    verified: true
  },
  {
    id: '114',
    name: 'Sterling',
    age: 36,
    height: '6\'3"',
    weight: '205 lbs',
    location: 'San Francisco, CA',
    bio: 'Tech executive building the future. I appreciate intelligence, ambition, and meaningful conversation.',
    currentVibe: 'Generous',
    images: [
      'https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMGd1eSUyMHBob3RvJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDYxMjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1618256225993-969b636364a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwbWFuJTIwY2xvc2V1cCUyMGZhY2V8ZW58MXx8fHwxNzcyMDYxMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1721818377933-70dc2d3eeeea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXQlMjBoYW5kc29tZSUyMG1hbGUlMjBtb2RlbHxlbnwxfHx8fDE3NzIwNjEyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I offer',
        answer: 'A life of experiences, travel, and someone who supports your dreams'
      },
      {
        question: 'Being real',
        answer: 'I\'m successful and looking for an equal partner, not someone to impress'
      }
    ],
    interests: ['Technology', 'Investing', 'Wine Country', 'Innovation'],
    isOnline: false
  },
  {
    id: '115',
    name: 'Phoenix',
    age: 27,
    height: '6\'1"',
    weight: '186 lbs',
    location: 'Denver, CO',
    bio: 'Snowboard instructor and mountain lover. I live for fresh powder and authentic connections.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1673841525999-16a4621db0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBndXklMjBtb2RlbCUyMGZhY2V8ZW58MXx8fHwxNzcyMDYxMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1623861322369-c223d0cca97f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwYXR0cmFjdGl2ZSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA2MTI2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1656587324100-6bb6a6223a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjBndXklMjBjbG9zZXVwJTIwcGhvdG98ZW58MXx8fHwxNzcyMDYxMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My perfect day',
        answer: 'Fresh tracks in the morning, apres-ski in the afternoon, cozy nights by the fire'
      },
      {
        question: 'Looking for',
        answer: 'Someone who loves adventure and isn\'t afraid of a little altitude'
      }
    ],
    interests: ['Snowboarding', 'Mountain Life', 'Hiking', 'Craft Beer'],
    isOnline: true
  },
  {
    id: '116',
    name: 'Cash',
    age: 30,
    height: '6\'2"',
    weight: '198 lbs',
    location: 'Dallas, TX',
    bio: 'Real estate mogul with Southern charm. I build empires and appreciate people who know their worth.',
    currentVibe: 'Classy',
    images: [
      'https://images.unsplash.com/photo-1722934854071-4127cacba08c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMG1vZGVsJTIwcGljdHVyZXxlbnwxfHx8fDE3NzIwNjEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1659223165847-f131ed27941c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwZ3V5JTIwaGVhZHNob3QlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjA2MTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1624532450286-b13c5545d1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwbWFsZSUyMHBvcnRyYWl0JTIwcGhvdG98ZW58MXx8fHwxNzcyMDYxMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I value',
        answer: 'Ambition, style, and someone who commands attention when they walk in a room'
      },
      {
        question: 'Being honest',
        answer: 'I\'m traditional in some ways—I believe in treating someone right and expect the same'
      }
    ],
    interests: ['Real Estate', 'Country Clubs', 'Steakhouses', 'Whiskey'],
    isOnline: true
  },
  {
    id: '117',
    name: 'River',
    age: 26,
    height: '5\'11"',
    weight: '176 lbs',
    location: 'Boulder, CO',
    bio: 'Environmental scientist and outdoor enthusiast. Saving the planet one adventure at a time.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29kJTIwbG9va2luZyUyMGd1eSUyMGZhY2V8ZW58MXx8fHwxNzcyMDYxMjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1659223165847-f131ed27941c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBtYW4lMjBmYWNlJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzIwNjEyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1662310474796-8c4b17a84eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXQlMjBtYWxlJTIwbW9kZWwlMjBzaG90fGVufDF8fHx8MTc3MjA2MTI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What matters most',
        answer: 'The environment, genuine connections, and living with purpose'
      },
      {
        question: 'Looking for',
        answer: 'Someone who cares about the world and wants to make it better together'
      }
    ],
    interests: ['Environmentalism', 'Hiking', 'Rock Climbing', 'Sustainability'],
    isOnline: false
  },
  {
    id: '118',
    name: 'Maverick',
    age: 29,
    height: '6\'0"',
    weight: '183 lbs',
    location: 'Phoenix, AZ',
    bio: 'Motorcycle enthusiast and thrill seeker. Life\'s an adventure—hop on and let\'s ride.',
    currentVibe: 'Naughty',
    images: [
      'https://images.unsplash.com/photo-1633715399148-51aa5cac86b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMGF0dHJhY3RpdmUlMjBndXklMjBtb2RlbHxlbnwxfHx8fDE3NzIwNjEyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1701318227304-24c9e8c0ee88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwbWFuJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNjEyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1577490618554-81f79dbf5a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNjdWxpbmUlMjBtYWxlJTIwY2xvc2V1cCUyMGZhY2V8ZW58MXx8fHwxNzcyMDYxMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'My kind of night',
        answer: 'Desert rides, dive bars, and wherever the road takes us'
      },
      {
        question: 'What I\'m after',
        answer: 'Someone fearless who\'s down for spontaneous adventures and good times'
      }
    ],
    interests: ['Motorcycles', 'Road Trips', 'Desert Life', 'Rock Music'],
    isOnline: true
  },
  {
    id: '119',
    name: 'Atlas',
    age: 38,
    height: '6\'4"',
    weight: '215 lbs',
    location: 'Washington, DC',
    bio: 'Lobbyist and political strategist. I navigate power circles and seek someone who matches my intellect.',
    currentVibe: 'Classy',
    images: [
      'https://images.unsplash.com/photo-1658196253529-bb1f28a6afd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwZ3V5JTIwbW9kZWwlMjBpbnN0YWdyYW18ZW58MXx8fHwxNzcyMDYxMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1643138818940-c85d78c3f0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0aXZlJTIwaGFuZHNvbWUlMjBtYW4lMjBwaG90b3xlbnwxfHx8fDE3NzIwNjEyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1624532450286-b13c5545d1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3QlMjBtYWxlJTIwZmFjZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA2MTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I appreciate',
        answer: 'Intelligence, sophistication, and someone who can hold their own in any room'
      },
      {
        question: 'Being honest',
        answer: 'I have high standards because I offer the same in return'
      }
    ],
    interests: ['Politics', 'Policy', 'Fine Dining', 'Classical Music'],
    isOnline: true
  },
  {
    id: '120',
    name: 'Cruz',
    age: 23,
    height: '5\'10"',
    weight: '172 lbs',
    location: 'San Antonio, TX',
    bio: 'Personal stylist and fashion lover. I help people look their best and want someone who appreciates style.',
    currentVibe: 'Sexy',
    images: [
      'https://images.unsplash.com/photo-1615848266524-c1e03af5f4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29kJTIwbG9va2luZyUyMGd1eSUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDYxMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1735777192155-dec95124a585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbGUlMjBtb2RlbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA2MTI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1565144483867-8fb6518d668f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMHlvdW5nJTIwbWFuJTIwbW9kZWx8ZW58MXx8fHwxNzcyMDYxMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    prompts: [
      {
        question: 'What I love',
        answer: 'Fashion, confidence, and people who aren\'t afraid to express themselves'
      },
      {
        question: 'My type',
        answer: 'Someone stylish, confident, and knows how to turn heads'
      }
    ],
    interests: ['Fashion', 'Shopping', 'Social Media', 'Nightlife'],
    isOnline: false
  },
  {
    id: '101',
    name: 'Isabelle',
    age: 27,
    height: '5\'9"',
    weight: '135 lbs',
    location: 'Manhattan, NY',
    bio: 'Art curator with a passion for nightlife and meaningful connections. I love exploring the city and meeting interesting people.',
    currentVibe: 'Classy',
    images: [
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'Tonight I want to',
        answer: 'Meet someone who can keep up with me over cocktails and great conversation'
      }
    ],
    interests: ['Art', 'Wine', 'Travel', 'Jazz'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Meatpacking District'
  },
  {
    id: '102',
    name: 'Vanessa',
    age: 24,
    height: '5\'6"',
    weight: '122 lbs',
    location: 'Brooklyn, NY',
    bio: 'Fashion blogger who loves spontaneous adventures. Currently exploring the best rooftop bars in the city.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'Right now',
        answer: 'Out living my best life and looking for someone to join the fun'
      }
    ],
    interests: ['Fashion', 'Nightlife', 'Photography', 'Cocktails'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Lower East Side'
  },
  {
    id: '103',
    name: 'Alexis',
    age: 25,
    height: '5\'7"',
    weight: '128 lbs',
    location: 'Manhattan, NY',
    bio: 'Finance professional by day, social butterfly by night. I believe in working hard and playing harder.',
    currentVibe: 'Sexy',
    images: [
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXh5JTIwYnVzaW5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzZXh5JTIwYnVzaW5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'What I want tonight',
        answer: 'Chemistry, confidence, and someone who isn\'t afraid to make a move'
      }
    ],
    interests: ['Finance', 'Fitness', 'Fine Dining', 'Travel'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Tribeca'
  },
  {
    id: '104',
    name: 'Bianca',
    age: 26,
    height: '5\'8"',
    weight: '132 lbs',
    location: 'Los Angeles, CA',
    bio: 'Yoga instructor and wellness enthusiast. Looking for genuine vibes and real connections in the city.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx5b2dhJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTkxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'Current vibe',
        answer: 'Enjoying sunset drinks and good energy at a rooftop lounge'
      }
    ],
    interests: ['Yoga', 'Wellness', 'Beaches', 'Organic Food'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Silver Lake'
  },
  {
    id: '105',
    name: 'Lila',
    age: 23,
    height: '5\'5"',
    weight: '120 lbs',
    location: 'Miami, FL',
    bio: 'Dancer and free spirit. I live for the moment and love meeting people who share my energy.',
    currentVibe: 'Naughty',
    images: [
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZXIlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYW5jZXIlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'Tonight',
        answer: 'Dancing the night away and seeing where the vibe takes me'
      }
    ],
    interests: ['Dancing', 'Music', 'Nightlife', 'Art'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Wynwood'
  },
  {
    id: '106',
    name: 'Serena',
    age: 28,
    height: '5\'9"',
    weight: '138 lbs',
    location: 'Manhattan, NY',
    bio: 'Luxury real estate agent who appreciates the finer things. Looking for someone who matches my ambition and sophistication.',
    currentVibe: 'Spoil Me',
    images: [
      'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'What I deserve',
        answer: 'The best of everything - and someone who understands that'
      }
    ],
    interests: ['Real Estate', 'Luxury Travel', 'Fine Dining', 'Fashion'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Upper East Side'
  },
  {
    id: '107',
    name: 'Cassandra',
    age: 25,
    height: '5\'7"',
    weight: '127 lbs',
    location: 'Brooklyn, NY',
    bio: 'Bartender and mixologist creating unique experiences. I know all the best spots and love showing people a good time.',
    currentVibe: 'Wild',
    images: [
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxiYXJ0ZW5kZXIlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjA1OTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'Right now',
        answer: 'Working my shift but always down to meet someone interesting after'
      }
    ],
    interests: ['Mixology', 'Nightlife', 'Music', 'Food'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Williamsburg'
  },
  {
    id: '108',
    name: 'Zara',
    age: 24,
    height: '5\'6"',
    weight: '124 lbs',
    location: 'Los Angeles, CA',
    bio: 'Music producer and creative soul. I love late nights in the studio and even later nights exploring the city.',
    currentVibe: 'Chill',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwd29tYW58ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMHByb2R1Y2VyJTIwd29tYW58ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'Current mood',
        answer: 'Vibing at a listening party in the Arts District'
      }
    ],
    interests: ['Music', 'Production', 'Art', 'Coffee'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Downtown LA'
  },
  {
    id: '109',
    name: 'Tatiana',
    age: 27,
    height: '5\'8"',
    weight: '130 lbs',
    location: 'Miami, FL',
    bio: 'Model and entrepreneur building my brand. I appreciate confidence, style, and people who know what they want.',
    currentVibe: 'Sexy',
    images: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2RlbCUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'Tonight',
        answer: 'At a fashion event in Brickell, looking fabulous and ready to connect'
      }
    ],
    interests: ['Modeling', 'Fashion', 'Business', 'Fitness'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Brickell'
  },
  {
    id: '110',
    name: 'Naomi',
    age: 26,
    height: '5\'10"',
    weight: '142 lbs',
    location: 'Manhattan, NY',
    bio: 'Tech executive who loves balancing work and play. Currently enjoying the NYC nightlife scene.',
    currentVibe: 'Serious',
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZXhlY3V0aXZlJTIwd29tYW58ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNoJTIwZXhlY3V0aXZlJTIwd29tYW58ZW58MXx8fHwxNzcyMDU5MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    prompts: [
      {
        question: 'What I\'m looking for',
        answer: 'Someone intelligent and driven who can keep up with me intellectually and socially'
      }
    ],
    interests: ['Technology', 'Startups', 'Wine', 'Travel'],
    isOnline: true,
    gender: 'Female',
    isOut: true,
    currentLocation: 'Chelsea'
  }
];