export default function HeaderNav() {
    return (
        <nav
            className="
            top-[55px]
            left-0 
            bg-white 
            p-4 
            border 
            border-[#ccc] 
            font-inter 
            text-[12px] 
            font-semibold 
            z-[100]
            md: border-0
            lg: bg-transparent
            "
        >
            <ul
                className="
            flex 
            gap-[16px]
            flex-col
            md:flex-row
            
            "
            >
                <li>
                    <a href="#">MODELS</a>
                </li>
                <li>
                    <a href="#">CONSULTING</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">BLOG</a>
                </li>
            </ul>
        </nav>
    );
}
