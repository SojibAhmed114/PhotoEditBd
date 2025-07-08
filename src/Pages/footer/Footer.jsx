import logo from "/src/assets/dslr-camera.png"

const Footer = () => {
  return (
    <section>
      <footer className="footer footer-horizontal footer-center bg-myPrimary text-primary-content p-10 mt-10">
        <aside>
          <img className="size-20" src={logo} alt="" />
          <p className="font-bold">
            Photo Edit Bd
            <br />
            Providing reliable tech since 2015
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 my-5 ">
            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://www.facebook.com/share/1Azj1pdxJm/"
              target="_blank"
            >
              FaceBook
            </a>
            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://wa.me/+8801750605626?text=Hello%20I%20am%20interested%20in%20your%20services"
              target="_blank"
            >
              WhatsApp
            </a>

            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://t.me/Sojoneditors"
              target="_blank"
            >
              Telegram
            </a>
            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://www.instagram.com/produtcheditors?igsh=N2FoZmNxa3B5dXh2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://x.com/ProdutchEditors?t=vrk7JDb3Rr0lFIVu7oWjLQ&s=09"
              target="_blank"
            >
              X (Twitter)
            </a>

            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://snapchat.com/add/sojoneditors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Snapchat
            </a>

            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://line.me/ti/p/sojonghosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE
            </a>

            <a
              className=" text-white hover:text-black text-center  px-2 py-3 font-bold transition"
              href="https://www.tiktok.com/@produtcheditors?_t=ZS-8xlsqVMrvQ8&_r=1"
              target="_blank"
            >
              TikTok
            </a>
          </div>
        </nav>
      </footer>
    </section>
  );
}

export default Footer