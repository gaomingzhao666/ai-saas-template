'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
	const { setTheme } = useTheme()

	return (
		<div
			className="relative flex cursor-pointer rounded-md border p-2 hover:bg-muted transition-colors"
			onClick={() =>
				setTheme((prev: string) => (prev === 'dark' ? 'light' : 'dark'))
			}
		>
			<Sun className="size-5 opacity-0 dark:opacity-100" />
			<Moon className="absolute size-5 opacity-100 dark:opacity-0" />
			<span className="sr-only">Toggle theme</span>
		</div>
	)
}
