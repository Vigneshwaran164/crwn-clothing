import './category.styles.scss';
import { Fragment, useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = ()=>{

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);

    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{

        const product = categoriesMap[category];
        setProducts(product);

    },[categoriesMap,category])



    return(
        <Fragment>
            <h2 className='title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
            

                {products && 
                products.map((product)=>(
                
                 <ProductCard key={product.id} product={product}/>

            ))}

            </div>
        </Fragment>
    )
}

export default Category;
