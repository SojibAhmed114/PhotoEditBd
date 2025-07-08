import SliderTwo from "../contact/SliderTwo";
import { MailForm } from "../../Components/MailForm";
const ContactDetails = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-[1400px] container mx-auto ">
        <div className=" py-15 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className=" text-gray-800 mb-6 text-3xl text-center mt-5 md:text-4xl font-medium pb-1 lg:leading-14 font-subHeader">
              Committed to Your Success – Partnering With You for a Better
              Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              We believe in building meaningful partnerships that drive real
              growth. With deep industry expertise, innovative solutions, and a
              client-first approach, we work alongside you to turn your vision
              into reality — today and into the future.
            </p>
            <p className="text-base text-gray-500 mb-8">
              Whether you're a small business just starting out or an
              established brand aiming higher, our dedicated team is here to
              support you with tailored strategies, collaborative efforts, and
              unwavering commitment. Together, we create possibilities and
              achieve measurable impact.
            </p>
          </div>

          {/* contact section grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-10 mt-10">
            <div className="bg-white p-2  md:col-span-4">
              <h2 className="text-3xl text-center mt-5 md:text-4xl font-medium pb-1 lg:leading-14 font-subHeader">
                Let’s Connect
              </h2>

              <p className="text-lg font-medium text-slate-600 text-center max-w-3xl mx-auto">
                Connecting with us is the first step to turning your ideas into
                reality.
              </p>
              <div className="grid gap-3 grid-cols-1 lg:grid-cols-3 my-5">
                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://www.facebook.com/share/1Azj1pdxJm/"
                  target="_blank"
                >
                  FaceBook
                </a>
                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://wa.me/+8801750605626?text=Hello%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                >
                  WhatsApp
                </a>

                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://t.me/Sojoneditors"
                  target="_blank"
                >
                  Telegram
                </a>
                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://www.instagram.com/produtcheditors?igsh=N2FoZmNxa3B5dXh2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>

                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://x.com/ProdutchEditors?t=vrk7JDb3Rr0lFIVu7oWjLQ&s=09"
                  target="_blank"
                >
                  X (Twitter)
                </a>

                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://snapchat.com/add/sojoneditors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Snapchat
                </a>

                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://line.me/ti/p/sojonghosh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINE
                </a>

                <a
                  className="bg-purple-600 text-white text-center  px-4 py-3 rounded-md hover:bg-purple-700 transition"
                  href="https://www.tiktok.com/@produtcheditors?_t=ZS-8xlsqVMrvQ8&_r=1"
                  target="_blank"
                >
                  TikTok
                </a>
              </div>
              {/* form here */}
              <div>
                <MailForm />
              </div>
            </div>
            <div className="bg-green-400 h-[500px] md:h-auto   md:col-span-6">
              <SliderTwo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
