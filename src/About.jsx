import React from 'react'
import Header from './Header';
const About = () => {
  return (
    <div>
      <Header />
      <section
        style={{
          backgroundImage: "url('/08.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
          backgroundBlendMode: "multiply",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p className="text-2xl text-#181b20 py-3 border-b-3 border-white-900 hover:border-2xl-solid-yellow transition">
          About Us
        </p>
      </section>
      <section className="flex items-start justify-between flex-col">
        <div className="flex items-start gap-13 justify-between flex-col my-25 mx-60">
          <h1 className="text-2xl text-medium ">
            <span className="border-b-3 border-yellow-700 py-6">Our</span> Hotel
          </h1>
          <p className="max-w-200">
            Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit
            amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante,
            nec dignissim massa felis sed nulla. Donec porttitor nulla et
            tristique dignissim. Cras vulputate iaculis metus ac rutrum. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Pellentesque vel justo
          </p>
          <p className="max-w-200">
            Nam eget nulla in nibh gravida condimentum non sed nisi. Integer
            ipsum nisl, porta id venenatis quis, fringilla ac est nulla lorem
            nunc, viverra at aliquet at. Nunc et tincidunt nisl. Etiam vitae
            lobortis eros. Cras quis vehicula odio. Ut euismod nunc quis nisi
            facilisis dapibus. Vestibulum dignissim sem id velit dignissim
            ornare.
          </p>
        </div>
        <img src="/Hero.webp" className="w-320 mx-30 h-120" alt="Hero Image" />
      </section>
      <section className="flex items-start gap-13 justify-between flex-col my-25 mx-60">
        <h1 className="text-2xl text-medium ">
          <span className="border-b-3 border-yellow-700 py-6">Soho</span> Hotel
          FAQ’s
        </h1>
        <p className="max-w-200">
          Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet.
          Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec
          dignissim massa felis sed nulla. Donec porttitor nulla et tristique
          dignissim. Cras vulputate iaculis metus ac rutrum. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Pellentesque vel justo
        </p>
        <p className="max-w-200 font-roboto">
          Nam eget nulla in nibh gravida condimentum non sed nisi. Integer ipsum
          nisl, porta id venenatis quis, fringilla ac est nulla lorem nunc,
          viverra at aliquet at. Nunc et tincidunt nisl. Etiam vitae lobortis
          eros. Cras quis vehicula odio. Ut euismod nunc quis nisi facilisis
          dapibus. Vestibulum dignissim sem id velit dignissim ornare.
        </p>
        <div className="flex flex-row gap-5 mr-90">
          <img src="09.jpg" className='w-70' alt=""/>
          <img src="10.jpg" className='w-70' alt=""/>
          <img src="11.jpg" className='w-70' alt=""/>
          <img src="12.jpg" className='w-70' alt=""/>
        </div>
      </section>
    </div>
  );
}

export default About