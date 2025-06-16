export default function Button({ title, imageUrl, text }) {
    return (
        <div>
            <button
                className="
                bg-blue-600
                text-white
                border-none
                rounded-md
                w-full
                p-3
                font-Inter
                md:w-[30%]
                md:p-2
                "
            >
                Learn More
            </button>
        </div>
    );
}
