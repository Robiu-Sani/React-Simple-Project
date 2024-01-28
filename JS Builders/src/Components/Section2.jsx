import img1 from '../images/12.jpg';
import img2 from '../images/13.jpg';

export default function Section2(){
    return (
        <section className="w-full py-20" >
        <h1 className="text-3xl text-center font-bold">We create and turn <span className="text-Primary text-3xl">into reality</span></h1>
        <p className="text-center w-full lg:w-2/3 mx-auto my-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <img src={img1} className="w-full md:w-1/2" />
            <div>
              <h1 className="text-2xl font-bold">Box Office News!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <ul>
                <li className="list-disc ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo? Ut quidem ea dolore nostrum.</li>
                <li className="list-disc ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo? Ut quidem ea dolore nostrum.</li>
                <li className="list-disc ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo? Ut quidem ea dolore nostrum.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hero -mt-8">
          <div className="hero-content flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-2xl font-bold">Frequent Questions Answer!</h1>
              <div className="">

                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" checked="checked" /> 
                  <div className="collapse-title text-xl font-medium">
                    1. Are application fee waivers available?
                  </div>
                  <div className="collapse-content"> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, animi quibusdam alias incidunt labore doloribus doloremque aperiam recusandae. Nesciunt unde reprehenderit fugit totam facilis dolorum quis consequatur eaque distinctio provident.</p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" checked="checked" /> 
                  <div className="collapse-title text-xl font-medium">
                    2. Are application fee waivers available?
                  </div>
                  <div className="collapse-content"> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, animi quibusdam alias incidunt labore doloribus doloremque aperiam recusandae. Nesciunt unde reprehenderit fugit totam facilis dolorum quis consequatur eaque distinctio provident.</p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" checked="checked" /> 
                  <div className="collapse-title text-xl font-medium">
                    3. Are application fee waivers available?
                  </div>
                  <div className="collapse-content"> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, animi quibusdam alias incidunt labore doloribus doloremque aperiam recusandae. Nesciunt unde reprehenderit fugit totam facilis dolorum quis consequatur eaque distinctio provident.</p>
                  </div>
                </div>
  
              </div>
            </div>
            <img src={img2} className="w-full md:w-1/2" />
          </div>
        </div>

        <div className="w-full -mt-5 px-4 flex flex-col lg:flex-row" >
          <div className="w-full lg:w-1/2 bg-Primary p-10 flex flex-col sm:flex-row justify-around">
            <div className="flex justify-center items-center">
              <h1 className="text-6xl font-extrabold text-white mr-4">10</h1>
              <h3 className="text-2xl font-bold leading-5 text-white">YEARS OF <br />EXPERIENCED</h3>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-6xl font-extrabold text-white mr-4">50</h1>
              <h3 className="text-2xl font-bold leading-5 text-white">PROJECTS <br />DONE</h3>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col sm:flex-row justify-around">
            <div className="flex justify-center items-center">
              <h1 className="text-6xl font-extrabold text-Primary mr-4">15</h1>
              <h3 className="text-2xl font-bold leading-5 text-Primary">PROFESSIONAL <br />EXPERT </h3>
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-6xl font-extrabold text-Primary mr-4">500</h1>
              <h3 className="text-2xl font-bold leading-5 text-Primary">HAPPY <br />CLIENTS</h3>
            </div>
          </div>
        </div>

      </section>
    )
}