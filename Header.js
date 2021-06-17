const Header = (props) => {
    
    const activeItems = props.items.filter(item => item.active )
    const number = activeItems.length;
    return(

        <header>
            <h2>Wielkość zamówienia: {number}</h2>
            <h2>Do zapłaty: {number *10} złotych</h2>
        </header>
    )
}