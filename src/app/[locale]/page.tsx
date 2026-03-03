import MissionAndExpertise from "../../components/missionAndExpertise";
export default function Home() {
    return (
        <main className="flex w-full font-sans text-white flex-col items-center justify-between py-32 px-16 bg-black sm:items-start">
            {/* <h1>Welcome to Axon</h1> */}
            <MissionAndExpertise />
        </main>
    );
}
