import img1 from '../images/10.png';

export default function Footer(){
    return(
        <footer className="pt-5 px-5 lg:pt-10 lg:px-10 bg-neutral">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-neutral-content pb-8">
        <aside className="w-full mb-8">
          <div className="w-20 h-20 rounded-full bg-Primary p-4 mb-6">
            <img src={img1} alt="icon" className="mb-8" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam provident cupiditate eum maiores, corporis deserunt quam, adipisci ipsam rerum velit sed est quia? Maiores voluptatum, quidem ex necessitatibus saepe facere?</p>
        </aside> 
        <nav className="w-full mb-8 " >
          <h3 className="footer-title mb-8 text-white">Useful Link</h3> 
          <ul>
            <li><a className="link link-hover">Home</a></li>
            <li><a className="link link-hover">About Us</a></li>
            <li><a className="link link-hover">Cases</a></li>
            <li><a className="link link-hover">Blog</a></li>
            <li><a className="link link-hover">Contact Us</a></li>
          </ul>
        </nav> 
        <nav className="w-full mb-8" >
          <h3 className="footer-title mb-8 text-white">Contact Now</h3> 
          <ul>
            <li className="mb-4"><a className="link link-hover">A108 Adam Street,<br /> New York, NY 535022</a></li>
            <li className="mb-4"><a className="link link-hover">+88 01750 00 00 00</a> <br /> <a className="link link-hover">+88 01750 00 00 00</a></li>
            <li className="mb-4"><a className="link link-hover">info@gmail.com</a> <br /><a className="link link-hover">info@gmail.com</a></li>
          </ul>
        </nav> 
        <nav className="w-full mb-8" >
          <h3 className="footer-title mb-8 text-white">Legal</h3> 
          <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          <form action="" className="w-full bg-white rounded-lg relative">
            <input type="email" placeholder="Enter Your Email" className="w-full input text-black" />
            <button type="submit" className="btn absolute right-0 bg-Primary text-xl text-white"><i className="fa-regular fa-paper-plane"></i></button>
          </form>
        </nav>
      </div><hr />
      <div className="container mx-auto p-4 flex justify-end">
        <h3 className="text-xl text-white">Made By <a href="https://github.com/Robiu-Sani" className="text-Primary text-xl link">Robius Sani</a></h3>
      </div>
    </footer>
    )
}