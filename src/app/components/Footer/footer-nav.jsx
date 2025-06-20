export default function FooterNav() {
    return (
        <nav>
            <ul
                className="
                text-amber-50
                grid
                grid-cols-3
                text-[12px]
                font-Inter
                md:flex
                "
            >
                <li>
                    <a href="#">MODELS</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">CONSULTING</a>
                </li>
                <li>
                    <a href="#">BLOG</a>
                </li>
                <li>
                    <a href="#">LEGAL</a>
                </li>
            </ul>
        </nav>
    );
}
