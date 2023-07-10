import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/th (1).jpeg'



    function Carousels() {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src= {one}
            alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../th.jpeg"
            alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../../imgs/th (2).jpeg"
            alt="Third slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
    }

export default Carousels;