import React from "react";

export const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/animal")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) return <p>Loading......</p>;
  return (
    <div>
      {data.map((animal, index) => (
        <div key={index}>
          <img src={animal.image} />
          <p>{animal.name}</p>
        </div>
      ))}
    </div>
  );
};
