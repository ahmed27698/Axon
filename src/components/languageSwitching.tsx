"use client";

import { Button } from "../../components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "../i18n/routing";

export default function LanguageSwitching() {
    const router = useRouter();
    const currentLocale = useLocale();

    const handleLanguageChange = (locale: string) => {
        router.push(`/${locale}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="text-black hover:text-[#615FFF] w-30"
                    variant="outline"
                >
                    {currentLocale === "en" ? "English" : "Arabic"}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
                    {routing.locales.map((loc) => (
                        <DropdownMenuItem
                            key={loc}
                            onClick={() => handleLanguageChange(loc)}
                        >
                            {loc === "en" ? "English" : "Arabic"}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
