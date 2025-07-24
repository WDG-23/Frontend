import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setError(null);
      setLoading(true);

      try {
        const res = await fetch('https://swapi.tech/api/people', {
          signal: controller.signal,
        });
        if (!res.ok) throw Error('Failed to fetch data');
        const data = await res.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
        if (error.message.startsWith('signal is aborted without reason')) return;
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  console.log(data);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Fetching mit useEffect</h1>
      <ul>{data && data.map((element) => <li key={element.uid}>{element.name}</li>)}</ul>
      {/* {error && <p>Error message: {error}</p>} */}
      {loading && (
        <div className='flex w-52 flex-col gap-4'>
          <div className='skeleton h-32 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
      )}
    </>
  );
}

export default App;
