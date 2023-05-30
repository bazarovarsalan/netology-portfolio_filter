
const ToolbarSelector = (props) => {
    const handleClick = (event) => {
        Array.from(event.target.parentElement.children).map(elem => {
          if (elem.classList.contains('selected')) {
            elem.classList.remove('selected');
          };
          });
        event.target.classList.add('selected');
        props.onSelectFilter(event.target.textContent);
    };
    return (
      <div className={(props.name === props.selected) ? "ToolbarSelector selected" : "ToolbarSelector" } onClick={handleClick}>
          { props.name }
      </div>
    )                                                                     
}



  export default ToolbarSelector;
  