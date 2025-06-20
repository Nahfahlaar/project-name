export default function ContactInformation() {
    return (
        <div
            className="
                grid
                gap-y-2
                md:grid-cols-[2fr_1fr]
                md:col-start-2
                "
        >
            <div
                className="
                grid
                grid-cols-[1fr_8fr]
                text-amber-50
                "
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                        fill="#2A4BFF"
                    />
                </svg>
                <p>P.O. Box XXXX, Fairfield, CT 06815</p>
            </div>
            <div
                className="
                grid
                grid-cols-[1fr_8fr]
                text-amber-50
                "
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                >
                    <path
                        d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                        fill="#2A4BFF"
                    />
                </svg>
                <p>(203) xxx-5555</p>
            </div>
        </div>
    );
}
