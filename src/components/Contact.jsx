import React from "react";
import Form from './Form'

const Contact = () => {
  return (
    <div className="md:mt-[100px] sm:mt-[350px] mt-[400px]">
      <h2 id="contacto" className="text-center text-4xl">Contacto</h2>
      <div className="flex md:flex-row flex-col md:mt-10 mt-0">
        <div className="md:w-1/2 w-full md:p-0 p-8">
          <div>
            <span className="md:text-8xl text-6xl"><span className="orange">90% </span>De Descuento</span><br />
            <div className="flex gap-4 items-end">
            <span className="text-4xl darkgray line-through">Antes $500</span>
            <span className="text-6xl">Ahora $50</span>
            </div>
            <p className="text-xl mt-5 darkgray">Obtén este curso ahora por tan solo 50 dólares, oferta exclusiva por tiempo limitado. Envíanos un correo o escríbenos al WhatsApp para más información.</p>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:px-14 py-0 p-8">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
