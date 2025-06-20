export default function LogoFooter() {
    return (
        <a
            href="#"
            className="
                flex
                items-center
                gap-2
                md:row-span-2
                "
        >
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden"
            >
                <path
                    d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20Z"
                    stroke="#0078FF"
                    strokeWidth="8"
                />
            </svg>

            <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                hidden
                md:block
                "
            >
                <path
                    d="M35 4C52.1208 4 66 17.8792 66 35C66 52.1208 52.1208 66 35 66C17.8792 66 4 52.1208 4 35C4 17.8792 17.8792 4 35 4Z"
                    stroke="#0078FF"
                    strokeWidth="8"
                />
            </svg>

            <p className="text-sm font-bold leading-tight text-white md:hidden lg:inline">
                PROJECT <br /> NAME
            </p>
        </a>
    );
}
