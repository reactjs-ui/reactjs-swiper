import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

class ReactSwiper extends Component {
  //可能需要传入的参数
  static propTypes = {
    className: PropTypes.string, // 自定义 className
    showPagination: PropTypes.bool, // 是否显示分页按钮
    options: PropTypes.object, // swiper 选项
    items: PropTypes.array // 轮播图记录数
  };

  static defaultProps = {
    className: '',
    showPagination: false,
    nextButton: null,
    prevButton: null,
    scrollbar: null,
    options: {
      autoplay: 3000,
      speed: 400,
      loop: true,
      spaceBetween: 100
    }
  };

  constructor(props) {
    super(props);
    this.currentSwiper = null;
  }

  componentDidMount() {
    this.updateSwiper();
  }

  componentDidUpdate() {
    this.updateSwiper();
  }

  getSwiper() {
    return this.currentSwiper;
  }

  clearSwiper() {
    if (this.currentSwiper) {
      this.currentSwiper.destroy();
      this.currentSwiper = null;
    }
  }

  updateSwiper() {
    const swiper = this.getSwiper();
    if (swiper) {
      this.clearSwiper();
    }
    const {showPagination, options} = this.props;
    const {swiperContainer} = this.refs;

    const swiperOptions = showPagination ? {
      pagination: '.swiper-pagination'
    } : {};

    const currentSwiper = new Swiper(swiperContainer, {...options, ...swiperOptions});

    this.currentSwiper = currentSwiper;
  }

  render() {
    const {items, showPagination, className} = this.props;

    return (
      <div className={`swiper-container ${className}`} ref="swiperContainer">
        <div className="swiper-wrapper">
          {
            items && items.map((item) => {
              const {image, link, title} = item;
              return (<div className="slider-item swiper-slide" key={image}>
                <div className="slide-content">
                  {link ? (<a href={link}>
                    <img className="swiper-img" src={image} title={title}/>
                  </a>) : (<img className="swiper-img" src={image} title={title}/>)}
                </div>
              </div>);
            })
          }
        </div>
        {showPagination ? (<div className="swiper-pagination"></div>) : null}
      </div>
    );
  }
}

export default ReactSwiper;
