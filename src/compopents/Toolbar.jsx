import ToolbarSelector from "./ToolbarSelector";

function Toolbar(props) {
  return (
    <div className="Toolbar">
      {props.filters.map(filter => {
        return (
          <ToolbarSelector
            key={filter.toString()}
            name={filter}
            selected={props.selected}
            onSelectFilter={props.onSelectFilter}
          />)
      })}
    </div>
  );
}

export default Toolbar;
