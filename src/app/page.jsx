import Consulting from './components/Consulting/consulting';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Models from './components/Models/models';
import Testimonials from './components/Testimonials/testimonials';
import WhatWeDo from './components/WhatWeDo/what-we-do';

export const metadata = {
    title: 'ProjectName',
};

export default function Home() {
    return (
        <div className="w-full sm:min-w-[320px] xl:max-w-[1920px] mx-auto">
            <Header />
            <Hero />
            <Testimonials />
            <Models />
            <Consulting />
            <WhatWeDo />
        </div>
    );
}
