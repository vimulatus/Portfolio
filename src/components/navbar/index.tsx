import Logo from "../ui/logo"
import Routing from "./routing"
import Utils from "./utils"

export default function Navbar() {
    return (
        <nav className="p-2 flex justify-between">
            <Logo />
            <Routing />
            <Utils />
        </nav>
    )
}