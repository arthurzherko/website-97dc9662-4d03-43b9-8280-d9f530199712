import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaHeart, FaStar, FaMoon, FaSun } from 'react-icons/fa'

export const SillyFooter = () => {
  const [clickCount, setClickCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  const getMessageByClicks = () => {
    if (clickCount === 0) return 'Нажми на сердечко!'
    if (clickCount < 5) return 'Ещё немного!'
    if (clickCount < 10) return 'Почти там!'
    return 'Ты супер!'
  }

  return (
    <footer className="flex flex-col items-center gap-4 border-t bg-background p-4">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClick}
          className="text-red-500 hover:text-red-600"
        >
          <FaHeart className="size-6 transition-transform hover:scale-125" />
        </Button>
        {Array.from({ length: Math.min(5, Math.floor(clickCount / 2)) }).map(
          (_, index) => (
            <FaStar
              key={index}
              className="size-6 text-accent animate-spin"
              style={{ animationDuration: '3s' }}
            />
          )
        )}
      </div>
      <p className="text-lg font-medium">{getMessageByClicks()}</p>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="mt-2"
      >
        {isDark ? (
          <FaMoon className="size-4 animate-pulse" />
        ) : (
          <FaSun className="size-4 animate-spin" />
        )}
      </Button>
    </footer>
  )
}