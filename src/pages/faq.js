import "./faq.css"

export default function Faq (){
    return (
        <div className="faqContainer">
            <h2>Preguntas frecuentes</h2>
            <h3>Como verifico el stock de un producto?</h3>
            <p>Si el producto figura en el listado de productos significa que se encuentra en stock.</p>
            <h3>Una vez que compro, cuando me llegará el pedido?</h3>
            <p>Los pedidos son despachados el mismo dia que se confirman. Los envios pueden demorarse entre 2 y 5 dias habiles dependiendo de la ubicación.</p>
            <h3>Que empresa de mensajeria utilizan?</h3>
            <p>Nos manejamos con moto mansajeria para envios dentro de Capital Federal y despachamos por Andreani para compras al resto de los destinos.</p>
            <h3>Llego un producto erroneo o tiene alguna falla</h3>
            <p>En dicho caso, le solicitamos que por favor envie un mensaje a pedidos@elite-hardware.com.ar con el número de orden y descripción del problema</p>
        </div>
    )
}