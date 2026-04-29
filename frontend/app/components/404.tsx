import Link from "next/link";
import Loader from "./Loader";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#111111]">
            <div className="flex flex-col items-center text-center">
                <Loader />
                <h1 className="text-9xl font-bold text-white">404</h1>
                <p className="text-2xl text-[#A1A1AA]">Page Not Found. This part is not here go back to home.</p>
                <Link href="/">
                    <span className="mt-6 inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-900/90 hover:brightness-110 sm:w-auto">
                        Go to Home
                    </span>
                </Link>
            </div>
        </div>
    );
}
