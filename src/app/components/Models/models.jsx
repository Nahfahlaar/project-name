import ModelsCard from './models-card';

export default function Models() {
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
            <h4
                className="
                    font-Inter
                    text-3xl
                    font-bold
                    mb-20
                "
            >
                Models
            </h4>
            <ul
                className="
                grid
                grid-cols-1
                gap-y-16
                lg:grid
                lg:grid-cols-2
                lg:gap-x-8
                lg:gap-y-20
            "
            >
                <li>
                    <ModelsCard
                        imageUrl="/image1.png"
                        title="Standard Acquisition Model"
                        text="Multifamily Modeling’s basic apartment acquisition 
                        model for an existing building. Logical,
                        straightforward, and easy to use, whether you’re new
                        to underwriting or an experienced investor."
                    />
                </li>
                <li>
                    <ModelsCard
                        imageUrl="/image2.png"
                        title="Value-Add/Renovation Model"
                        text="A sophisticated value-add model that allows users to
                            time individual unit renovations. This model
                            combines granularity with a streamlined experience."
                    />
                </li>
                <li>
                    <ModelsCard
                        imageUrl="/image3.png"
                        title="Condo Development Model"
                        text="For the ground-up development of a condominium
                            building or complex. Featuring a robust development
                            schedule, allowing users to easily run a number of
                            construction timing scenarios."
                    />
                </li>
                <li>
                    <ModelsCard
                        imageUrl="/image4.png"
                        title="Apartment Development Model"
                        text="Our flagship development product featuring
                            everything from a Back-of-the-Envelope analysis
                            (allowing developers to get to a quick
                            Yield-on-Cost) to our sophisticated timing and
                            construction schedules."
                    />
                </li>
            </ul>
        </div>
    );
}
