import { createContext, useEffect, useState } from 'react'

interface ThemeProvider {
  children: React.ReactNode
}

interface ThemeContext {
  themeToggle: boolean
  toggleChange: () => void
}

export const ThemeContext = createContext<ThemeContext>({
  themeToggle: false,
  toggleChange: () => {}
})

export const ThemeProvider = ({ children }: ThemeProvider) => {
  const [themeToggle, setThemeToggle] = useState<boolean>(false)

  const toggleChange = () => {
    setThemeToggle(!themeToggle)
    toggleDarkTheme(!themeToggle)
  }

  const toggleDarkTheme = (shouldAdd: boolean) => {
    window.document.body.classList.toggle('dark', shouldAdd)
    window.document.documentElement.setAttribute(
      'data-bs-theme',
      shouldAdd ? 'dark' : 'light'
    )
  }

  const initializeDarkTheme = (isDark: boolean) => {
    setThemeToggle(isDark)
    toggleDarkTheme(isDark)
  }

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    initializeDarkTheme(prefersDark.matches)

    prefersDark.addEventListener('change', (mediaQuery) =>
      initializeDarkTheme(mediaQuery.matches)
    )
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        themeToggle,
        toggleChange
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
