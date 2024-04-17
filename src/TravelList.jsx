import React, {useState} from 'react'
import Travelitem from './Travelitem'
import data from './data';

function TravelList() {

    const [list, setList] = useState(data) // [{},{},{}] lista de items

    const paintItems = () => list.map((item, index) => <Travelitem
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            img_url={item.img_url}
                            delete={() => deleteItem(index)}
                            />
        );

        const clearItems = () => setList([]) // limpia la vista

        const resetItems = () => setList(data) // resetea la vista con la data

        const createItem = () => {
            alert('Create new item')
            const title = prompt('Introduce el titulo del destino');
            const desc = prompt('Introduce la descripción del destino');
            const img_url = prompt('Introduce la url de la imagen');

            const newItem = {title, desc, img_url};

            setList([...list, newItem]) // modifica el estado añadiendo un nuevo item
            
        }

        const deleteItem = (pos) => {
            alert('item borrado');
            const remainingItems = list.filter((item, index) => index !== pos)
            setList(remainingItems) // modficia el estado con lo restante

        }
        
    return (
        <section>
            <h5>Aquí va TravelList</h5>
            <button onClick={clearItems}>Clear everything</button>
            <button onClick={resetItems}>Reset everything</button>
            <button onClick={createItem}>Create new item</button>
            {paintItems()}


        </section>



    )
}
export default TravelList

