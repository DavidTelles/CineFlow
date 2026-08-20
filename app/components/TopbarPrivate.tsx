'use client'

import { useState, useEffect } from "react"
import Link from "next/link"

export default function TopbarPublic() {
    const [menu, setMenu] = useState(false)
    const [isDark, setIsDark] = useState(true)

    // Aplica/remove a classe 'dark' na tag <html> do site
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])

    const moon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    )

    const sun = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
    )

    const menuHamburguer = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )

    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    )

    return (
        <>
            {/* Ícone do menu isolado no canto superior esquerdo (exibido apenas quando fechado) */}
            {!menu && (
                <button
                    onClick={() => setMenu(true)}
                    aria-label="Abrir Menu"
                    className="fixed top-4 left-4 z-50 p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white backdrop-blur-md shadow-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer"
                >
                    {menuHamburguer}
                </button>
            )}

            {/* Fundo escurecido clicável para fechar o menu ao clicar fora */}
            {menu && (
                <div 
                    onClick={() => setMenu(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 cursor-pointer"
                />
            )}

            {/* Painel lateral completo (exibido apenas quando aberto) */}
            {menu && (
                <aside className="fixed top-0 left-0 h-full w-64 bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white backdrop-blur-md z-50 p-5 flex flex-col gap-6 shadow-2xl border-r border-gray-200 dark:border-gray-800 transition-all">
                    {/* Topo do painel: Logo + Botão de Fechar */}
                    <div className="flex items-center justify-between w-full">
                        <h1 className="font-sans text-2xl font-bold">
                            <Link href="/" onClick={() => setMenu(false)}>
                                Cine<span className="text-red-800">flow</span>
                            </Link>
                        </h1>

                        <button
                            onClick={() => setMenu(false)}
                            aria-label="Fechar Menu"
                            className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                            {closeIcon}
                        </button>
                    </div>

                    {/* Conteúdo do menu empilhado para baixo */}
                    <nav className="flex flex-col gap-2 w-full pt-2 border-t border-gray-200 dark:border-gray-800">
                        <button
                            type="button"
                            onClick={() => setIsDark(!isDark)}
                            className="flex items-center gap-3 p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer text-left"
                            aria-label="Alternar tema"
                        >
                            {isDark ? sun : moon}
                            <span className="text-sm font-medium">{isDark ? "Modo Claro" : "Modo Escuro"}</span>
                        </button>

                        <Link href="/home-page" className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium text-sm" onClick={() => setMenu(false)}>
                            Home
                        </Link>
                        <Link href="/movies" className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium text-sm" onClick={() => setMenu(false)}>
                            Movies
                        </Link>
                        <Link href="/favorites" className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium text-sm" onClick={() => setMenu(false)}>
                            Favorites
                        </Link>
                        <Link href="/watchlist" className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium text-sm" onClick={() => setMenu(false)}>
                            Watchlist
                        </Link>
                        <Link href="/profile" className="p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium text-sm" onClick={() => setMenu(false)}>
                            Profile
                        </Link>
                    </nav>
                </aside>
            )}
        </>
    )
}