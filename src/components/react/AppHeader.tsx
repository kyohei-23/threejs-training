import { HomeIcon } from "@heroicons/react/24/outline"

export function AppHeader({ path }: { path: `/${string}` }) {
    return (
        <header className="fixed bottom-8 left-1/2 -translate-1/2 flex gap-8 items-center">
            <ul className="bg-black text-white py-4 px-8 rounded-full flex gap-6">
                <li>
                    <a href={path}>Vanilla</a>
                </li>
                <li>
                    <a href={'/react' + path}>React</a>
                </li>
                <li>
                    <a href={'/vue' + path}>Vue</a>
                </li>
            </ul>
            <a href="/" aria-label="back to home" className="bg-black text-white p-4 rounded-full">
                <HomeIcon className="w-6 h-6 text-white" />
            </a>
        </header>
    )
}