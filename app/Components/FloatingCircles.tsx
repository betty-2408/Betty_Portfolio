import React from 'react'

type Circle = {
    size: number
    borderColor: string
    top: string
    left: string
    delay?: string
    duration?: string
}

const circles: Circle[] =[
    {
        size: 20,
        borderColor: "border-pink-500",
        top: "10%",
        left: "65%",
        duration: "8s",
    },
    {
        size: 40,
        borderColor: "border-blue-500",
        top: "50%",
        left: "55%",
        duration: "10s",
    },
    {
        size: 40,
        borderColor: "border-blue-500",
        top: "50%",
        left: "80%",
        duration: "10s",
    },
    {
        size: 40,
        borderColor: "border-purple-500",
        top: "80%",
        left: "58%",
        duration: "10s",
    },
    {
        size: 40,
        borderColor: "border-pink-500",
        top: "67%",
        left: "72%",
        duration: "10s",
    },
    {
        size:80,
        borderColor: "border-purple-500",
        top: "15%",
        left: "30%",
        duration: "12s",
    },
    {
        size: 80,
        borderColor: "border-blue-500",
        top: "40%",
        left: "75%",
        duration: "10s",
    },
    {
        size: 60,
        borderColor: "border-yellow-500",
        top: "10%",
        left: "60%",
        duration: "7s",
    },
]

const FloatingCircles = () => {
  return (
    <div className='absolute inset-0 overflow-hidden z-2'>
        {circles.map((circle,index) => (
            <div
                key={index}
                className={`
                    absolute rounded-full animate-float border-solid border-2 ${circle.borderColor}
                `}
                style={{
                    width: `${circle.size}px`,
                    height: `${circle.size}px`,
                    top: circle.top,
                    left: circle.left,
                    animationDuration: circle.duration,
                }}
            />
        ))}
    </div>
  )
}

export default FloatingCircles