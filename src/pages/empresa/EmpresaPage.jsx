import { motion } from 'framer-motion';
import { Briefcase, Building, BarChart, Handshake, ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmpresaPage() {
    return (
        <div className="space-y-32">
            {/* Hero */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                        Movilidad corporativa <br />
                        <span className="text-blue-600">sin límites.</span>
                    </h1>
                    <p className="text-xl text-neutral-500 leading-relaxed mb-12">
                        Okyry Cars for Business ofrece soluciones logísticas y de transporte diseñadas para empresas que no pueden permitirse perder ni un segundo.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/empresa/contacto" className="btn btn-primary !rounded-full !py-4 !px-8">Empezar ahora</Link>
                        <Link to="/empresa/inscripcion" className="btn btn-ghost !rounded-full !py-4 !px-8 border border-neutral-200">¿Eres conductor? Regístrate</Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="aspect-square bg-blue-600 rounded-[4rem] overflow-hidden relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                        alt="Corporate Center"
                        className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white">
                        <p className="text-3xl font-bold leading-tight">"La eficiencia de nuestro personal aumentó un 20% gracias a la puntualidad de Okyry."</p>
                    </div>
                </motion.div>
            </section>

            {/* Services for Business */}
            <section className="py-20">
                <h2 className="text-4xl font-bold mb-16 text-center">Soluciones para tu empresa</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Traslado de Personal",
                            desc: "Rutas optimizadas para tus empleados, garantizando que todos lleguen a tiempo y seguros.",
                            icon: Building
                        },
                        {
                            title: "Portal de Gestión",
                            desc: "Control total de gastos, facturación mensual consolidada y gestión de trayectos en tiempo real.",
                            icon: BarChart
                        },
                        {
                            title: "Eventos & VIP",
                            desc: "Transporte premium para tus invitados especiales y traslados ejecutivos de alta gama.",
                            icon: Handshake
                        }
                    ].map((s, i) => (
                        <div key={i} className="p-10 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-2xl transition-all group">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <s.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                            <p className="text-neutral-500 leading-relaxed mb-6">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Driver Registration CTA */}
            <section className="bg-blue-600 text-white rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
                <div className="max-w-3xl relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Quieres formar parte de nuestra flota?</h2>
                    <p className="text-xl text-blue-100 mb-12">
                        Buscamos profesionales con coche propio o dispuestos a conducir los vehículos de la empresa. Ofrecemos las mejores condiciones del mercado.
                    </p>
                    <Link to="/empresa/inscripcion" className="btn bg-white text-blue-600 !rounded-full !py-4 !px-12 !text-lg hover:bg-neutral-100 transition-colors inline-flex items-center gap-2 font-bold">
                        Postularme ahora <ChevronRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}
