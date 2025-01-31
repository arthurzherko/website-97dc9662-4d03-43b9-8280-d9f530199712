import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface BouncyCardProps {
  title: string
  content: string
  emoji: string
}

export const BouncyCard = ({ title, content, emoji }: BouncyCardProps) => {
  const [isJumping, setIsJumping] = useState(false)
  const [rotation, setRotation] = useState(0)

  const handleJump = () => {
    setIsJumping(true)
    setRotation(rotation + 360)
    setTimeout(() => setIsJumping(false), 500)
  }

  return (
    <Card
      className={`transition-all duration-300 ${
        isJumping ? 'translate-y-[-20px]' : ''
      }`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <span className="text-4xl">{emoji}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{content}</p>
        <Button
          onClick={handleJump}
          variant="outline"
          className="w-full hover:bg-primary hover:text-primary-foreground"
        >
          Покрутить!
        </Button>
      </CardContent>
    </Card>
  )
}