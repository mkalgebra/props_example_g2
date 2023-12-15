import AboutMe from "../AboutMe/AboutMe";
import List from "../List/List";

export default function Profile() {
  const myInfo = {
    name: "Marijo Kis",
    location: "ZG",
    age: "26",
    colors: [
      { id: 1, name: "red" },
      { id: 2, name: "green" },
      { id: 3, name: "yellow" },
    ],
    info: [
      { id: 1, label: "Hobby", value: "Padel" },
      { id: 2, label: "Gender", value: "M" },
      { id: 3, label: "Planet", value: "Mars" },
    ],
  };

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {myInfo.name} </p>
      <p>Location: {myInfo.location}</p>
      <p>Age: {myInfo.age}</p>
      <h2>Favorite colors: </h2>
      <List colors={myInfo.colors} />
      <h2>About me:</h2>
      <AboutMe info={myInfo.info} />
    </>
  );
}
