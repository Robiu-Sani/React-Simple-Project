import img1 from '../images/14.jpg';
import img2 from '../images/15.jpg';
import img3 from '../images/16.jpg';
import img4 from '../images/17.jpg';
import img5 from '../images/18.jpg';

export default function Section3(){
    return (
        <section className="w-full py-20">
        <h1 className="text-3xl text-center font-bold">OUR <span className="text-Primary text-3xl">GALLERY</span></h1>
        <p className="text-center w-full lg:w-2/3 mx-auto my-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

        <div className="w-full pt-10 grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          <div className="w-full h-[350px] flex justify-center items-center col-span-1 md:col-span-2 bgm" style={{backgroundImage: `url(${img1})`}} >
            <h1 className="text-5xl text-current p-10 font-extrabold">IMAGE</h1>
          </div>

          <div className="w-full h-[350px] lg:h-[704px] flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 bgm" style={{backgroundImage: `url(${img2})`}} >
            <h1 className="text-5xl text-current p-10 font-extrabold">IMAGE</h1>
          </div>

          <div className="w-full h-[350px] flex justify-center items-center col-span-1 md:col-span-2 bgm" style={{backgroundImage: `url(${img3})`}} >
            <h1 className="text-5xl text-current p-10 font-extrabold">IMAGE</h1>
          </div>

          <div className="w-full h-[350px] flex justify-center items-center col-span-1 md:col-span-2 lg:col-span-1 bgm" style={{backgroundImage: `url(${img4})`}} >
            <h1 className="text-5xl text-current p-10 font-extrabold">IMAGE</h1>
          </div>

          <div className="w-full h-[350px] flex justify-center items-center col-span-1 md:col-span-2 bgm" style={{backgroundImage: `url(${img5})`}} >
            <h1 className="text-5xl text-current p-10 font-extrabold">IMAGE</h1>
          </div>

        </div>

      </section>
    )
}