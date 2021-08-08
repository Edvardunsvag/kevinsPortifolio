import { Carousel } from '3d-react-carousal';
import kevin from '../img/kevinProfilbilde.jpg';

export default function Carusel() {
    let slides = [
        <img src={kevin} alt='1' />,
        <img src={kevin} alt='2' />,
        <img src={kevin} alt='3' />,
    ];

    return <Carousel slides={slides} autoplay={false} interval={1000} />;
}
