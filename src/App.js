import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Scroll from "./components/card-list/scroll.component";

const App = () => {
  const [searchFiled, setSearchFiled] = useState("");
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilterdCat] = useState(cats);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setCats(users));
  }, []);

  useEffect(() => {
    const newFilterdcats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchFiled);
    });
    setFilterdCat(newFilterdcats);
  }, [cats,searchFiled]);

  const onSearchChange = (event) => {
    const searchFiledString = event.target.value.toLocaleLowerCase();
    setSearchFiled(searchFiledString);
  };

  return (
    <div className="App">
      <h2 className="app-title">Cat Shop</h2>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder="search cat"
        className="monster-search-box"
      />
      <Scroll>
      <CardList cats={filteredCats} />
      </Scroll>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       cats: [],
//       searchfiled: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState({ cats: users }));
//   }

//   onSearchChange = (event) => {
//     const searchfiled = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchfiled };
//     });
//   };

//   render() {
//     const filterdcats = this.state.cats.filter((cat) => {
//       return cat.name.toLocaleLowerCase().includes(this.state.searchfiled);
//     });

//     return (

//     );
//   }
// }

export default App;
