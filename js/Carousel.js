class Carousel {

  constructor() {
    this.initDOMElements();
    this.bindEvents();
  }

  initDOMElements() {
    this.currentIndex = 0;
    this.carouselImages = $('.carousel_img img');
    this.renderImage();
  }

  bindEvents() {
    $('.next').on('click', () => {
      this.renderNextImage();
    });

    $('.prev').on('click', () => {
      this.renderPreviousImage();
    });

    $(document).on('keydown', (event) => {
      if (event.keyCode == 39) {
        this.renderNextImage();
      }
      if (event.keyCode == 37) {
        this.renderPreviousImage();
      }
    });

    $('.fa-play-circle').on('click', () => {
      this.startCarousel();
    });

    $('.fa-pause-circle').on('click', () => {
      clearInterval(this.intervalID);
    });
  }

  startCarousel(){
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
      this.renderNextImage();
    }, 2000);
  }

  renderNextImage() {
    if (this.currentIndex === this.carouselImages.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.renderImage();
  }

  renderPreviousImage() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.carouselImages.length - 1;
    } else {
      this.currentIndex -= 1;
    }
    this.renderImage();
  }

  renderImage() {
    this.carouselImages.css('display', 'none');
    $(this.carouselImages[this.currentIndex]).css('display', 'block');
  }
}
