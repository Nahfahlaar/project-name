export default function Logo() {
    return (
        <a href="#" className="flex items-center gap-2">
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20Z"
                    stroke="#0078FF"
                    strokeWidth="8"
                />
            </svg>
            <p className="text-sm font-bold leading-tight text-[#0e0f21] hidden md:inline">
                PROJECT <br /> NAME
            </p>
        </a>
    );
}
