"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Music,
  MapPin,
  Calendar,
  Users,
  Mail,
  Phone,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import pic from "../public/arianap3.jpg";
import pic2 from "../public/pic5.jpg";
import pic3 from "../public/ariana.webp";
import pic4 from "../public/ariane4.jpg";

export default function ArianesPressKit() {
  const heroRef = useScrollReveal({ threshold: 0.1 });
  const bioRef = useScrollReveal({ threshold: 0.2, delay: 200 });
  const trajectoryRef = useScrollReveal({ threshold: 0.2, delay: 400 });
  const killSyncRef = useScrollReveal({ threshold: 0.2, delay: 600 });
  const contactRef = useScrollReveal({ threshold: 0.2, delay: 800 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={pic}
          alt="Ariane performing"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ARIANE
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            DJ • Producer • Underground Pioneer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge
              variant="outline"
              className="bg-white/10 border-white/20 text-white"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Resistencia, Chaco
            </Badge>
            <Badge
              variant="outline"
              className="bg-white/10 border-white/20 text-white"
            >
              <Music className="w-4 h-4 mr-2" />
              Techno • Hard Techno • Psytrance
            </Badge>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Explore Press Kit
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section
        ref={bioRef}
        className="py-20 px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Biografía
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      <strong className="text-purple-400">
                        Ariana Amelia Sánchez
                      </strong>
                      , conocida artísticamente como{" "}
                      <strong className="text-pink-400">Ariane</strong>, es una
                      DJ emergente con una propuesta sonora en constante
                      evolución.
                    </p>
                    <p>
                      Nacida en{" "}
                      <em className="text-purple-300">Resistencia, Chaco</em>,
                      su vínculo con la música comenzó desde temprana edad,
                      asistiendo a eventos y festivales que marcaron su pasión
                      por la electrónica.
                    </p>
                    <p>
                      Su fascinación por el género se consolidó en 2010, durante
                      el auge del house y EDM, y en 2020 decidió dar el paso
                      definitivo a la cabina, explorando el arte del DJing más
                      allá de la pista de baile.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={pic2}
                      alt="Ariane portrait"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trajectory Section */}
      <section
        ref={trajectoryRef}
        className="py-20 px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                Trayectoria
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={pic4}
                      alt="Ariane performing live"
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    En tan solo tres años de trayectoria, ha logrado
                    posicionarse como una de las artistas más relevantes de la
                    escena underground local, llevando su música a ciudades
                    como:
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Buenos Aires",
                      "Corrientes",
                      "Formosa",
                      "Sáenz Peña",
                      "Misiones",
                    ].map((city) => (
                      <Badge
                        key={city}
                        variant="outline"
                        className="bg-purple-600/20 border-purple-400/30 text-purple-300 justify-center"
                      >
                        {city}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="bg-white/10 mb-8" />

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Artistas Colaboradores
                </h3>
                <p className="text-gray-300 mb-6">
                  Su energía en cabina y su técnica depurada le han permitido
                  compartir escenario con referentes como:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Bruno Brugnoli",
                    "Pluj",
                    "Franco Musachi",
                    "Another",
                    "WearsPrada",
                    "Franzizca",
                    "Anita B Queen",
                  ].map((artist) => (
                    <Card
                      key={artist}
                      className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-400/30"
                    >
                      <CardContent className="p-4 text-center">
                        <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-white font-medium text-sm">
                          {artist}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kill Sync Section */}
      <section
        ref={killSyncRef}
        className="py-20 px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                      Kill Sync
                    </span>{" "}
                    & Formación
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Ariane ha desarrollado un enfoque sólido y versátil,
                      perfeccionando su técnica tanto de forma autodidacta como
                      a través de su formación en{" "}
                      <strong className="text-purple-400">
                        Levels Academy
                      </strong>
                      .
                    </p>
                    <p>
                      Además, su compromiso con la escena underground la llevó a
                      fundar <strong className="text-red-400">Kill Sync</strong>
                      , una productora que impulsa eventos de <em>techno</em>,{" "}
                      <em>hard techno</em> y <em>psytrance</em>, consolidando su
                      papel como una figura activa en la expansión del
                      movimiento electrónico en su ciudad.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Badge className="bg-red-600/20 border-red-400/30 text-red-300">
                      Techno
                    </Badge>
                    <Badge className="bg-red-600/20 border-red-400/30 text-red-300">
                      Hard Techno
                    </Badge>
                    <Badge className="bg-red-600/20 border-red-400/30 text-red-300">
                      Psytrance
                    </Badge>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={pic3}
                      alt="Kill Sync events"
                      width={500}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-4">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-20 px-4 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                Contacto
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Información de Contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span>booking@ariane-dj.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-5 h-5 text-purple-400" />
                      <span>+54 9 362 XXX-XXXX</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Instagram className="w-5 h-5 text-purple-400" />
                      <span>@ariane.dj</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span>Resistencia, Chaco, Argentina</span>
                    </div>
                  </div>
                </div>

                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Tu mensaje..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Ariane. Todos los derechos reservados.</p>
          <p className="mt-2">
            Press Kit • Electronic Music Artist • Argentina
          </p>
        </div>
      </footer>
    </div>
  );
}
