import React from "react";
import ws from "../assets/images/ws.png";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      alert("Por favor completa todos los campos");
      return;
    }

    setLoading(true); // Desactiva el botón

    try {
      const res = await fetch("https://mailer-l1ye.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        alert("Mensaje enviado correctamente ✅");
        setEmail("");
        setMessage("");
      } else {
        const errorText = await res.text();
        alert("❌ Error al enviar: " + errorText);
      }
    } catch (err) {
      alert("❌ Error de conexión con el servidor");
      console.error(err);
    } finally {
      setLoading(false); // Reactiva el botón
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 lightblack lightgray w-full rounded-lg sm:p-8 p-4"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="darkblack text-white px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2"
      />
      <textarea
        placeholder="Mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="darkblack text-white px-4 py-2 mb-4 h-40 rounded-md focus:outline-none focus:ring-2"
      />
      <button
        type="submit"
        disabled={loading}
        className={`${
          loading
            ? "bg-orange-300 cursor-not-allowed"
            : "bgorange hover:bg-orange-400"
        } sm:py-3 py-2 rounded-full text-white font-bold transition duration-300`}
      >
        {loading ? "ENVIANDO..." : "ENVIAR"}
      </button>
      <a
        href="https://wa.me/+18097155343"
        target="_blank"
        className="w-full bggreen hover:bg-green-400 sm:py-3 py-2 flex justify-center items-center gap-2 font-bold rounded-full mt-4 text-white no-underline"
      >
        <img src={ws} alt="whatsapp" className="size-6" />
        <span>WhatsApp chat</span>
      </a>
    </form>
  );
};

export default Form;
