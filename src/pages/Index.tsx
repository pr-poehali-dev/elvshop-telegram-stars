import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('catalog');

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
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Star" size={16} className="mr-2" />
              Войти
            </Button>
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
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
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
                        <Button className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90">
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
  );
};

export default Index;
