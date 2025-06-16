export default function Button({ justify }) {
    return (
        <button
            className={`
                bg-blue-600
                text-white
                border-none
                rounded-md
                w-full
                p-3
                font-Inter
                md:w-[30%]
                md:p-2
                justify
                ${justify}
                `}
        >
            Learn More
        </button>
    );
}
