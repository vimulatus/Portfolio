"use client"

import { Sun, Moon } from "lucide-react"
import * as React from 'react'
import { useTheme } from "next-themes"
import { Button } from "./button"

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    if (theme === 'dark') {
        return (
            <Button 
            variant="ghost" 
            onClick={() => setTheme('light')}
            className="px-2"
            >
                <Moon className="h-6 w-6" />
            </Button>
        )
    } else {
        return (
            <Button 
            variant="ghost" 
            onClick={() => setTheme('dark')}
            className="px-2"
            >
                <Sun className="h-6 w-6" />
            </Button>
        )
    }
}