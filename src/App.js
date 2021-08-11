import './App.css';
import Name from "./components/Name";
import StarRating from "./components/StarRating";
import Profile from "./components/Profile";
import Firecracker from "./components/Firecracker"
import StatusPicker from './components/StatusPicker'
import LanguagePicker from './components/LanguagePicker';

export default function App() {
  const addresses = [
    { first: "Dom", last: "Toretto" },
    { first: "Brian", last: "Oconner" },
    { first: "Mia", last: "Toretto" },
    { first: "Letty", last: "Ortiz" },
    { first: "Roman", last: "Pearce" },
    { first: "Tej", last: "Parker" },
    { first: "Han", last: "Seoul-Oh" }
  ];

  const movies = [
    { id: 'tt0113243', title: 'Hackers', releaseDate: '1995-09-15', rating: 6.2 },
    { id: 'tt0244244', title: 'Swordfish', releaseDate: '2001-05-11', rating: 6.5 },
    { id: 'tt0086567', title: 'WarGames', releaseDate: '1983-06-03', rating: 7.1 },
    { id: 'tt0133093', title: 'The Matrix', releaseDate: '1999-03-24', rating: 8.7 },
    { id: 'tt0151804', title: 'Office Space', releaseDate: '1999-02-19', rating: 7.7 },
  ]

  const staffMembers = [
    {
      name: { first: 'Dom', last: 'Toretto' },
      title: 'Racer',
    },
    {
      name: { first: 'Brian', last: 'Oconner' },
      title: 'Agent',
    },
    {
      name: { first: 'Mia', last: 'Toretto' },
      title: 'Comm Chief',
    },
    {
      name: { first: 'Letty', last: 'Ortiz' },
      title: 'Racer',
    },
    {
      name: { first: 'Roman', last: 'Pearce' },
      title: 'Joker',
    },
    {
      name: { first: 'Tej', last: 'Parker' },
      title: 'Tech Support',
    },
    {
      name: { first: 'Han', last: 'Seoul-Oh' },
      title: 'Loner',
    }
  ]

  return (

    <div className="App">
      <h2>Friends</h2>
      {
        addresses.map((name, index) => {
          return (
            <Name key={index} firstName={name.first} lastName={name.last} />
          );
        })
      }
      <h2>Movies</h2>
      {movies.map((movie, id) => {
        return (
          <div key={movie.id}>
            <p>Title: {movie.title}</p>
            <p>Release Date: {movie.releaseDate.slice(0, 4)}</p>
            <StarRating rating={Math.round(movie.rating / 2)} />
          </div>
        )
      })}
      <h2>Staff</h2>
      {staffMembers.map((member, index) => {
        return (
          <Profile key={index}
            name={member.name.first +  " " + member.name.last}
            title={member.title}
          />
        );
      })}
      <Firecracker />
      <StatusPicker />
      <br/>
      <LanguagePicker />
      
      {/* <Profile name="Dom Toretto" title="Racer" /> */}
    </div>
  )
}

