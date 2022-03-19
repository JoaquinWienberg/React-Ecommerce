import Card from "../Card/Card";

const ProductList = () => {
    return(
        <div className="container-cards">
            <Card product="Placa de video MSI RTX 3070 TI" price={250000} payments={20833}/>
            <Card product="Placa de video EVGA RTX 3080" price={350000} payments={29166}/>
            <Card product="Placa de video AORUS RTX 3060" price={170000} payments={14166}/>
        </div>
    )
}

export default ProductList;