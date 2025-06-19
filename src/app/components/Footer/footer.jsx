import FooterNav from './footer-nav';
import LogoFooter from './logo-footer';

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
                "
            >
                <LogoFooter />
                <FooterNav />
            </div>
        </footer>
    );
}
