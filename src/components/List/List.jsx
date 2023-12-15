import ListItem from "../ListItem/ListItem";

export default function List(props) {
  return (
    <>
      <div>
        {props.colors.map((color) => (
          <ListItem key={color.id} color={color.name} />
        ))}
      </div>
    </>
  );
}
