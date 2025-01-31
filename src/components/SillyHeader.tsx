import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaSmile, FaSadTear, FaGrinSquint } from 'react-icons/fa'

export const SillyHeader = () => {
  const [mood, setMood] = useState<'happy' | 'sad' | 'silly'>('happy')
  const [bounce, setBounce] = useState(false)

  const getMoodEmoji = () => {
    switch (mood) {
      case 'happy':
        return <FaSmile className="size-8" />
      case 'sad':
        return <FaSadTear className="size-8" />
      case 'silly':
        return <FaGrinSquint className="size-8" />
    }
  }

  const handleMoodChange = () => {
    const moods: Array<'happy' | 'sad' | 'silly'> = ['happy', 'sad', 'silly']
    const currentIndex = moods.indexOf(mood)
    const nextIndex = (currentIndex + 1) % moods.length
    setMood(moods[nextIndex])
    setBounce(true)
    setTimeout(() => setBounce(false), 500)
  }

  return (
    <header className="flex items-center justify-between border-b bg-background p-4">
      <div className="flex items-center gap-4">
        <div
          className={`transition-transform ${
            bounce ? 'animate-bounce' : ''
          }`}
          onClick={handleMoodChange}
        >
          {getMoodEmoji()}
        </div>
        <h1 className="text-2xl font-bold">Самый глупый сайт в мире</h1>
      </div>
      <nav className="flex gap-4">
        <Button variant="ghost" className="text-lg">
          Главная
        </Button>
        <Button variant="ghost" className="text-lg">
          Глупости
        </Button>
        <Button variant="ghost" className="text-lg">
          Ещё глупее
        </Button>
      </nav>
    </header>
  )
}