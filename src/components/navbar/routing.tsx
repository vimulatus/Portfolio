import { Button } from "../ui/button";
import Link from "next/link";

const routes = [
    'About Me',
    'Blog',
    'Projects',
    'Contact Me',
]

export default function Routing() {
    return (
        <div className="flex justify-center items-center">
            {routes.map((route, id) => (
                <Button key={id} variant="ghost" 
                className="text-xl"
                >
                    <Link href={`/${route.split(' ')[0].toLowerCase()}`}>
                        {route}
                    </Link>
                </Button>
            ))}
        </div>
    )
}