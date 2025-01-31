import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface DancingTextProps {
  text: string
}

export const DancingText = ({ text }: DancingTextProps) => {
  const [isParty, setIsParty] = useState(false)

  const toggleParty = () => {
    setIsParty(!isParty)
  }

  return (
    <div className="flex flex-col items-center gap-4 p-8 text-center">
      <div className="flex flex-wrap justify-center gap-2">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block text-4xl font-bold transition-all duration-200 ${
              isParty
                ? `animate-bounce text-primary hue-rotate-${
                    index * 30
                  } delay-${(index * 100) % 1000}`
                : ''
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <Button
        onClick={toggleParty}
        variant="secondary"
        className="text-lg font-bold"
      >
        {isParty ? 'Остановить веселье' : 'Начать веселье!'}
      </Button>
    </div>
  )
}