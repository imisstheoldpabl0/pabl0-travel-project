import React from 'react'

function Travelitem(props) {
return (
    <article>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <img src={props.img_url} width={500} height={250} alt="{props.title}" />
        <br />
        <button onClick={() => props.delete()}>Borrar</button>
    </article>
)
}

export default Travelitem