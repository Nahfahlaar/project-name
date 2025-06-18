import ModelsCard from '../Models/models-card';

export default function Articles() {
    return (
        <div
            className="
                mb-30
                w-[90%]
                mx-auto
                md:w-[88%]
                lg:mb-50
                lg:w-[80%]
                xl:max-w-[1500px]
                "
        >
            <h1
                className="
                    text-3xl
                    font-bold
                    mb-20
                    font-Inter
                    md:mb-16
                    md:text-4xl
                    lg:text-5xl
                    "
            >
                Articles
            </h1>
            <ul
                className="
                            grid
                            gap-y-16
                            md:grid-cols-[2fr_2fr_1.19fr]
                            md:grid-rows-[1fr_1fr]
                            md:gap-y-0
                            md:gap-x-6
                            lg:grid-cols-[1fr_1fr_1fr_1fr]
                            lg:grid-rows-[1fr_1fr]
                            lg:gap-x-8
                        "
            >
                <li className="md:row-span-2">
                    <ModelsCard
                        imageUrl="/articles_one.png"
                        title="Standard Acquisition Model"
                        text="Multifamily Modeling’s basic apartment acquisition 
                                    model for an existing building. Logical,
                                    straightforward, and easy to use, whether you’re new
                                    to underwriting or an experienced investor."
                        showButton={false}
                    />
                </li>
                <li className="md:row-span-2">
                    <ModelsCard
                        imageUrl="/articles-two.png"
                        title="Value-Add/Renovation Model"
                        text="A sophisticated value-add model that allows users to
                                        time individual unit renovations. This model
                                        combines granularity with a streamlined experience."
                        showButton={false}
                    />
                </li>
                <li
                    className="
                        hidden
                        lg:block
                        md:row-span-2
                        "
                >
                    <ModelsCard
                        imageUrl="/articles-three.png"
                        title="Condo Development Model"
                        text="For the ground-up development of a condominium
                                        building or complex. Featuring a robust development
                                        schedule, allowing users to easily run a number of
                                        construction timing scenarios."
                        showButton={false}
                    />
                </li>
                <li
                    className="
                        hidden
                        md:block
                        md:mb-auto
                        "
                >
                    <button className="w-full">
                        <img
                            className="w-full hidden md:block lg:hidden"
                            src="/Blog_button.png"
                            alt=""
                        />
                        <img
                            className="w-full hidden lg:block"
                            src="/ButtonArticles_2.png"
                        />
                    </button>
                </li>
            </ul>
        </div>
    );
}
