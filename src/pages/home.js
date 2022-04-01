import ProductList from '../components/ProductList/ProductList';
import CardDetail from "../components/CardDetail/CardDetail";
import CardListContainer from '../components/CardListContainer/CardListContainer';

export default function HomePage(props){

    return (
        <div>
            <h2>Nuevos ingresos</h2>
            <ProductList productType="Placas de video"/>
            <CardListContainer />
        </div>
    )
}