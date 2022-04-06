import ProductList from '../components/ProductList/ProductList';
import { Link } from 'react-router-dom';
import "./ProductList.css"

export default function Catalog(props){

    return (
        <div className="productList">
            <h2>Nuevos ingresos</h2>
            <h3>Ver por categoria:</h3>
            <div className="categoryList">
                <div className="category">
                    <Link to={"./GPU"}>Placas de video</Link>
                </div>
                <div className="category">
                    <Link to={"./RAM"}>Memorias Ram</Link>
                </div>
            </div>

            <ProductList/>
        </div>
    )
}