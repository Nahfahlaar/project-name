import Logo from '@/app/components/Header/Logo';
import HeaderBurger from '@/app/components/Header/header-burger';
import ButtonCart from '@/app/components/Header/button-cart';
import HeaderNav from '@/app/components/Header/header-nav';

export default function Header() {
    return (
        <header className="flex justify-between items-center w-[90%] lg:w-[80%] xl:max-w-[1500px] mx-auto h-[56px]">
            <HeaderBurger />
            <div className="hidden md:block md:order-1 ml-auto">
                <HeaderNav />
            </div>
            <Logo />
            <div className="md:order-1">
                <ButtonCart />
            </div>
        </header>
    );
}
