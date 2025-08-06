import { useState, useEffect } from 'react';

export default function Home() {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Example: Fetch trending YouTube videos (placeholder)
  useEffect(() => {
    async function fetchTrending() {
      // This is a placeholder function. Real API calls require YouTube API key integration.
      const mockData = [
        {
          id: '1',
          title: 'Viral Video 1',
          thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
          id: '2',
          title: 'Viral Video 2',
          thumbnail: 'https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
        },
      ];
      setTrendingVideos(mockData);
      setLoading(false);
    }
    fetchTrending();
  }, []);

  if (loading) return <div>Loading trending content...</div>;

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔥 Digital Titan Empire 🔥</h1>
      <p>Welcome to your viral content money machine!</p>
      <section>
        <h2>Trending Videos</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {trendingVideos.map(video => (
            <li key={video.id} style={{ marginBottom: '20px' }}>
              <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0070f3' }}>
                <img src={video.thumbnail} alt={video.title} style={{ width: '320px', borderRadius: '8px' }} />
                <h3>{video.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
