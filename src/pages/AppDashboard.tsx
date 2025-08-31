import { useState } from "react";
import { Routes, Route, NavLink, useLocation, Navigate } from "react-router-dom";
import { 
  Home, 
  Bot, 
  Droplets, 
  Clock as HistoryIcon, 
  User, 
  Menu, 
  X,
  Calendar,
  Target,
  Clock,
  Plus,
  ChevronRight,
  Utensils,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

// Mock data
const mockUser = {
  name: "Maria Silva",
  age: 32,
  weight: 68,
  height: 165,
  goal: "Emagrecer",
  people: 2
};

const mockMealPlan = [
  {
    meal: "Café da Manhã",
    name: "Aveia com Frutas",
    portion: "1 tigela (200g)",
    calories: 280,
    protein: 12,
    carbs: 45,
    fat: 6
  },
  {
    meal: "Almoço", 
    name: "Frango Grelhado com Batata Doce",
    portion: "150g frango + 100g batata",
    calories: 420,
    protein: 35,
    carbs: 35,
    fat: 8
  },
  {
    meal: "Lanche",
    name: "Iogurte Natural com Castanhas",
    portion: "1 pote (150g) + 15g castanhas",
    calories: 180,
    protein: 8,
    carbs: 12,
    fat: 12
  },
  {
    meal: "Jantar",
    name: "Salmão com Legumes",
    portion: "120g salmão + 200g legumes",
    calories: 380,
    protein: 28,
    carbs: 20,
    fat: 18
  }
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === 'collapsed';

  const sidebarItems = [
    { title: "Dashboard", url: "/app", icon: Home, exact: true },
    { title: "Assistente IA", url: "/app/assistant", icon: Bot },
    { title: "Controle de Água", url: "/app/water", icon: Droplets },
    { title: "Histórico", url: "/app/history", icon: HistoryIcon },
    { title: "Perfil", url: "/app/profile", icon: User },
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <div className="font-poppins font-bold text-xl text-brand-primary">
            {!collapsed ? "MealFlow AI" : "M"}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.exact}
                      className={({ isActive: navIsActive }) => 
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          navIsActive 
                            ? 'bg-brand-primary text-white' 
                            : 'text-brand-text hover:bg-brand-surface'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

const Dashboard = () => {
  const dailyTotals = mockMealPlan.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <div className="space-y-6">
      {/* Daily Summary */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-brand-primary" />
            <span>Resumo Diário - Hoje</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">{dailyTotals.calories}</div>
              <div className="text-sm text-brand-text">Calorias</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">{dailyTotals.protein}g</div>
              <div className="text-sm text-brand-text">Proteínas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">{dailyTotals.carbs}g</div>
              <div className="text-sm text-brand-text">Carboidratos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">{dailyTotals.fat}g</div>
              <div className="text-sm text-brand-text">Gorduras</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Meal Plan */}
      <Card className="card-elevated">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-brand-primary" />
              <span>Plano da Semana</span>
            </CardTitle>
            <Button className="btn-primary">
              <Bot className="h-4 w-4 mr-2" />
              Gerar novo plano (IA)
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockMealPlan.map((meal, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-brand-surface rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-secondary">{meal.meal}</div>
                    <div className="text-sm text-brand-text">{meal.name}</div>
                    <div className="text-xs text-brand-text">{meal.portion}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-brand-primary">{meal.calories} kcal</div>
                  <div className="text-xs text-brand-text">
                    P: {meal.protein}g | C: {meal.carbs}g | G: {meal.fat}g
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Olá! Sou seu assistente de nutrição. Como posso ajudar você hoje?'
    }
  ]);
  const [input, setInput] = useState('');

  const suggestions = [
    "Criar plano econômico",
    "Trocar refeição do almoço",
    "Gerar lista de compras",
    "Ajustar calorias"
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, 
      { type: 'user', content: input },
      { type: 'bot', content: 'Entendi! Vou criar um novo plano personalizado para você. Aguarde um momento...' }
    ]);
    setInput('');
  };

  return (
    <div className="space-y-6">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-brand-primary" />
            <span>Assistente IA - MealFlow</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 bg-brand-surface rounded-lg">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white border border-gray-200'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setInput(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="btn-primary">
              Enviar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const WaterControl = () => {
  const [waterIntake, setWaterIntake] = useState(1200); // ml
  const dailyGoal = 2500; // ml
  const progress = (waterIntake / dailyGoal) * 100;

  const addWater = (amount: number) => {
    setWaterIntake(prev => Math.min(prev + amount, dailyGoal));
  };

  return (
    <div className="space-y-6">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Droplets className="h-5 w-5 text-brand-primary" />
            <span>Controle de Água</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress Circle */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="transparent"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="hsl(var(--brand-primary))"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="text-3xl font-bold text-brand-primary">{waterIntake}ml</div>
                <div className="text-brand-text">de {dailyGoal}ml</div>
                <div className="text-sm text-brand-text">{Math.round(progress)}%</div>
              </div>
            </div>
          </div>

          {/* Quick Add Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => addWater(200)}
              className="btn-outline h-16"
            >
              <Plus className="h-4 w-4 mr-2" />
              +200ml
            </Button>
            <Button
              onClick={() => addWater(500)}
              className="btn-primary h-16"
            >
              <Plus className="h-4 w-4 mr-2" />
              +500ml
            </Button>
          </div>

          {/* Reminders */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Próximo lembrete</h4>
            <p className="text-blue-600 text-sm">
              🔔 Em 45 minutos - "Hora de beber água!"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const History = () => {
  const historyData = [
    { date: "Hoje", consumed: ["Café da manhã: Aveia com frutas", "Água: 1200ml"], time: "14:30" },
    { date: "Ontem", consumed: ["Todas as refeições completas", "Água: 2400ml"], time: "22:00" },
    { date: "Anteontem", consumed: ["Café, almoço e jantar", "Água: 1800ml"], time: "21:30" }
  ];

  return (
    <div className="space-y-6">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HistoryIcon className="h-5 w-5 text-brand-primary" />
            <span>Histórico Diário</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {historyData.map((entry, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-brand-surface rounded-lg">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-brand-secondary">{entry.date}</h4>
                    <span className="text-sm text-brand-text">{entry.time}</span>
                  </div>
                  <div className="space-y-1">
                    {entry.consumed.map((item, idx) => (
                      <p key={idx} className="text-sm text-brand-text">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="space-y-6">
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5 text-brand-primary" />
            <span>Perfil & Configurações</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personal Info */}
          <div>
            <h4 className="font-semibold text-brand-secondary mb-4">Dados Pessoais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-brand-text mb-1">Nome</label>
                <input 
                  type="text" 
                  defaultValue={mockUser.name}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-brand-text mb-1">Idade</label>
                <input 
                  type="number" 
                  defaultValue={mockUser.age}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-brand-text mb-1">Peso (kg)</label>
                <input 
                  type="number" 
                  defaultValue={mockUser.weight}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-brand-text mb-1">Altura (cm)</label>
                <input 
                  type="number" 
                  defaultValue={mockUser.height}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
            </div>
          </div>

          {/* Goal */}
          <div>
            <h4 className="font-semibold text-brand-secondary mb-4">Objetivo Atual</h4>
            <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary">
              <option value="emagrecer">Emagrecer</option>
              <option value="ganhar-peso">Ganhar peso</option>
              <option value="saude">Melhorar saúde</option>
              <option value="economia">Economizar</option>
            </select>
          </div>

          {/* Subscription */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Plano Ativo</h4>
            <p className="text-green-600 mb-4">Plano Anual - Renovação em 15/08/2025</p>
            <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-100">
              Gerenciar Assinatura
            </Button>
          </div>

          {/* Notifications */}
          <div>
            <h4 className="font-semibold text-brand-secondary mb-4">Notificações</h4>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-brand-text">Lembretes de refeições</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded" />
                <span className="text-brand-text">Lembretes de água</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-brand-text">Relatórios semanais</span>
              </label>
            </div>
          </div>

          <Button className="btn-primary">
            Salvar Alterações
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const AppDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-white flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <h1 className="font-poppins font-semibold text-xl text-brand-secondary">
                Dashboard
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Target className="h-4 w-4 mr-2" />
                {mockUser.goal}
              </Button>
              <div className="text-sm text-brand-text">
                Olá, {mockUser.name}!
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-brand-surface">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assistant" element={<Assistant />} />
              <Route path="/water" element={<WaterControl />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/app" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppDashboard;