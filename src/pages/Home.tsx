import { Link } from 'react-router-dom'
import { SillyHeader } from '@/components/SillyHeader'
import { SillyFooter } from '@/components/SillyFooter'
import { DancingText } from '@/components/DancingText'
import { BouncyCard } from '@/components/BouncyCard'

export const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SillyHeader />
      
      <main className="flex-1 p-8">
        <DancingText text="Добро пожаловать в царство глупости!" />
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/">
            <BouncyCard
              title="Главная страница"
              content="Вы уже здесь! Это начало вашего глупого путешествия."
              emoji="🏠"
            />
          </Link>
          
          <Link to="/silly">
            <BouncyCard
              title="Страница глупостей"
              content="Здесь собраны самые нелепые вещи, которые только можно придумать!"
              emoji="🤪"
            />
          </Link>
          
          <Link to="/crazy">
            <BouncyCard
              title="Полный абсурд"
              content="Осторожно! Эта страница может вызвать неконтролируемый смех!"
              emoji="🎪"
            />
          </Link>
        </div>
      </main>

      <SillyFooter />
    </div>
  )
}