import Head from 'next/head';
import { CheckCircle, ChevronRight, BarChart3, Recycle, Factory } from 'lucide-react';
import Link from 'next/link';
import type { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>EcoLógica - Clasificación Inteligente de RCD</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="EcoLógica - Soluciones de IA para automatizar, trazar y valorizar residuos de construcción directamente en obra." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 font-sans">
        {/* Hero - Removed background image */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-28 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-sm leading-tight">
              Clasificación Inteligente de Residuos de Construcción
            </h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              IA para automatizar, trazar y valorizar residuos directamente en obra.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="bg-white text-blue-700 px-6 py-3 rounded-xl hover:bg-gray-100 transition font-semibold shadow-lg flex items-center justify-center gap-2 group">
                Solicita una Demo <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="/cotiza" className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-950 transition font-semibold shadow-lg border border-blue-700">
                Cotiza tu piloto
              </Link>

              <Link href="/contacto" className="bg-transparent text-white px-6 py-3 rounded-xl hover:bg-blue-700/30 transition font-semibold border border-white/50">
                Más información
              </Link>
            </div>
          </div>
        </section>

        {/* Propuesta de valor - Enhanced */}
        <section id="propuesta" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-center mb-8 text-blue-800">Nuestra propuesta</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              EcoLógica permite a mandantes de obra cumplir con normativas como la <span className="font-medium">Ley REP</span> sin fricción operativa.
              Integramos visión computacional para automatizar la clasificación de residuos valorizables y generar trazabilidad en tiempo real.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <BarChart3 className="text-blue-700 w-6 h-6" />
                </div>
                <h3 className="font-medium text-lg mb-2">Analítica en tiempo real</h3>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Recycle className="text-blue-700 w-6 h-6" />
                </div>
                <h3 className="font-medium text-lg mb-2">Valorización de residuos</h3>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Factory className="text-blue-700 w-6 h-6" />
                </div>
                <h3 className="font-medium text-lg mb-2">Optimización en obra</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios para obras - Enhanced */}
        <section id="beneficios" className="py-24 px-6 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-800">Beneficios para obras</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-3">Trazabilidad Ambiental</h3>
                  <p className="text-gray-600">Genera reportes útiles para certificaciones LEED/EDGE y cumplimiento de Ley REP.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-3">Clasificación en Terreno</h3>
                  <p className="text-gray-600">Reduce acumulación en obra gracias a la detección automática con IA.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-3">Optimización de Costos</h3>
                  <p className="text-gray-600">Menor uso de mano de obra y menor volumen transportado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modelos de implementación - Enhanced */}
        <section id="modelos" className="py-24 px-6 bg-white">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-800">Modelos de implementación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-200">
              <h3 className="font-bold text-xl mb-4 text-blue-700">Plan por Obra</h3>
              <p className="text-gray-600 mb-4">Pago único por proyecto, ideal para pilotos o remodelaciones.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span>Instalación y configuración</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span>Reportes completos</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-200">
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">Recomendado</div>
              <h3 className="font-bold text-xl mb-4 text-blue-700">Suscripción Mensual</h3>
              <p className="text-gray-600 mb-4">Incluye soporte, métricas, actualizaciones y recolección con trazabilidad.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span>Actualizaciones constantes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-4 h-4" />
                  <span>Soporte técnico preferencial</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA - New section */}
        <section className="py-20 px-6 bg-blue-700 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">¿Listo para optimizar la gestión de residuos en tu obra?</h2>
            <p className="mb-8 text-lg opacity-90">Descubre cómo EcoLógica puede transformar tu proceso de gestión de RCD.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
                Programa una demostración
              </Link>
            </div>
          </div>
        </section>

        {/* Footer - Enhanced */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-2xl font-bold text-white mb-4 md:mb-0">EcoLógica</div>
              <div className="flex gap-6">
                <Link href="/contacto" className="hover:text-white transition">Contacto</Link>
                <Link href="#beneficios" className="hover:text-white transition">Beneficios</Link>
                <Link href="#modelos" className="hover:text-white transition">Planes</Link>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-center">
              © 2025 EcoLógica. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
