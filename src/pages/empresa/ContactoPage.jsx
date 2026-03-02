import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export default function ContactoPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Estamos a un <span className="text-blue-600">click</span> de distancia.</h1>
                <p className="text-xl text-neutral-500 max-w-2xl mx-auto">Nuestro equipo de atención al cliente en Malabo está disponible 24/7 para ayudarte con cualquier duda o servicio corporativo.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100 italic transition-transform hover:-rotate-1">
                        <h3 className="text-2xl font-bold mb-8 NOT-italic">Contacto directo</h3>
                        <div className="space-y-6 NOT-italic">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Llámanos</p>
                                    <p className="text-lg font-bold">+240 000 000 000</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Email</p>
                                    <p className="text-lg font-bold">info@okyrycars.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Oficina</p>
                                    <p className="text-lg font-bold">Malabo II, Guinea Ecuatorial</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-neutral-100 shadow-2xl shadow-neutral-200/50">
                        <h3 className="text-3xl font-bold mb-8">Envíanos un mensaje</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="field">
                                    <label>Nombre completo</label>
                                    <input type="text" placeholder="Ej: Juan Nguema" className="w-full" required />
                                </div>
                                <div className="field">
                                    <label>Email corporativo</label>
                                    <input type="email" placeholder="email@empresa.com" className="w-full" required />
                                </div>
                            </div>
                            <div className="field">
                                <label>Asunto</label>
                                <select className="w-full bg-neutral-100 p-4 rounded-xl outline-none">
                                    <option>Servicio Corporativo</option>
                                    <option>Quejas o Sugerencias</option>
                                    <option>Soporte Técnico</option>
                                    <option>Otros</option>
                                </select>
                            </div>
                            <div className="field">
                                <label>Mensaje</label>
                                <textarea rows="5" placeholder="¿En qué podemos ayudarte?" className="w-full" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full justify-center !py-4 !text-lg !rounded-2xl group">
                                Enviar Mensaje <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
