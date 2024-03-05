import { SearchIcon, CommandIcon } from "lucide-react";
import { Button } from "./button";

export default function Search() {
    return (
        <Button variant="outline" className="flex mx-4 hover:cursor-pointer px-2">
            <SearchIcon className="h-5 w-5" />
            <div className="flex items-center ml-2 text-xs/8">
                <CommandIcon className="h-3 w-3" />
                K
            </div>
        </Button>
    )
}