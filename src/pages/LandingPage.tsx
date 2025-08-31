import { useState } from "react";
import { Smartphone, Calendar, BarChart, Bell, ShoppingCart, Target, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroMockup from "@/assets/hero-mockup.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

// Placeholder URLs - Replace with real checkout links
const CHECKOUT_URL = "#checkout";
const CHECKOUT_URL_MENSAL = "#checkout-mensal";
const CHECKOUT_URL_ANUAL = "#checkout-anual";

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Calendar,
      title: "Planejamento semanal de marmitas (IA)",
      description: "Receba cardápios personalizados criados por inteligência artificial baseados nos seus objetivos."
    },
    {
      icon: BarChart,
      title: "Tabela de nutrientes por refeição",
      description: "Veja automaticamente calorias, proteínas, carboidratos e gorduras de cada marmita."
    },
    {
      icon: Smartphone,
      title: "Registro do que comeu",
      description: "Acompanhe facilmente o que você consumiu durante o dia com poucos cliques."
    },
    {
      icon: Bell,
      title: "Lembretes de água e refeições",
      description: "Nunca mais esqueça de comer ou beber água com nossos lembretes inteligentes."
    },
    {
      icon: ShoppingCart,
      title: "Lista automática de compras",
      description: "Gere automaticamente sua lista de compras baseada no seu plano semanal."
    },
    {
      icon: Target,
      title: "Metas personalizadas",
      description: "Emagrecer, ganhar peso, melhorar a saúde ou economizar - escolha seu objetivo."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Crie seu perfil",
      description: "Defina seu objetivo, quantas pessoas moram na casa e suas preferências alimentares."
    },
    {
      number: "02", 
      title: "Receba plano semanal",
      description: "Nossa IA cria um cardápio personalizado com marmitas deliciosas e nutritivas."
    },
    {
      number: "03",
      title: "Veja tabela nutricional",
      description: "Acompanhe automaticamente os valores nutricionais de cada refeição planejada."
    },
    {
      number: "04",
      title: "Receba lembretes",
      description: "Seja notificado sobre refeições, água e acompanhe seu progresso diário."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Perdi 8kg em 3 meses! O MealFlow AI organizou minha alimentação de forma prática e eficiente. Recomendo demais!",
      image: testimonial1
    },
    {
      name: "Carlos Mendes",
      role: "Personal Trainer",
      content: "Uso com meus clientes e os resultados são incríveis. O planejamento da IA é preciso e os clientes adoram a praticidade.",
      image: testimonial2
    },
    {
      name: "Ana Beatriz",
      role: "Nutricionista",
      content: "Facilitou muito meu trabalho! Agora posso focar mais nos pacientes enquanto o app cuida do planejamento nutricional.",
      image: testimonial3
    }
  ];

  const faqs = [
    {
      question: "Funciona para emagrecer e hipertrofia?",
      answer: "Sim! O MealFlow AI adapta os planos conforme seu objetivo: emagrecer, ganhar massa muscular, melhorar a saúde ou economizar. A IA calcula as calorias e macros ideais para cada meta."
    },
    {
      question: "Posso cadastrar minha família?",
      answer: "Claro! Você pode configurar o número de pessoas na casa e a IA ajustará as quantidades das receitas automaticamente para toda a família."
    },
    {
      question: "E se eu tiver restrições alimentares?",
      answer: "O app permite configurar diversas restrições: vegetariano, vegano, sem glúten, sem lactose, diabético e muitas outras. A IA cria planos respeitando suas limitações."
    },
    {
      question: "Posso trocar alimentos do plano?",
      answer: "Sim! Você pode solicitar mudanças no chat da IA ou gerar um novo plano a qualquer momento. O assistente entende suas preferências e faz ajustes personalizados."
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-poppins font-bold text-xl text-brand-secondary">
            MealFlow AI
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 bg-gradient-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-poppins font-bold text-4xl md:text-5xl xl:text-6xl text-brand-secondary leading-tight">
                  Organize suas marmitas fit com IA e alcance seus objetivos sem complicação
                </h1>
                <p className="text-xl text-brand-text leading-relaxed">
                  Cardápios personalizados, tabela nutricional automática e lembretes diários — tudo em um só app.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  className="btn-hero w-full md:w-auto"
                  onClick={() => window.open(CHECKOUT_URL, '_blank')}
                >
                  Começar agora
                </Button>
                <Button 
                  variant="outline"
                  className="btn-outline w-full md:w-auto ml-0 md:ml-4"
                  onClick={() => scrollToSection('como-funciona')}
                >
                  Ver como funciona
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img 
                src={heroMockup} 
                alt="MealFlow AI App Interface" 
                className="max-w-md w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-secondary mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-brand-text max-w-2xl mx-auto">
              Planeje, acompanhe e conquiste seus objetivos com a tecnologia mais avançada em nutrição
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-elevated p-6 hover:scale-105 transition-transform duration-200">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-brand-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-brand-secondary">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-text">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-secondary mb-4">
              Como funciona
            </h2>
            <p className="text-xl text-brand-text max-w-2xl mx-auto">
              Em apenas 4 passos simples, você terá um plano completo e personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-poppins font-bold text-2xl text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-brand-secondary">
                  {step.title}
                </h3>
                <p className="text-brand-text">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="provas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-secondary mb-4">
              Quem usa, recomenda
            </h2>
            <p className="text-xl text-brand-text max-w-2xl mx-auto">
              Veja os resultados reais de quem já transformou a alimentação com o MealFlow AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated p-6 text-center">
                <CardContent className="space-y-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto object-cover"
                  />
                  <p className="text-brand-text italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-poppins font-semibold text-brand-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-brand-text">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-secondary mb-4">
              Planos e preços
            </h2>
            <p className="text-xl text-brand-text max-w-2xl mx-auto">
              Escolha o plano ideal para transformar sua alimentação hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="card-elevated p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="font-poppins font-bold text-2xl text-brand-secondary mb-2">
                    Mensal
                  </h3>
                  <div className="mb-4">
                    <span className="font-poppins font-bold text-4xl text-brand-primary">
                      R$29,90
                    </span>
                    <span className="text-brand-text">/mês</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {['Acesso completo ao app', 'IA de planejamento', 'Lembretes inteligentes', 'Histórico completo', 'Lista de compras automática'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <span className="text-brand-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="btn-primary w-full"
                  onClick={() => window.open(CHECKOUT_URL_MENSAL, '_blank')}
                >
                  Escolher plano mensal
                </Button>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="card-elevated p-8 relative border-brand-primary border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Mais vantajoso
                </span>
              </div>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="font-poppins font-bold text-2xl text-brand-secondary mb-2">
                    Anual
                  </h3>
                  <div className="mb-2">
                    <span className="font-poppins font-bold text-4xl text-brand-primary">
                      R$19,90
                    </span>
                    <span className="text-brand-text">/mês</span>
                  </div>
                  <p className="text-sm text-brand-text">
                    Cobrança anual de R$238,80
                  </p>
                </div>

                <div className="space-y-3">
                  {['Acesso completo ao app', 'IA de planejamento', 'Lembretes inteligentes', 'Histórico completo', 'Lista de compras automática'].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-green-500">✅</span>
                      <span className="text-brand-text">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="btn-hero w-full"
                  onClick={() => window.open(CHECKOUT_URL_ANUAL, '_blank')}
                >
                  Escolher plano anual
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-text">
              <strong>Garantia de 7 dias:</strong> Não gostou? Devolvemos seu dinheiro.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-brand-secondary mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-xl text-brand-text">
              Tire suas dúvidas sobre o MealFlow AI
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <button
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="font-poppins font-semibold text-lg text-brand-secondary pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-brand-text leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-final" className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white">
              Pronto para virar a chave?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Junte-se a milhares de pessoas que já transformaram sua alimentação e conquistaram seus objetivos com o MealFlow AI.
            </p>
            <Button 
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/90 font-semibold px-12 py-4 text-xl rounded-2xl shadow-lg"
              onClick={() => window.open(CHECKOUT_URL, '_blank')}
            >
              Quero organizar minhas marmitas com IA
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-secondary py-12">
        <div className="container mx-auto px-4">
          {/* Ver como funciona button */}
          <div className="text-center mb-8">
            <Button 
              variant="outline"
              className="btn-outline border-white text-white hover:bg-white hover:text-brand-secondary"
              onClick={() => scrollToSection('como-funciona')}
            >
              Ver como funciona
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-poppins font-bold text-xl text-white mb-4">
                MealFlow AI
              </div>
              <p className="text-gray-400">
                Organizando marmitas com inteligência artificial para uma vida mais saudável.
              </p>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">Links</h4>
              <div className="space-y-2">
                <a href="#termos" className="block text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <a href="#privacidade" className="block text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#suporte" className="block text-gray-400 hover:text-white transition-colors">
                  Suporte
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">Segurança</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">🔒</span>
                  <span className="text-gray-400 text-sm">SSL Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-gray-400 text-sm">LGPD Compliance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MealFlow AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <Button 
          className="btn-hero w-full shadow-lg"
          onClick={() => window.open(CHECKOUT_URL, '_blank')}
        >
          Começar agora
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;