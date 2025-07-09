import React from 'react'
import Header from './Header'
const Contact = () => {
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
          Contact Us
        </p>
      </section>
	</div>
  );
}

export default Contact