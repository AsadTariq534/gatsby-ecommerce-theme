import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'300px'}
        image={'/1g1.png'}
      
        
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          This is a demonstration of the {' '}
          <span className={styles.gold}>Suleman Sweets & Bakers.</span>
        </p>
        
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Our Items'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/Lambi.jpg'}
            altImage={'highlight image'}
            miniImage={'/patisa.jpg'}
            miniImageAlt={'mini highlight image'}
            title={'Sweets & Bakery'}
            description={`Made with Pure Desi Ghee and Fine Quality Ingredients`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Social Media */}
      <div className={styles.socialContainer}>
        <Title
          name={'Contact Us For Custom Orders'}
          subtitle={'+92xxxxxxxxxx'}
        />
        <div className={styles.socialContentGrid}>
          <img src={`/social/one.jpg`} alt={'social media 1'} />
          <img src={`/social/two.jpg`} alt={'social media 2'} />
          <img src={`/social/2g2.png`} alt={'social media 3'} />
          <img src={`/social/four.jpg`} alt={'social media 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
