export default function Hero() {
    return (
        <section
            className="
                w-full
                mb-[81px]
                lg:flex
                lg:flex-row-reverse
                lg:justify-between
                lg:max-w-[90%]
                lg:ml-auto 
                lg:mb-[88px]
                xl:max-w-[1708px]
                xl:mb-[213px]
                "
        >
            <div
                className="
                    mb-6
                    bg-[url('/header-image-768.png')]
                    bg-cover
                    bg-no-repeat
                    w-full
                    aspect-[16/9]
                    lg:bg-contain
                    lg:bg-right
                    lg:aspect-[16/15]
                    lg:bg-[url('/header-image-1440.png')]
                    lg:mb-0"
            ></div>
            <div
                className="
                    w-[90%] 
                    mx-auto
                    md:w-[88%]
                    lg:my-auto
                    lg:w-3/4
                    "
            >
                <h1
                    className="
                    text-2xl
                    font-bold
                    mb-6
                    font-Inter
                    md:text-4xl
                    lg:text-5xl
                    "
                >
                    Excel Models Built by Investors, for Investors
                </h1>
                <p className="text-gray-400 text-l md:text-2xl">
                    Save time and win more deals with our products and
                    consulting services.
                </p>
            </div>
        </section>
    );
}
