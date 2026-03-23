import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { X } from 'lucide-react';

interface DebugPanelProps {
  onClose: () => void;
}

export function DebugPanel({ onClose }: DebugPanelProps) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ae1e2212/users`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUsers(data.users);
      } else {
        setError(data.error || 'Failed to fetch users');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="border-b border-neutral-200 p-6 flex items-center justify-between">
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Database Users
            </h2>
            <p className="text-neutral-600 mt-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
              All users currently in the database
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin w-12 h-12 border-4 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
              <p style={{ fontFamily: 'var(--font-sans)' }}>Loading users...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600" style={{ fontFamily: 'var(--font-sans)' }}>
                Error: {error}
              </p>
            </div>
          )}

          {!loading && !error && users.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600" style={{ fontFamily: 'var(--font-sans)' }}>
                No users in database yet
              </p>
            </div>
          )}

          {!loading && !error && users.length > 0 && (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                Total users: <strong>{users.length}</strong>
              </p>
              
              {users.map((user, index) => (
                <div
                  key={user.id}
                  className="border border-neutral-200 p-4 space-y-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-lg">{user.name}</p>
                      <p className="text-sm text-neutral-600">{user.email}</p>
                    </div>
                    {user.images && user.images.length > 0 && (
                      <img
                        src={user.images[0]}
                        alt={user.name}
                        className="w-16 h-16 object-cover"
                      />
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-neutral-600">Gender:</span> {user.gender}
                    </div>
                    <div>
                      <span className="text-neutral-600">Looking for:</span> {user.lookingFor}
                    </div>
                    <div>
                      <span className="text-neutral-600">Vibe:</span> {user.currentVibe}
                    </div>
                    <div>
                      <span className="text-neutral-600">Online:</span> {user.isOnline ? '✓' : '✗'}
                    </div>
                  </div>

                  {user.bio && (
                    <p className="text-sm text-neutral-600 pt-2 border-t border-neutral-100">
                      {user.bio}
                    </p>
                  )}

                  <p className="text-xs text-neutral-400 pt-2">
                    ID: {user.id}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-200 p-6">
          <button
            onClick={fetchUsers}
            disabled={loading}
            className="w-full px-6 py-3 bg-black text-white hover:bg-neutral-800 disabled:opacity-50 transition-colors"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
