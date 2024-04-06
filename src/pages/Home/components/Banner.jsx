
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../../../assets/img/banner1.png';
import banner2 from '../../../assets/img/banner2.png';
import banner3 from '../../../assets/img/banner3.png';

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;