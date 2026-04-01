import { useState } from 'react';
import { Camera, Video, X, Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { User, mockUsers } from '../data/mockUsers';

export interface Post {
  id: string;
  user: User;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  timestamp: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
}

// Mock posts data
const mockPosts: Post[] = [
  {
    id: '1',
    user: mockUsers[0],
    content: 'Last night was insane 🔥 Best crowd ever!',
    mediaUrl: 'https://images.unsplash.com/photo-1772858106884-75371f00914e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBwYXJ0eSUyMHBlb3BsZSUyMGRhbmNpbmd8ZW58MXx8fHwxNzc1MDg1MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    mediaType: 'image',
    timestamp: '2h ago',
    likes: 127,
    comments: 23,
    isLiked: false
  },
  {
    id: '2',
    user: mockUsers[1],
    content: 'Celebrating with the crew tonight 🥂✨',
    mediaUrl: 'https://images.unsplash.com/photo-1758523981466-f138fe0bad69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY2VsZWJyYXRpbmclMjBwYXJ0eSUyMG5pZ2h0fGVufDF8fHx8MTc3NTA4NTEzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    mediaType: 'image',
    timestamp: '4h ago',
    likes: 84,
    comments: 12,
    isLiked: true
  },
  {
    id: '3',
    user: mockUsers[2],
    content: 'Rooftop vibes with the best people 🌃🎉',
    mediaUrl: 'https://images.unsplash.com/photo-1695128609797-fb5d713b1fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcGFydHklMjBjcm93ZCUyMHBlb3BsZXxlbnwxfHx8fDE3NzUwODUxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    mediaType: 'image',
    timestamp: '6h ago',
    likes: 203,
    comments: 45,
    isLiked: false
  }
];

interface TheSceneProps {
  onProfileClick: (userId: string) => void;
}

export function TheScene({ onProfileClick }: TheSceneProps) {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [selectedMediaType, setSelectedMediaType] = useState<'image' | 'video' | null>(null);

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleCreatePost = () => {
    if (!newPostContent.trim() && !selectedMedia) return;

    const newPost: Post = {
      id: Date.now().toString(),
      user: mockUsers[0], // Current user
      content: newPostContent,
      mediaUrl: selectedMedia || undefined,
      mediaType: selectedMediaType || undefined,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      isLiked: false
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setSelectedMedia(null);
    setSelectedMediaType(null);
    setShowCreatePost(false);
  };

  const handleMediaSelect = (type: 'image' | 'video') => {
    // In a real app, this would open a file picker
    // For now, we'll use a placeholder
    if (type === 'image') {
      setSelectedMedia('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800');
      setSelectedMediaType('image');
    } else {
      setSelectedMedia('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800');
      setSelectedMediaType('video');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Create Post Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowCreatePost(!showCreatePost)}
          className="w-full bg-white border border-neutral-200 p-4 text-left hover:bg-neutral-50 transition-colors"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.9375rem',
            color: '#737373'
          }}
        >
          share some shit
        </button>
      </div>

      {/* Create Post Form */}
      <AnimatePresence>
        {showCreatePost && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 bg-white border border-neutral-200 overflow-hidden"
          >
            <div className="p-4">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Share something with the community..."
                className="w-full p-3 border border-neutral-200 focus:border-neutral-400 focus:outline-none resize-none"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  minHeight: '120px'
                }}
                autoFocus
              />

              {selectedMedia && (
                <div className="mt-4 relative">
                  <img 
                    src={selectedMedia} 
                    alt="Selected media" 
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => {
                      setSelectedMedia(null);
                      setSelectedMediaType(null);
                    }}
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleMediaSelect('image')}
                    className="p-2 hover:bg-neutral-100 transition-colors rounded-full"
                    title="Add photo"
                  >
                    <Camera className="w-5 h-5 text-neutral-600" />
                  </button>
                  <button
                    onClick={() => handleMediaSelect('video')}
                    className="p-2 hover:bg-neutral-100 transition-colors rounded-full"
                    title="Add video"
                  >
                    <Video className="w-5 h-5 text-neutral-600" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowCreatePost(false)}
                    className="px-6 py-2 border border-neutral-200 hover:bg-neutral-50 transition-colors"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim() && !selectedMedia}
                    className="px-6 py-2 bg-black text-white hover:bg-neutral-800 transition-colors disabled:bg-neutral-300 disabled:cursor-not-allowed"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border border-neutral-200">
            {/* Post Header */}
            <div className="p-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onProfileClick(post.user.id)}
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src={post.user.images[0]}
                    alt={post.user.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </button>
                <div>
                  <button
                    onClick={() => onProfileClick(post.user.id)}
                    className="hover:underline"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      fontWeight: 600
                    }}
                  >
                    {post.user.name}
                  </button>
                  <p
                    className="text-neutral-500"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem'
                    }}
                  >
                    {post.timestamp}
                  </p>
                </div>
              </div>
              <button className="p-2 hover:bg-neutral-100 transition-colors rounded-full">
                <MoreVertical className="w-5 h-5 text-neutral-600" />
              </button>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-4">
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6
                }}
              >
                {post.content}
              </p>
            </div>

            {/* Post Media */}
            {post.mediaUrl && (
              <div>
                {post.mediaType === 'image' ? (
                  <img
                    src={post.mediaUrl}
                    alt="Post media"
                    className="w-full max-h-[500px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[400px] bg-neutral-900 flex items-center justify-center">
                    <Video className="w-16 h-16 text-white opacity-50" />
                  </div>
                )}
              </div>
            )}

            {/* Post Actions */}
            <div className="p-4 border-t border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-2 hover:text-red-500 transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: post.isLiked ? '#ef4444' : '#404040'
                  }}
                >
                  <Heart 
                    className="w-5 h-5" 
                    fill={post.isLiked ? 'currentColor' : 'none'}
                  />
                  {post.likes > 0 && post.likes}
                </button>

                <button
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#404040'
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  {post.comments > 0 && post.comments}
                </button>

                <button
                  className="flex items-center gap-2 hover:text-green-500 transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#404040'
                  }}
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}