export default function SocialContainer(){
    return (
        <div class=" bg-slate-300">
          <div className="container mx-auto flex justify-center items-center md:justify-around flex-col md:flex-row p-5">
            <a class="text-current font-bold text-xl md:text-2xl"><span class="text-Primary text-xl md:text-2xl">JS </span> Builders</a>
            <div class="flex gap-3">
              <i class="fa-brands text-current text-2xl fa-facebook"></i>
              <i class="fa-brands text-current text-2xl fa-instagram"></i>
              <i class="fa-brands text-current text-2xl fa-square-x-twitter"></i>
              <i class="fa-brands text-current text-2xl fa-youtube"></i>
            </div>
          </div>
      </div>
    )
}