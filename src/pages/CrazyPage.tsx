import { useState } from 'react'
import { SillyHeader } from '@/components/SillyHeader'
import { SillyFooter } from '@/components/SillyFooter'
import { DancingText } from '@/components/DancingText'
import { BouncyCard } from '@/components/BouncyCard'
import { Button } from '@/components/ui/button'
import { FaSpinner, FaBomb, FaGhost } from 'react-icons/fa'

export const CrazyPage = () => {
  const [chaos, setChaos] = useState(0)
  
  const increaseChaos = () => {
    setChaos(prev => Math.min(prev + 1, 3))
  }

  return (
    <div 
      className="flex min-h-screen flex-col"
      style={{
        transform: `rotate(${chaos * 2}deg)`,
        transition: 'transform 0.5s ease-in-out'
      }}
    >
      <SillyHeader />

      <main className="flex-1 p-8">
        <DancingText text="Абсолютное безумие!" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center gap-4">
            <FaSpinner className={`size-16 ${chaos > 0 ? 'animate-spin' : ''}`} />
            <FaBomb className={`size-16 ${chaos > 1 ? 'animate-bounce' : ''}`} />
            <FaGhost className={`size-16 ${chaos > 2 ? 'animate-pulse' : ''}`} />
            
            <Button
              onClick={increaseChaos}
              variant="outline"
              size="lg"
              className="mt-4"
            >
              Увеличить хаос!
            </Button>
          </div>

          <div className="space-y-4">
            <BouncyCard
              title="Безумие уровня 1"
              content="Всё начинается с малого..."
              emoji="🌪️"
            />
            <BouncyCard
              title="Безумие уровня 2"
              content="Теперь становится интереснее!"
              emoji="🎢"
            />
            <BouncyCard
              title="Безумие уровня 3"
              content="ПОЛНЫЙ УЛЁТ!!!"
              emoji="🚀"
            />
          </div>
        </div>
      </main>

      <SillyFooter />
    </div>
  )
}