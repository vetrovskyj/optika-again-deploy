import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../../components/Layout'

export const Bryle = ({ }) => {
  return (
    <Layout>
      <main className="glasses-main">
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="sliderphoto" src="../../../img/glasses-in-shop.jpg" />
          <div className="slider-sale-and-text-products">
            <h1 className="slider-sale-products">Brýle</h1>
            <div className="slider-text-products">
              <h1 className="slider-text-sale-products">dioptrické i sluneční</h1>
            </div>
          </div>
        </div>
        <div className="bottom-site">
          <div className="boxes">
            <div className="box">
              <img alt="ikona individuality" src="../../../img/individual.svg" width={100} />
              <div className="box-desc">
                <h2>Individuální přístup</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sunt vero, numquam repellat, obcaecati unde in reprehenderit nihil aut accusamus nostrum iure amet voluptates minus non, officia cum esse voluptas?</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona vyberu" src="../../../img/choices.svg" width={100} />
              <div className="box-desc">
                <h2>Široký výběr</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sunt vero, numquam repellat, obcaecati unde in reprehenderit nihil aut accusamus nostrum iure amet voluptates minus non, officia cum esse voluptas?</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona certifikatu" src="../../../img/experience.svg" width={100} />
              <div className="box-desc">
                <h2>Odbornost</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sunt vero, numquam repellat, obcaecati unde in reprehenderit nihil aut accusamus nostrum iure amet voluptates minus non, officia cum esse voluptas?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-of-productpage">
          <div className="brand-image">
            <img src="../../../img/converse-eyewear-logo-white.png" alt="converse-eyewear-logo" />
          </div>
          <div className="brand-image">
            <img src="../../../img/bettybarclay_white.png" alt="bettybarclay-logo" />
          </div>
          <div className="brand-image">
            <img src="../../../img/crocs-white.png" alt="crocs-logo" />
          </div>
          <div className="brand-image">
            <img src="../../../img/horsefeathers-white.png" alt="horsefeathers-logo" />
          </div>
          <div className="brand-image">
            <img src="../../../img/rayban-white.png" alt="rayban-logo" />
          </div>
          <div className="brand-image">
            <img src="../../../img/tomtailor-white.png" alt="tomtailor-logo" />
          </div>
        </div>
        <div className="info-footer-container">
          <div className="info-footer">
            <div className="info-contacts">
              <div className="info-contact">
                <img alt="person-icon" src="../../../img/person-icon.png" />
                <p>Bc. Jitka Hronková</p>
              </div>
              <div className="info-contact">
                <img alt="info-icon" src="../../../img/info-icon.png" />
                <p>IČO: 45645687</p>
              </div>
              <div className="info-contact">
                <img alt="location-icon" src="../../../img/location-icon.png" />
                <p>nám. Svobody 14, Volyně, 387 01</p>
              </div>
            </div>
            <div className="aditional-links">
              <a href="#">Obchodní podmínky</a>
              <a href="#">Autorská práva</a>
            </div>
            <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/"><img className="fb-icon" alt="facebook-icon" src="../../../img/facebook-icon.png" /></a>
          </div>
        </div>
      </main>
      <Helmet>
        <script src={withPrefix('../../scripts/hamburger.js')} type="text/javascript" />
      </Helmet>
    </Layout>
  )
}

export default Bryle