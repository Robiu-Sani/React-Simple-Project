import img1 from '../images/19.jpg';
import img2 from '../images/20.jpg';
import img3 from '../images/21.jpg';
import img4 from '../images/22.jpg';

export default function Section4(){
    return(
        <section className="w-full py-20">
        <h1 className="text-3xl text-center font-bold">OUR <span className="text-Primary text-3xl">TEAM</span></h1>
        <p className="text-center w-full lg:w-2/3 mx-auto my-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

        <div className="w-full p-10 flex justify-center items-center">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12 md:w-20 lg:w-[200px]">
                <img src={img1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 md:w-20 lg:w-[200px] ">
                <img src={img2} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 md:w-20 lg:w-[200px]">
                <img src={img3} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12 md:w-20 lg:w-[200px]">
                <img src={img4} />
              </div>
            </div>
          </div>
        </div>

      </section>
    )
}