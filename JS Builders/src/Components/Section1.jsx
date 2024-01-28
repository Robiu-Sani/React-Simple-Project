import sec1 from '../images/5.png';
import sec2 from '../images/6.png';
import sec3 from '../images/7.png';
import sec4 from '../images/8.png';
import sec5 from '../images/9.png';
import sec6 from '../images/10.png';
import sec7 from '../images/11.png';

export default function Section1(){
    return (
        <section className="w-full py-20">
    <h1 className="text-3xl text-center font-bold">Construction <span className="text-Primary text-3xl">Corner</span></h1>
    <p className="text-center w-full lg:w-2/3 mx-auto my-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">

      <div className="card w-full flex justify-center items-center flex-col">
        <div className=" bg-Primary rounded-full">
        <img src={sec4} alt="image" className="w-16 m-6" />
        </div>
        <h3 className="card-title text-2xl my-5">Constraction</h3>
        <p className="text-center">Building the future, one brick at a time. Our passion is constructing spaces that stand the test of time. Introducing a Modern Oasis: The Tranquil Haven Residence</p>
      </div>

      <div className="card w-full flex justify-center items-center flex-col">
        <div className=" bg-Primary rounded-full">
        <img src={sec5} alt="image" className="w-16 m-6" />
        </div>
        <h3 className="card-title text-2xl my-5">Unique Design</h3>
        <p className="text-center">Elevate your space with unparalleled charm. Our unique designs redefine aesthetics, blending innovation and elegance seamlessly for a distinctive allure.</p>
      </div>

      <div className="card w-full flex justify-center items-center flex-col">
        <div className=" bg-Primary rounded-full">
        <img src={sec6} alt="image" className="w-16 m-6" />
        </div>
        <h3 className="card-title text-2xl my-5">Extrime Idea</h3>
        <p className="text-center">Pushing boundaries with extreme ideas. Transforming visions into extraordinary structures. Your imagination, our blueprint—building the extraordinary together.</p>
      </div>

      <div className="card w-full flex justify-center items-center flex-col">
        <div className=" bg-Primary rounded-full">
        <img src={sec7} alt="image" className="w-16 m-6" />
        </div>
        <h3 className="card-title text-2xl my-5">Awesome Look</h3>
        <p className="text-center">Building the future, one brick at a time. Our passion is constructing spaces that stand the test of time. Introducing a Modern Oasis: The Tranquil Haven Residence</p>
      </div>

    </div>

     <div className="w-full pt-10 grid grid-cols-1 lg:grid-cols-3">

      <div className="w-full flex flex-col sm:flex-row gap-3 py-10 px-5 bg-slate-300">
        <img src={sec1} alt="images" className="w-20" />
        <div className="">
          <h3 className="card-title text-xl">Expert & Professional</h3>
          <p>Expert & Professional: Pinnacle skills, unwavering precision—your trusted guide to excellence in every domain.</p>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-3 py-10 px-5 bg-Primary">
        <img src={sec2} alt="images" className="w-20" />
        <div className="">
          <h3 className="card-title text-xl text-white">High Quality Work</h3>
          <p className="text-white">Expert & Professional: Pinnacle skills, unwavering precision—your trusted guide to excellence in every domain.</p>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-3 py-10 px-5 bg-cyan-700">
        <img src={sec3} alt="images" className="w-20" />
        <div className="">
          <h3 className="card-title text-xl text-white">24/7 Help Support</h3>
          <p className="text-white">Expert & Professional: Pinnacle skills, unwavering precision—your trusted guide to excellence in every domain.</p>
        </div>
      </div>

     </div>
  </section>
    )
}