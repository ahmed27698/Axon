import { useTranslations } from "next-intl";
import LanguageSwitching from "./languageSwitching";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "../../../../components/ui/carousel";

export default function MissionAndExpertise() {
    const t = useTranslations("HomePage");
    return (
        <section className="flex flex-col gap-7 lg:px-28 md:px-16 px-4 ">
            <LanguageSwitching />
            <p className="text-[#615FFF] tracking-[3px] font-semibold">{t("title")}</p>
            <h2 className="text-[18px] text-white lg:text-4xl font-bold">
                {t("missionAndExpertiseTitle")}
            </h2>
            <p className="text-[18px] text-[#90A1B9] lg:w-6/12">
                {t("missionAndExpertiseDescription")}
            </p>
            <div>
                <Carousel className="w-full ">
                    <CarouselContent className="px-4 gap-5">
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5 basis-full gap-3 flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.50001 27.5C5.00001 29.6 4.16667 35.8334 4.16667 35.8334C4.16667 35.8334 10.4 35 12.5 32.5C13.6833 31.1 13.6667 28.95 12.35 27.65C11.7022 27.0317 10.8488 26.6744 9.95372 26.6468C9.0586 26.6191 8.1848 26.9229 7.50001 27.5Z"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20 25L15 20C15.8869 17.699 17.0037 15.4934 18.3333 13.4166C20.2753 10.3116 22.9794 7.75505 26.1883 5.99012C29.3973 4.22519 33.0044 3.31058 36.6667 3.3333C36.6667 7.86663 35.3667 15.8333 26.6667 21.6666C24.5615 22.9978 22.3281 24.1145 20 25Z"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 20H6.66667C6.66667 20 7.58334 14.95 10 13.3333C12.7 11.5333 18.3333 13.3333 18.3333 13.3333"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20 25V33.3333C20 33.3333 25.05 32.4166 26.6667 30C28.4667 27.3 26.6667 21.6666 26.6667 21.6666"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p>{t("cardOneTitle")}</p>
                            <p className="text-center">
                                {t("cardOneDescription")}
                            </p>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5 basis-full gap-3 flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.6667 35V31.6667C26.6667 29.8986 25.9643 28.2029 24.7141 26.9526C23.4638 25.7024 21.7681 25 20 25H10C8.2319 25 6.53621 25.7024 5.28596 26.9526C4.03572 28.2029 3.33334 29.8986 3.33334 31.6667V35"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 18.3333C18.6819 18.3333 21.6667 15.3486 21.6667 11.6667C21.6667 7.98477 18.6819 5 15 5C11.3181 5 8.33334 7.98477 8.33334 11.6667C8.33334 15.3486 11.3181 18.3333 15 18.3333Z"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M36.6667 35V31.6667C36.6656 30.1896 36.1739 28.7546 35.2689 27.5872C34.3639 26.4198 33.0969 25.586 31.6667 25.2167"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M26.6667 5.21667C28.1007 5.58384 29.3717 6.41784 30.2794 7.58719C31.1871 8.75654 31.6797 10.1947 31.6797 11.675C31.6797 13.1553 31.1871 14.5935 30.2794 15.7628C29.3717 16.9322 28.1007 17.7662 26.6667 18.1333"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p>{t("cardTwoTitle")}</p>
                            <p className="text-center">
                                {t("cardTwoDescription")}
                            </p>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5 basis-full gap-3 flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M36.6666 11.6666L22.5 25.8333L14.1666 17.5L3.33331 28.3333"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M26.6667 11.6666H36.6667V21.6666"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p>{t("cardThreeTitle")}</p>
                            <p className="text-center">
                                {t("cardThreeDescription")}
                            </p>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5 basis-full gap-3 flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M36.6666 11.6666L22.5 25.8333L14.1666 17.5L3.33331 28.3333"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M26.6667 11.6666H36.6667V21.6666"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p>{t("cardThreeTitle")}</p>
                            <p className="text-center">
                                {t("cardThreeDescription")}
                            </p>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5 basis-full gap-3 flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M36.6666 11.6666L22.5 25.8333L14.1666 17.5L3.33331 28.3333"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M26.6667 11.6666H36.6667V21.6666"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p>{t("cardThreeTitle")}</p>
                            <p className="text-center">
                                {t("cardThreeDescription")}
                            </p>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5 basis-full gap-3 flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M36.6666 11.6666L22.5 25.8333L14.1666 17.5L3.33331 28.3333"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M26.6667 11.6666H36.6667V21.6666"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p>{t("cardThreeTitle")}</p>
                            <p className="text-center">
                                {t("cardThreeDescription")}
                            </p>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5 basis-full gap-3 flex flex-col justify-center items-center rounded-2xl border border-white/10 bg-zinc-900/50 p-5">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M36.6666 11.6666L22.5 25.8333L14.1666 17.5L3.33331 28.3333"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M26.6667 11.6666H36.6667V21.6666"
                                    stroke="#615FFF"
                                    strokeWidth="3.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <p>{t("cardThreeTitle")}</p>
                            <p className="text-center">
                                {t("cardThreeDescription")}
                            </p>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
