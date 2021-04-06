import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import { Map, MarkerLayer, Marker, ZoomControl, MouseControl, CompassControl, KeyboardControl } from 'react-mapycz'

import Layout from '../../components/Layout'

export const ContactPage = ({}) => { 
  return (
    <Layout>
       <main className="contact-main">
        <div className="contact-first">
          <div className="basic-contacts-container">
            <h1>Kontakty</h1>
            <div className="store-image-container">
              <img className="store-image" src="../../img/store-image.png" alt="store-image" />
            </div>
            <div className="basic-contacts-data">
              <div className="basic-contacts">
                <div className="basic-contact-container">
                  <div>
                    <img src="../../img/phone-icon.svg" alt="phone-icon" />
                  </div>
                  <div className="basic-contact">
                    <h2>Zavolejte nám</h2>
                    <a href="tel:+420773201372">+420604802888</a>
                  </div>
                </div>
                <div className="basic-contact-container">
                  <div>
                    <img src="../../img/mail-icon.svg" alt="mail-icon" />
                  </div>
                  <div className="basic-contact">
                    <h2>Napište nám</h2>
                    <a href="mailto:vetrovsky.jan@gmail.com">optikavolyne@seznam.cz</a>
                  </div>
                </div>
                <div className="basic-contact-container">
                  <div>
                    <img src="../../img/location-icon.svg" alt="location-icon" />
                  </div>
                  <div className="basic-contact">
                    <h2>Adresa</h2>
                    <p>náměstí Svobody 14, Volyně, 387 01</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basic-contacts-data open-time">
              <div className="basic-contact-container">
                <div>
                  <img src="../../img/time-icon.svg" alt="time-icon" />
                </div>
                <div className="basic-contact">
                  <h2>Otevírací doba</h2>
                  <div className="day">
                    <p>pondělí: 8:30–11:30, 12:30–16:00</p>
                  </div>
                  <div className="day">
                    <p>úterý: 8:30–11:30, 12:30–16:00</p>
                  </div>
                  <div className="day">
                    <p>středa: 8:30–11:30, 12:30–17:00</p>
                  </div>
                  <div className="day">
                    <p>čtvrtek: 12:30–17:00</p>
                  </div>
                  <div className="day">
                    <p>pátek: 8:30–11:30, 12:30–15:00</p>
                  </div>
                  <div className="day">
                    <p>sobota: Po telefonické domluvě</p>
                  </div>
                  <div className="day">
                    <p>neděle: Zavřeno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="get-there">
          <div className="get-there-desc-container">
            <div className="get-there-desc">
              <h2>Jak se k nám dostat?</h2>
              <ul>
                <li><strong>Pěšky:</strong> Nacházíme se ve Volyni přímo na náměstí</li>
                <li><strong>Autem:</strong> Před optikou je možné zaparkovat. GPS souřadnice jsou: E13.8851194, N49.1658592</li>
                <li><strong>Autobusem:</strong> 50 metrů od optiky je volyňská autobusová zastávka, kde staví lokální i dálkové spoje</li>
              </ul>
            </div>
          </div>
          <div className="mapa">
            <Map center={{lat: 49.16600116945006, lng: 13.885240415576186}} height="100%">
              <KeyboardControl/>
              <ZoomControl/>
              <MouseControl zoom={true} pan={true} wheel={true}/>
              <CompassControl right={10} top={50}/>
              <MarkerLayer>
                <Marker coords={{lat: 49.16600116945006, lng: 13.885240415576186}} />
              </MarkerLayer>
            </Map>
          </div>
        </section>
        <div className="business-card">
          <p>Naše vizitka ke stažení</p>
          <a href="../../img/vizitka.png" download>
            <img className="business-card-itself" alt="vizitka ke stažení" src="../../img/vizitka.png" />
            <img className="download-icon" alt="donwload-icon" src="../../img/download.svg" />
          </a>
        </div>
        <div className="contact-second">
          <div className="form-and-location">
            <div className="contact-form">
              <h2>Kontaktujte nás</h2>
              <form>
                <div className="user-data">
                  <div className="user-data-entity">
                    <label>Celé jméno</label>
                    <input type="text" name="name" placeholder="Jméno a příjmení" required />
                  </div>
                  <div className="user-data-entity">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Vaše emailová adresa" required />
                  </div>
                </div>
                <div className="message">
                  <label>Zpráva</label>
                  <textarea name="zprava" placeholder="Napište nám zprávu" required defaultValue={""} />
                </div>
                <div className="send">
                  <input className="button" type="submit" name="submit" />
                </div>
              </form>
            </div>
            <div className="location">
              <div className="tax-data">
                <h2>Fakturační údaje</h2>
                <p>Bc. Jitka Hronková</p>
                <p>Na Ostrovci 25<br />Volyně, 387 01<br />IČ: 02835754<br />DIČ: CZ7561022326</p>
                <p>Úřad příslušný podle §71 odst.2 živnostenského zákona: Městský úřad Strakonice</p>
              </div>
            </div>
          </div>
        </div>
        <div className="info-footer-container">
          <div className="info-footer">
            <div className="info-contacts">
              <div className="info-contact">
                <img alt="person-icon" src="../../img/person-icon.png" />
                <p>Bc. Jitka Hronková</p>
              </div>
              <div className="info-contact">
                <img alt="info-icon" src="../../img/info-icon.png" />
                <p>IČO: 45645687</p>
              </div>
              <div className="info-contact">
                <img alt="location-icon" src="../../img/location-icon.png" />
                <p>nám. Svobody 14, Volyně, 387 01</p>
              </div>
            </div>
            <div className="aditional-links">
              <a href="#">Obchodní podmínky</a>
              <a href="#">Autorská práva</a>
            </div>
            <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/"><img className="fb-icon" alt="facebook-icon" src="../../img/facebook-icon.png" /></a>
          </div>
        </div>
        </main>
    <Helmet>
      <script src={withPrefix('../scripts/hamburger.js')} type="text/javascript" />
    </Helmet>
    </Layout>
)
}

export default ContactPage
