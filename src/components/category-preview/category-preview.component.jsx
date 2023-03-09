import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

const CategroyPreview  = ({title,products}) => {
    return(
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {
                products
                .filter(( _ ,idx)=>(idx<4))
                .map((product)=>{
                    return <ProductCard product={product}/>

                })

                }

            </div>
        </div>
    )
}

export default CategroyPreview;