import Carousel from 'react-bootstrap/Carousel';
import './receta.css';

function Recetas() {
  return (
    <div className="center-carousel">
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cursosdecocina.cl/cdn/shop/articles/porotosconriendas1080x595_2048x.progressive.jpg?v=1599851467"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mostosydestilados.cl/wp-content/uploads/2023/04/Completo_ItalianoAI.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.lacuarta.com/resizer/ZJTb2ZN1x31IxTtUhtVYJCaCmaM=/0x40:1500x1040/1023x682/cloudfront-us-east-1.images.arcpublishing.com/copesa/RXPUD677IVGXZEKVUDAPMKYLSU.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Recetas;