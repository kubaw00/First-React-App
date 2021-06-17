const ListItems = (props) =>{
    const items = props.items.map(item => (
        <Item 
        key={item.id}
        id={item.id}
        name={item.name}
        active={item.active}
        changeStatus={props.changeStatus}
        />
    ))
    console.log(items)
    return(
        <>
        <h2>Twoje zamówienie</h2>
        <ul>
           {items}
        </ul>
        </>
    )
}