import './App.css';

const App = () => {
  const movies = [
    { name: 'The Bourne Ultimatum', watched: true },
    { name: 'Metropolis', watched: false },
    { name: 'There Will Be Blood', watched: true },
  ];

  return (
    <>
      <h1>Movies to Watch</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className={movie.watched ? 'watched' : 'not-watched'}>
            {movie.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;