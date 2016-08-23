/**
*
* Article
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import Image from '../Image/index';
import { Row, Col } from 'react-bootstrap';

var temp = {
    "id": "51531006",
    "img": ["https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80151531006_5.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80251531006_5.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80051531006.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_10651531006.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_20251531006.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80051531006_1.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80151531006_6.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80251531006_6.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_10651531006_1.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_20251531006_1.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80151531006_7.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80251531006_7.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_10651531006_2.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_20251531006_2.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80051531006_3.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80051531006_7.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_10651531006_3.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_20251531006_3.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80151531006.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80251531006.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80151531006_1.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80051531006_2.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_10651531006_4.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_20251531006_4.jpg", "https://www.armedangels.de/media/catalog/product/cache/1/thumbnail/1400x1400/163b81649b7ef7bc8a00b0066e59ae0a/5/1/51531006_80251531006_1.jpg"],
    "title": "Tilly - Slim Fit Skinny",
    "price": "99.90",
    "brand": "ArmedAngels",
    "details": "Passform und Schnitt Schnitt: Slim Fit Länge: \"32\": 81cm, \"34\": 86cm Besonderheiten Optik: 5-Pocket-Style Details: Jacron Etikett, Verschluss: Reißverschluss Taschen: 5-Pocket Verschlussart: Reißverschluss",
    "material": "96.4% Baumwolle (bio), 3.6% Elasthan Materialzusatz: Knöpfe aus Metall",
    "zertifizierung": "Zertifizierung: GOTS",
    "production": "Herkunftsland: Türkei",
    "delivery": "Deine Lieferung erreicht dich innerhalb der nächsten 1-5 Tage mit DHL GoGreen - dafür berechnen wir eine vergünstigte Versandpauschale von 5 Euro. (gilt für Deutschland & Österreich.) Ein bestellter Artikel passt oder gefällt nicht? Kein Problem. Innerhalb Deutschlands kannst du deine Lieferung kostenlos mit DHL an uns zurücksenden. Innerhalb Österreichs kannst du deine Lieferung kostenlos mit Post AT an uns zurücksenden.",
    "category": "Skinny"
};

class Article extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row>
        <Col xs={12} md={6} lg={3} sm={12}>

          <Image src={temp.img[0]} />
        </Col>
        <Col xs={12} md={6}  lg={3} sm={12}>
          Test Col
        </Col>
      </Row>
    );
  }
}

export default Article;
