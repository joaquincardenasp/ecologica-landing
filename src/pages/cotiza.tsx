import Head from 'next/head';
import Link from 'next/link';
import type { JSX } from 'react';

export default function Cotiza(): JSX.Element {
  return (
    <>
      <Head><title>Cotiza tu piloto - EcoLógica</title></Head>
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white p-8 font-sans text-gray-800">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 my-12">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Cotiza tu piloto</h1>
          <p className="mb-8 text-center text-gray-600">Rellena este formulario y te enviaremos una cotización personalizada:</p>
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
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción del proyecto</label>
              <textarea 
                id="descripcion"
                name="descripcion" 
                placeholder="Describe tu obra o proyecto" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition h-32" 
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-medium mt-6 shadow-md">
              Solicitar cotización
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
