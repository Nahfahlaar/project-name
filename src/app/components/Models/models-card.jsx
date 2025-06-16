import Button from '../Button/button';

export default function ModelsCard({ title, imageUrl, text }) {
    return (
        <div>
            <img
                className="
                w-full
                mb-8
                rounded-[8px]
                "
                src={imageUrl}
            />
            <h4
                className="
                    font-Inter
                    text-xl
                    font-bold
                    mb-6
                "
            >
                {title}
            </h4>
            <p
                className="
                    mb-6
                    text-gray-400
            "
            >
                {text}
            </p>
            <Button />
        </div>
    );
}
