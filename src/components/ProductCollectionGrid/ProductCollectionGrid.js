import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/Mithai.jpg'}
        title={'Sweets / Mithai'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/Bakery.jpg'}
        title={'Bakery'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/Cakes.jpg'}
        title={'Cakes'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/Fast food.jpg'}
        title={'Fast Food'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
