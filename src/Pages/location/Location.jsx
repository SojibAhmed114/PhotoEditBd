import gwoTwo from '../../assets/gwoTwo.png'

const Location = () => {
  return (
    <section
      className="max-w-[1400px] container mx-auto pt-25 bg-no-repeat bg-cover  px-4"
      style={{
        backgroundImage: `url(${gwoTwo})`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 md:gap-10 ">
        <div className="text-md md:text-xl t md:text-black leading-relaxed  space-y-1 p-4 backdrop-blur-xl md:backdrop-blur-none rounded-md shadow-xl">
          <p>Ghosh Para</p>
          <p>Saghata, Gaibandha</p>
          <p>Rangpur, Bangladesh</p>
        </div>
        <div className=" h-[500px] md:col-span-2">
          {/* <iframe
            className="rounded-2xl w-full h-full shadow-xl  md:shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57797.02594137446!2d89.5684850670837!3d25.125068869686043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd104fe1069c6b%3A0x55480cae8987e136!2sSaghata!5e0!3m2!1sen!2sbd!4v1751481643407!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            className="rounded-2xl w-full h-full shadow-xl  md:shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1806.3415428342057!2d89.57810590686978!3d25.11258701003014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA2JzQ1LjAiTiA4OcKwMzQnNDYuMSJF!5e0!3m2!1sen!2sbd!4v1751964032316!5m2!1sen!2sbd"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location