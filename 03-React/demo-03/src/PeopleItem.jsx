function PeopleItem({ person,key }) {
    const emoji = person.gender === "Male" ? "👨" : "👩";
    return (
      <li key={key}>
        {emoji} <strong>{person.name}</strong> — Height: {person.height}, Favorite Pet: {person.favoritePet}
      </li>
    );
  }
  
  export default PeopleItem;
  