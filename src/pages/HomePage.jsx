import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, MapPin, Star, Users, Briefcase, ArrowUpRight, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export default function HomePage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-neutral-50 to-neutral-50 z-10" />
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.15 }}
                        transition={{ duration: 2 }}
                        className="w-full h-full bg-[url('https://images.unsplash.com/photo-1449960232330-3efef9363595?auto=format&fit=crop&q=80')] bg-cover bg-center"
                    />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-20">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-8"
                        >
                            <Star size={14} fill="currentColor" />
                            LA REVOLUCIÓN DE LA MOVILIDAD EN MALABO
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-bold text-neutral-900 leading-[1.1] mb-8 tracking-tighter">
                            El futuro de <span className="text-blue-600">Guinea</span> está en movimiento.
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-500 mb-12 leading-relaxed max-w-2xl">
                            Okyry Cars redefine el transporte con una flota premium, conductores de élite y tecnología que nos mantiene conectados.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/clientes" className="btn btn-primary !py-5 !px-10 !text-lg !rounded-full shadow-2xl shadow-blue-200 group">
                                Pedir un coche <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/empresa" className="btn btn-ghost !py-5 !px-10 !text-lg !rounded-full bg-neutral-100 hover:bg-neutral-200 group">
                                Servicios Corporativos <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-2xl flex gap-12"
                    >
                        <div>
                            <p className="text-4xl font-bold text-neutral-900">100%</p>
                            <p className="text-sm text-neutral-400 font-medium">Seguridad</p>
                        </div>
                        <div className="w-px h-12 bg-neutral-100" />
                        <div>
                            <p className="text-4xl font-bold text-neutral-900">24/7</p>
                            <p className="text-sm text-neutral-400 font-medium">Disponibilidad</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Hub */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Soluciones para cada <span className="text-neutral-400 italic font-medium">trayecto.</span></h2>
                            <p className="text-xl text-neutral-500">Ya sea para cruzar Malabo o gestionar la logística de tu empresa, Okyry Cars es tu socio de confianza.</p>
                        </div>
                        <Link to="/empresa/contacto" className="text-blue-600 font-bold flex items-center gap-2 group underline-offset-8 hover:underline text-lg">
                            Hablar con un asesor <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "Clientes",
                                desc: "Transporte rápido y seguro con solo una llamada o mensaje. Flota moderna con aire acondicionado.",
                                icon: Users,
                                link: "/clientes",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                title: "Empresas",
                                desc: "Planes corporativos, facturación mensual y traslados de personal con máxima puntualidad.",
                                icon: Briefcase,
                                link: "/empresa",
                                color: "bg-emerald-50 text-emerald-600"
                            },
                            {
                                title: "Conductores",
                                desc: "¿Tienes experiencia? Únete a la mayor red de movilidad en el país y crece con nosotros.",
                                icon: Car,
                                link: "/empresa/inscripcion",
                                color: "bg-orange-50 text-orange-600"
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group p-10 rounded-3xl border border-neutral-100 bg-neutral-50 hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 cursor-pointer"
                            >
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8", card.color)}>
                                    <card.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                                <p className="text-neutral-500 leading-relaxed mb-8">{card.desc}</p>
                                <Link to={card.link} className="inline-flex items-center gap-2 font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                                    Saber más <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Okyry Section */}
            <section className="py-32 bg-neutral-900 text-white rounded-[3rem] md:rounded-[6rem] mx-4 md:mx-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">
                                ¿Por qué Malabo elige <br />
                                <span className="text-blue-500">Okyry Cars?</span>
                            </h2>

                            <div className="space-y-12">
                                {[
                                    { icon: Shield, title: "Seguridad Certificada", desc: "Cada conductor pasa por un riguroso proceso de selección y antecedentes penales." },
                                    { icon: Clock, title: "Puntualidad Absoluta", desc: "Nuestro sistema de gestión de rutas garantiza que llegues a tiempo, siempre." },
                                    { icon: MapPin, title: "Cobertura Total", desc: "Desde el aeropuerto hasta el centro, cubrimos toda el área metropolitana de Malabo." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                            <item.icon size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1549421263-54014e3b7470?auto=format&fit=crop&q=80"
                                alt="Conductor Profesional"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <p className="text-5xl font-black text-blue-500 mb-2">+5,000</p>
                                <p className="text-xl font-medium text-neutral-300 tracking-widest uppercase">Viajes seguros al mes</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-40">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">¿Listo para el <br />próximo trayecto?</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/empresa/contacto" className="btn btn-primary !py-5 !px-12 !text-xl !rounded-full">
                                Empezar ahora
                            </Link>
                            <a href="tel:+240000000000" className="btn btn-ghost !py-5 !px-12 !text-xl !rounded-full border-2 border-neutral-100">
                                Llamar a Okyry
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

