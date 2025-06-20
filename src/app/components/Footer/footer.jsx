import FooterNav from './footer-nav';
import LogoFooter from './logo-footer';
import ContactInformation from './сontact-information';

export default function Footer() {
    return (
        <footer className="w-full bg-darkblue">
            <div
                className="
                w-[90%]
                mx-auto
                pt-14
                pb-14
                grid
                gap-y-10
                md:grid-cols-[1fr_3fr]
                md:gap-y-0
                "
            >
                <LogoFooter />
                <FooterNav />
                <ContactInformation />
            </div>
        </footer>
    );
}
