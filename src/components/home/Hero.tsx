import Image from "next/image";
import Link from "next/link";
import wave from "../../../public/Wave.gif";

export default function Hero() {

  const stats = [
    {
      value: "85%",
      label: "PROJECT FAILURE RATE",
      valueColor: "text-white",
    },
    {
      value: "3x",
      label: "SUCCESS RATE INCREASE",
      valueColor: "text-indigo-400",
    },
    {
      value: "50+",
      label: "ENTERPRISE DEPLOYS",
      valueColor: "text-white",
    },
    {
      value: "6w",
      label: "AVG. POC CYCLE",
      valueColor: "text-white",
    },
  ];

  return (
    <section className="relative w-full min-h-svh bg-[#05060f] flex flex-col justify-between overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={wave}
          alt="wave background"
          fill
          priority
          unoptimized
          className="object-contain md:object-cover opacity-70"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 pt-24 md:pt-32">

        <div className="mb-6">
          <div className="px-4 py-1 flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10">
            <span className="h-3.5 w-3.5 bg-[#615FFF] rounded-full border-2 border-[#272858]" />
            <span className="text-xs sm:text-sm text-purple-300">
              Full-Stack AI Solutions
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
          Software That Scales
          <br />
          With Your Ambition
        </h1>

        <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg mx-auto">
          We build custom digital solutions that solve complex
          business challenges through elegant, high-performance engineering.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-center shadow-md shadow-gray-50 rounded-full bg-white text-black font-medium hover:opacity-90 transition"
          >
            Start Your Project
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-center rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            Explore Solutions
          </Link>
        </div>

      </div>

      <div className="relative z-10 w-full border-t border-white/10 bg-[#070813]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`py-6 sm:py-8 md:border-r md:border-white/10 ${index === stats.length - 1 ? "md:border-none" : ""
                }`}
            >
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-semibold ${stat.valueColor}`}
              >
                {stat.value}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-2 tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}