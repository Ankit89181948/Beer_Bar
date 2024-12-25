import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

const App = () => {
  const [arr, setArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const get_data = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_data();
      console.log(data);
      setArr(data);
    };

    fetchData();
  }, []);
  //using filter method to filter the data based on the search term
  const filteredData = arr.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="flex flex-wrap">
        {filteredData.map((element, index) => (
          <Cards
            key={index}
            name={element.name}
            price={element.price}
            rating={element.rating.average}
            img={element.image}
            review={element.rating.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
