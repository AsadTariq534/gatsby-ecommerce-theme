import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
     image = { 'https://github.com/AsadTariq534/gatsby-ecommerce-theme/blob/1acad97f2e7d9754b7ff72fdbf5e855bde064dc0/static/ss.webp'}
    </div>
  );
};

export default Brand;
