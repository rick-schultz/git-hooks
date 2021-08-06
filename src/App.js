import { useState, useEffect } from 'react';

export default function App() {
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/rick-schultz/repos'
        );
        const data = await response.json();
        setRepositories(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    const filtered = respositories.filter((repo) => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos`;
  }, [respositories]);

  function handleFavorite(id) {
    const newRepositories = respositories.map((repo) => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositories(newRepositories);
  }

  return (
    <ul>
      {respositories.map((repo) => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span> (Favorito)</span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
        </li>
      ))}
    </ul>
  );
}
