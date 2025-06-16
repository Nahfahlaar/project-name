import Button from '../Button/button';
import ConsultingCard from './consulting-card';

export default function Consulting() {
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
                Consulting
            </h4>
            <ul
                className="
                grid
                grid-cols-1
                gap-y-16
                mb-12
                lg:grid-cols-3
                lg:gap-x-8
            "
            >
                <li>
                    <ConsultingCard
                        imageUrl="/image5.png"
                        title="Custom Models"
                        text="Not all models look the same. 
                        Need something you don’t see here? 
                        We’ll build it for you."
                    />
                </li>
                <li>
                    <ConsultingCard
                        imageUrl="/image6.png"
                        title="Model Audits"
                        text="Sometimes models just need a little love. 
                        We review spreadsheets on behalf of our clients 
                        in order to verify formulas and improve functionality."
                    />
                </li>
                <li>
                    <ConsultingCard
                        imageUrl="image7.png"
                        title="Acqusitions Analysis"
                        text="Do you run lean without the capital to invest in a full-time 
                        Acquisition Analyst? 
                        Don’t worry, we’ve got you covered."
                    />
                </li>
            </ul>
            <div className="lg:grid lg:grid-cols-2">
                <div className="border-t-1 mb-12 w-[100%] border-gray-400 lg:col-span-2"></div>
                <div>
                    <p className="mb-6 lg:mb-0">
                        At Multifamily Modeling, our aim is to provide our
                        clients with high quality and meticulously honed
                        consulting services to help them get to the right
                        answer.
                    </p>
                </div>
                <Button justify="lg:justify-self-end" />
            </div>
        </div>
    );
}
