import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';

const Index = () => {
  const [activeTab, setActiveTab] = useState('catalog');
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; price: number } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    const savedUsername = localStorage.getItem('username');
    if (loggedIn === 'true' && savedUsername) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
    }
  }, []);

  const generateRandomUsername = () => {
    const adjectives = ['Cosmic', 'Stellar', 'Galactic', 'Astro', 'Nebula', 'Quantum', 'Solar', 'Lunar'];
    const nouns = ['Star', 'Nova', 'Comet', 'Meteor', 'Galaxy', 'Orbit', 'Eclipse', 'Voyager'];
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNum = Math.floor(Math.random() * 9999);
    return `${randomAdj}${randomNoun}${randomNum}`;
  };

  const handleTelegramLogin = () => {
    const newUsername = generateRandomUsername();
    setUsername(newUsername);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', newUsername);
    setShowLoginDialog(false);
    window.open('https://t.me/fiarqq', '_blank');
  };

  const cardNumber = '2202 2088 4712 6159';

  const handleBuyClick = (productName: string, price: number) => {
    setSelectedProduct({ name: productName, price });
    setShowPaymentDialog(true);
  };

  const copyCardNumber = () => {
    navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
    toast.success('Номер карты скопирован!');
  };

  const starPackages = [
    {
      id: 1,
      name: 'Комета',
      stars: 50,
      price: 299,
      popular: false,
      icon: '💫',
    },
    {
      id: 2,
      name: 'Созвездие',
      stars: 150,
      price: 799,
      popular: true,
      icon: '✨',
    },
    {
      id: 3,
      name: 'Галактика',
      stars: 500,
      price: 2499,
      popular: false,
      icon: '🌌',
    },
    {
      id: 4,
      name: 'Вселенная',
      stars: 1000,
      price: 4499,
      popular: false,
      icon: '🌠',
    },
  ];

  const subscriptions = [
    {
      id: 1,
      name: 'Ежедневные звёзды',
      stars: 10,
      price: 199,
      period: 'месяц',
    },
    {
      id: 2,
      name: 'Звёздный поток',
      stars: 30,
      price: 499,
      period: 'месяц',
    },
    {
      id: 3,
      name: 'Космический VIP',
      stars: 100,
      price: 1499,
      period: 'месяц',
    },
  ];

  return (
    <>
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
              <Icon name="LogIn" size={24} />
              Вход в ElvShop
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Выберите удобный способ входа
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <Button 
              className="w-full justify-start gap-3 h-12 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white"
              onClick={handleTelegramLogin}
            >
              <Icon name="Send" size={20} />
              Войти через Telegram
            </Button>
            <Button 
              className="w-full justify-start gap-3 h-12 bg-white hover:bg-gray-100 text-gray-900"
              onClick={() => toast.info('Вход через Google в разработке')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Войти через Google
            </Button>
            <Button 
              className="w-full justify-start gap-3 h-12 bg-[#5865F2] hover:bg-[#5865F2]/90 text-white"
              onClick={() => toast.info('Вход через Discord в разработке')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Войти через Discord
            </Button>
            <Button 
              className="w-full justify-start gap-3 h-12 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white"
              onClick={() => toast.info('Вход через Twitter в разработке')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Войти через Twitter
            </Button>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-white/60">или</span>
              </div>
            </div>
            <Button 
              variant="outline"
              className="w-full justify-start gap-3 h-12 border-white/20 text-white hover:bg-white/10"
              onClick={() => toast.info('Вход по email в разработке')}
            >
              <Icon name="Mail" size={20} />
              Войти по email
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-md border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
              <Icon name="CreditCard" size={24} />
              Оплата заказа
            </DialogTitle>
            <DialogDescription className="text-white/70">
              {selectedProduct && (
                <span>Переведите {selectedProduct.price}₽ на карту Сбербанк</span>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Номер карты Сбербанк</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Сбербанк
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-mono font-bold text-white">{cardNumber}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 text-white"
                  onClick={copyCardNumber}
                >
                  <Icon name="Copy" size={16} className="mr-2" />
                  Копировать
                </Button>
              </div>
            </div>
            {selectedProduct && (
              <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 space-y-2">
                <div className="flex justify-between text-white/80">
                  <span>Товар:</span>
                  <span className="font-semibold">{selectedProduct.name}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Сумма к оплате:</span>
                  <span className="text-2xl font-bold gradient-text">{selectedProduct.price}₽</span>
                </div>
              </div>
            )}
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm text-white/70 flex items-start gap-2">
                <Icon name="Info" size={16} className="mt-0.5 text-accent" />
                После перевода напишите в поддержку для подтверждения платежа
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen cosmic-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full star-shimmer"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <header className="border-b border-white/10 backdrop-blur-md bg-black/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⭐</div>
              <h1 className="text-2xl font-bold gradient-text">ElvShop</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white"
                onClick={() => setActiveTab('catalog')}
              >
                Каталог
              </Button>
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white"
                onClick={() => setActiveTab('profile')}
              >
                Профиль
              </Button>
              <Button
                variant="ghost"
                className="text-white/80 hover:text-white"
                onClick={() => setActiveTab('about')}
              >
                О нас
              </Button>
            </nav>
            {isLoggedIn ? (
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30">
                <Avatar className="w-8 h-8 border-2 border-green-500">
                  <AvatarFallback className="bg-green-500 text-white text-sm">
                    {username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-green-400 font-semibold">@{username}</span>
              </div>
            ) : (
              <Button 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:opacity-90"
                onClick={() => setShowLoginDialog(true)}
              >
                <Icon name="Star" size={16} className="mr-2" />
                Войти
              </Button>
            )}
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/30 backdrop-blur-sm">
              <TabsTrigger value="catalog">Каталог</TabsTrigger>
              <TabsTrigger value="profile">Профиль</TabsTrigger>
              <TabsTrigger value="about">О нас</TabsTrigger>
            </TabsList>

            <TabsContent value="catalog" className="space-y-12">
              <section className="text-center space-y-6 py-12">
                <div className="inline-block">
                  <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-1">
                    Магазин звёзд для Telegram
                  </Badge>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold gradient-text">
                  Покупайте звёзды
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Лучшие предложения для получения звёзд в Telegram. Быстро, безопасно, выгодно.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Начать покупку
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Узнать больше
                  </Button>
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white">Пакеты звёзд</h3>
                  <Icon name="Sparkles" size={32} className="text-accent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {starPackages.map((pkg) => (
                    <Card
                      key={pkg.id}
                      className={`glow-card bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border-white/10 ${
                        pkg.popular ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <CardHeader>
                        {pkg.popular && (
                          <Badge className="w-fit mb-2 bg-gradient-to-r from-primary to-secondary border-0">
                            Популярное
                          </Badge>
                        )}
                        <div className="text-5xl mb-4">{pkg.icon}</div>
                        <CardTitle className="text-white">{pkg.name}</CardTitle>
                        <CardDescription className="text-white/60">
                          {pkg.stars} звёзд
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold gradient-text">
                          {pkg.price}₽
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                          onClick={() => handleBuyClick(pkg.name, pkg.price)}
                        >
                          Купить
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white">Подписки</h3>
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {subscriptions.map((sub) => (
                    <Card
                      key={sub.id}
                      className="glow-card bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border-white/10"
                    >
                      <CardHeader>
                        <CardTitle className="text-white">{sub.name}</CardTitle>
                        <CardDescription className="text-white/60">
                          {sub.stars} звёзд каждый день
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-3xl font-bold gradient-text">
                            {sub.price}₽
                          </div>
                          <p className="text-sm text-white/60">за {sub.period}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90"
                          onClick={() => handleBuyClick(sub.name, sub.price)}
                        >
                          Подписаться
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-20 h-20 border-2 border-primary">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                        У
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-white text-2xl">Пользователь</CardTitle>
                      <CardDescription className="text-white/60">
                        @username
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/70">Баланс звёзд</span>
                        <Icon name="Star" size={20} className="text-accent" />
                      </div>
                      <p className="text-4xl font-bold gradient-text">1,234</p>
                    </div>
                    <div className="p-6 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/70">Активные подписки</span>
                        <Icon name="Zap" size={20} className="text-secondary" />
                      </div>
                      <p className="text-4xl font-bold gradient-text">2</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white">Активные подписки</h4>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-card to-card/50 border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white">Ежедневные звёзды</p>
                          <p className="text-sm text-white/60">10 звёзд/день • До 15.03.2026</p>
                        </div>
                        <Badge variant="outline" className="border-green-500/50 text-green-400">
                          Активна
                        </Badge>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-card to-card/50 border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white">Звёздный поток</p>
                          <p className="text-sm text-white/60">30 звёзд/день • До 22.04.2026</p>
                        </div>
                        <Badge variant="outline" className="border-green-500/50 text-green-400">
                          Активна
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="about" className="space-y-6">
              <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border-white/10">
                <CardHeader>
                  <div className="text-center space-y-4">
                    <div className="text-6xl">⭐</div>
                    <CardTitle className="text-4xl gradient-text">ElvShop</CardTitle>
                    <CardDescription className="text-lg text-white/70">
                      Ваш надёжный магазин звёзд в Telegram
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/80 text-lg leading-relaxed">
                      ElvShop — это современный сервис для покупки звёзд в Telegram. 
                      Мы предлагаем самые выгодные условия, мгновенную доставку и 
                      удобную систему подписок для постоянных клиентов.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                      <Icon name="Zap" size={40} className="mx-auto text-primary" />
                      <h4 className="font-semibold text-white text-lg">Мгновенная доставка</h4>
                      <p className="text-white/60 text-sm">
                        Звёзды зачисляются на ваш аккаунт моментально после оплаты
                      </p>
                    </div>
                    <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                      <Icon name="Shield" size={40} className="mx-auto text-secondary" />
                      <h4 className="font-semibold text-white text-lg">Безопасность</h4>
                      <p className="text-white/60 text-sm">
                        Защищённые платежи и гарантия возврата средств
                      </p>
                    </div>
                    <div className="text-center space-y-3 p-6 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                      <Icon name="Gift" size={40} className="mx-auto text-accent" />
                      <h4 className="font-semibold text-white text-lg">Бонусы</h4>
                      <p className="text-white/60 text-sm">
                        Специальные предложения и акции для постоянных клиентов
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold text-white text-center">Контакты</h4>
                    <div className="flex flex-col items-center gap-3">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Icon name="Send" size={20} className="mr-2" />
                        Написать в поддержку
                      </Button>
                      <p className="text-white/60 text-sm">Ответим в течение 5 минут</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <footer className="border-t border-white/10 backdrop-blur-md bg-black/20 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">⭐</div>
                <span className="text-white/80">© 2026 ElvShop</span>
              </div>
              <div className="flex gap-6">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                  Политика конфиденциальности
                </Button>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                  Условия использования
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
};

export default Index;