import { useState } from 'react'
import { SillyHeader } from '@/components/SillyHeader'
import { SillyFooter } from '@/components/SillyFooter'
import { DancingText } from '@/components/DancingText'
import { Button } from '@/components/ui/button'
import { FaRainbow, FaUnicorn, FaPoop } from 'react-icons/fa'

export const SillyPage = () => {
  const [clickCount, setClickCount] = useState(0)
  const [showUnicorn, setShowUnicorn] = useState(false)

  const handleSillyClick = () => {
    setClickCount(prev => prev + 1)
    if (clickCount > 5) {
      setShowUnicorn(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SillyHeader />

      <main className="flex flex-1 flex-col items-center gap-8 p-8">
        <DancingText text="Страница глупостей!" />

        <div className="flex flex-col items-center gap-4">
          <FaRainbow className="size-24 animate-spin text-accent" style={{ animationDuration: '3s' }} />
          
          <Button
            onClick={handleSillyClick}
            size="lg"
            className="animate-bounce text-xl"
          >
            Нажми меня {clickCount} раз!
          </Button>

          {showUnicorn && (
            <div className="flex flex-col items-center gap-4">
              <FaUnicorn className="size-32 animate-bounce text-primary" />
              <FaPoop className="size-16 animate-spin text-accent" />
              <p className="text-2xl font-bold text-primary">
                Поздравляем! Вы разблокировали единорога!
              </p>
            </div>
          )}
        </div>
      </main>

      <SillyFooter />
    </div>
  )
}