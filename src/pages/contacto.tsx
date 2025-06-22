import Head from 'next/head';
import Link from 'next/link';
import type { JSX } from 'react';

export default function Contacto(): JSX.Element {
  return (
    <>
      <Head><title>Contacto - EcoLógica</title></Head>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-8 font-sans text-gray-800">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 my-12">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Contáctanos</h1>
          <p className="mb-8 text-center text-gray-600">Déjanos tus datos y nos pondremos en contacto contigo:</p>
          <form action="https://formsubmit.co/tucorreo@ejemplo.com" method="POST" className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input 
                id="nombre"
                name="nombre" 
                placeholder="Tu nombre" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">Empresa</label>
              <input 
                id="empresa"
                name="empresa" 
                placeholder="Nombre de tu empresa" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input 
                id="email"
                name="email" 
                type="email" 
                placeholder="tu@email.com" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-medium mt-6 shadow-md">
              Enviar
            </button>
          </form>
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:underline font-medium">
              ← Volver al Inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
