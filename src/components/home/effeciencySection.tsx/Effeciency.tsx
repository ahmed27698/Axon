import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Effeciency() {
    const t = useTranslations("HomePage");
    return (
        <section className="flex flex-col lg:flex-row lg:px-28 md:px-16 px-4 gap-7 py-10">
            <Image
                src="/Eff.gif"
                alt="Effeciency Gif"
                width={400}
                height={600}
                className="w-full lg:w-8/12"
            />
            <div className="flex flex-col gap-7 w-full">
                <h2 className="lg:text-5xl text-3xl font-bold">
                    {t("EfficencyTitleOne")}
                </h2>
                <h2 className="lg:text-5xl text-3xl font-bold text-[#90A1B9]">
                    {t("EfficencyTitleTwo")}
                </h2>
                <hr />
                <div className="flex flex-col md:flex-row justify-start gap-5 w-full">
                    <div className="lg:w-4/12 w-full">
                        <h2>{t("EfficencyParOneTitle")}</h2>
                        <p className="text-[#90A1B9] text-sm ">{t("EfficencyParOneDescription")}</p>
                    </div>
                    <div className="lg:w-4/12 w-full">
                        <h2>{t("EfficencyParTwoTitle")}</h2>
                        <p className="text-[#90A1B9] text-sm ">{t("EfficencyParTwoDescription")}</p>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-3 cursor-pointer">
                    <button className="cursor-pointer">
                        {t("EfficencyButton")}
                    </button>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                            fill="#FAFAFA"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
