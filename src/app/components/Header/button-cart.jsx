export default function ButtonCart() {
    return (
        <button className="relative w-10 h-10 flex items-center justify-center">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0_1_807"
                    style={{ maskType: 'alpha' }} // 🟢 исправлено для React
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 13.1679C22.7751 13.7031 21.4222 14 20 14C14.4772 14 10 9.52285 10 4C10 2.57779 10.2969 1.22492 10.8321 0H0V24H24V13.1679Z"
                        fill="#C4C4C4"
                    />
                </mask>
                <g mask="url(#mask0_1_807)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 2V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM15.01 20C15.01 18.9 15.9 18 17 18C18.1 18 19 18.9 19 20C19 21.1 18.1 22 17 22C15.9 22 15.01 21.1 15.01 20Z"
                        fill="currentColor"
                    />
                </g>
            </svg>

            <span className="absolute top-[4px] right-[2px] bg-[#2a4bff] text-white text-[12px] rounded-full px-[6px] py-[2px] leading-none">
                3
            </span>
        </button>
    );
}
