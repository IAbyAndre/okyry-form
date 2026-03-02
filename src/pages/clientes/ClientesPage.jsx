import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, CreditCard, Smartphone, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export default function ClientesPage() {
    const benefits = [
        {
            title: "Seguridad Garantizada",
            desc: "Monitoreo GPS en tiempo real y conductores profesionales verificados para tu tranquilidad.",
            icon: ShieldCheck,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Pagos Flexibles",
            desc: "Paga con efectivo, tarjeta o crédito Okyry. Sin sorpresas ni tarifas ocultas.",
            icon: CreditCard,
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            title: "Reserva Inteligente",
            desc: "Pide tu coche por WhatsApp o teléfono al instante. App móvil próximamente.",
            icon: Smartphone,
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Rapidez Okyry",
            desc: "Algoritmos de asignación inteligente para que el coche esté en tu puerta en minutos.",
            icon: Zap,
            color: "bg-orange-50 text-orange-600"
        }
    ];

    return (
        <div className="space-y-32">
            {/* Hero Section */}
            <section className="text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter"
                >
                    Muévete por Malabo con <span className="text-blue-600">clase.</span>
                </motion.h1>
                <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed mb-12">
                    Ya sea para ir al trabajo, al aeropuerto o a una cena especial, Okyry Cars es la forma más segura y cómoda de trasladarte.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="tel:+240000000000" className="btn btn-primary !py-4 !px-8 !rounded-full !text-lg">Pedir un viaje ahora</a>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {benefits.map((b, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-8 p-10 bg-white rounded-3xl border border-neutral-100 hover:shadow-xl transition-shadow"
                    >
                        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0", b.color)}>
                            <b.icon size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
                            <p className="text-neutral-500 leading-relaxed text-lg">{b.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Social Proof Section */}
            <section className="bg-neutral-900 text-white rounded-[4rem] p-12 md:p-24 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center gap-1 mb-8">
                        {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />)}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 italic leading-tight">
                        "Okyry Cars ha cambiado mi forma de moverme en la ciudad. Nunca más tengo que esperar en la calle por un taxi que no sé si es seguro."
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-neutral-800" />
                        <div className="text-left">
                            <p className="font-bold text-xl">Elena Nchama</p>
                            <p className="text-neutral-500">Cliente Frecuente</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-20 bg-blue-50 rounded-[4rem]">
                <h2 className="text-4xl font-bold mb-8">¿Aún no eres parte de Okyry?</h2>
                <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">Agrega nuestro número y pide tu primer coche hoy mismo. Experimenta la diferencia.</p>
                <Link to="/empresa/contacto" className="btn btn-primary !py-4 !px-12 !rounded-full !mx-auto">Contactar para Preguntas</Link>
            </section>
        </div>
    );
}

function cn(...inputs) {
    return twMerge(clsx(inputs));
}
