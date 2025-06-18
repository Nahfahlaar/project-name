import Button from '../Button/button';

export default function WhatWeDo() {
    return (
        <div
            className="
                w-full
                mb-[81px]
                lg:flex
                lg:justify-between
                lg:max-w-[90%]
                lg:mr-auto 
                lg:mb-[88px]
                lg:gap-x-16
                xl:max-w-[1708px]
                xl:mb-[213px]
                "
        >
            <div
                className="
                    mb-9
                    bg-[url('/image-about.png')]
                    bg-cover
                    bg-no-repeat
                    w-full
                    aspect-[16/9]
                    lg:bg-contain
                    lg:aspect-[16/12]
                    lg:bg-[url('/about-for-1440.png')]
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
                    text-3xl
                    font-bold
                    mb-6
                    font-Inter
                    md:text-4xl
                    lg:text-5xl
                    "
                >
                    What We Do
                </h1>
                <p className="text-gray-400 text-l mb-6 md:text-2xl">
                    We create straightforward, sophisticated, and
                    aesthetically-pleasing financial models designed for the
                    multifamily investment and development community. Our firm
                    also offers consulting services to multifamily investors and
                    developers throughout the US. See our Consulting page to
                    learn more.<br></br>
                    <br></br> To us, building financial models is an exercise in
                    problem solving, and we are glad to sweat the details so you
                    don’t have to.
                </p>
                <Button />
            </div>
        </div>
    );
}
