import React from 'react'
import './App.css'
import MovieList from './MovieList'

let allMovies = [
    {
      id: 1,
      title: 'THE SUPER MARIO BROS. MOVIE',
      image: 'images/MarioMovie.jpeg',
      overview: 'Mario and Luigi, two plumbers team up with a princess to a battle in the Mushroom Kingdom.',
      rating: 4.4,
    },
    {
      id: 2,
      title: 'Godzilla Minus One',
      image: 'images/godzilla_minus_one.jpg',
      overview: 'After the WWII, Godzilla appeared as if to add insult to damaged Japan, and knock out the country into a negative stage. How will Japan cope with the attack in the most hopeless situation?',
      rating: 4.0,
    },
    {
      id: 3,
      title: 'Nodame cantabile',
      image: 'images/nodame-cantabile-cover.jpg',
      overview: 'The love comedy of Chiaki who is a first class musician and Nodame who is an unkempt piano student girl with no direction in life.',
      rating: 3.8,
    },
    {
      id: 4,
      title: 'Thermae Romae',
      image: 'images/Thermae_romae.jpg',
      overview: 'The story follows an ancient Roman architect named Lucius, who is having trouble coming up with ideas. One day, he discovers a hidden tunnel underneath a spa that leads him to a modern Japanese bath house. Inspired by the innovations found there, he creates his own spa, Roma Thermae, bringing the modern ideas to his time.',
      rating: 3.5,
    },
];


function App () {
  return (
    <div className="App">
      <h1 className="app-title">Movie Review App</h1>
      <MovieList movies={allMovies} />
    </div>
  );
};
 
export default App;
