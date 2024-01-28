import slide1 from '../images/1.jpg'
import slide2 from '../images/2.jpg'
import slide3 from '../images/3.jpg'
import slide4 from '../images/4.jpg'

export default function Slider(){
    return <div className="container mx-auto h-auto lg:h-[550px] px-4">
    <div className="carousel rounded-xl h-full w-full">
        <div id="slide1" className="carousel-item relative w-full">

            <div className="hero px-1 md:px-10 py-5 md:py-20 bgo">
                <div className="hero-content justify-between flex-col gap-5 md:flex-row-reverse">
                  <div className="max-w-sm rounded-lg shadow-2xl"></div>
                  <div className="w-full md:w-1/2 "> 
                    <h1 className="text-3xl md:text-5xl text-white font-bold text-center md:text-left">Precision Builds for Your Dream Home</h1>
                    <p className="py-6 text-white text-center md:text-left">Discover the epitome of craftsmanship with our precision builds for your dream home. From foundation to finishing touches, we ensure meticulous attention to detail, turning your vision into reality.</p>
                    <div className="w-full flex justify-center md:justify-start">
                    <button className="btn bg-Primary text-white text-xl hover:text-black border-Primary"> Click here &nbsp; <i className="fa-solid fa-person-walking-arrow-right"></i></button>
                    </div>
                </div>
                </div>
              </div>

          <img src={slide1} className="w-full h-full absolute -z-10" />
          <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-5 bottom-0">
            <a href="#slide4" className="btn text-xl text-white bg-blackOpacity hover:text-black">❮</a> 
            <a href="#slide2" className="btn text-xl text-white bg-blackOpacity hover:text-black">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
            
            <div className="hero px-1 md:px-10 py-5 md:py-20 bgo">
                <div className="hero-content justify-between flex-col gap-5 md:flex-row-reverse">
                  <div className="max-w-sm rounded-lg shadow-2xl"></div>
                  <div className="w-full md:w-1/2 "> 
                    <h1 className="text-3xl md:text-5xl text-white font-bold text-center md:text-left">Quality Craftsmanship, Trusted Builders</h1>
                    <p className="py-6 text-white text-center md:text-left">Experience excellence with our trusted builders. We pride ourselves on quality craftsmanship, ensuring your project reflects unparalleled skill, reliability, and a commitment to exceeding expectations.</p>
                    <div className="w-full flex justify-center md:justify-start">
                    <button className="btn bg-Primary text-white text-xl hover:text-black border-Primary"> Click here &nbsp; <i className="fa-solid fa-person-walking-arrow-right"></i></button>
                    </div>
                </div>
                </div>
              </div>

          <img src={slide2} className="w-full h-full absolute -z-10" />
          <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-5 bottom-0">
            <a href="#slide1" className="btn text-xl text-white bg-blackOpacity hover:text-black">❮</a> 
            <a href="#slide3" className="btn text-xl text-white bg-blackOpacity hover:text-black">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            
            <div className="hero px-1 md:px-10 py-5 md:py-20 bgo">
                <div className="hero-content justify-between flex-col gap-5 md:flex-row-reverse">
                  <div className="max-w-sm rounded-lg shadow-2xl"></div>
                  <div className="w-full md:w-1/2 "> 
                    <h1 className="text-3xl md:text-5xl text-white font-bold text-center md:text-left">Swift and Reliable Building Solutions</h1>
                    <p className="py-6 text-white text-center md:text-left">Embrace swift and reliable building solutions with us. From concept to completion, our team ensures efficiency and dependability, turning your vision into reality with speed and unwavering reliability.</p>
                    <div className="w-full flex justify-center md:justify-start">
                    <button className="btn bg-Primary text-white text-xl hover:text-black border-Primary"> Click here &nbsp; <i className="fa-solid fa-person-walking-arrow-right"></i></button>
                    </div>
                </div>
                </div>
              </div>

          <img src={slide3} className="w-full h-full absolute -z-10" />
          <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-5 bottom-0">
            <a href="#slide2" className="btn text-xl text-white bg-blackOpacity hover:text-black">❮</a> 
            <a href="#slide4" className="btn text-xl text-white bg-blackOpacity hover:text-black">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
            
            <div className="hero px-1 md:px-10 py-5 md:py-20 bgo">
                <div className="hero-content justify-between flex-col gap-5 md:flex-row-reverse">
                  <div className="max-w-sm rounded-lg shadow-2xl"></div>
                  <div className="w-full md:w-1/2 "> 
                    <h1 className="text-3xl md:text-5xl text-white font-bold text-center md:text-left">Excellence in Every Detail, Your Ideal Builder</h1>
                    <p className="py-6 text-white text-center md:text-left">Your ideal builder, committed to excellence in every detail. From concept to completion, we meticulously craft your vision, ensuring unparalleled quality and attention to detail at every step.</p>
                    <div className="w-full flex justify-center md:justify-start">
                    <button className="btn bg-Primary text-white text-xl hover:text-black border-Primary"> Click here &nbsp; <i className="fa-solid fa-person-walking-arrow-right"></i></button>
                    </div>
                </div>
                </div>
              </div>

          <img src={slide4} className="w-full h-full absolute -z-10" />
          <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-5 bottom-0">
            <a href="#slide3" className="btn text-xl text-white bg-blackOpacity hover:text-black">❮</a> 
            <a href="#slide1" className="btn text-xl text-white bg-blackOpacity hover:text-black">❯</a>
          </div>
        </div>
      </div>
</div>
}