type Props = {
    title: string;
};

const Title = ({ title }: Props) => {
    return (
        <div className="flex items-baseline gap-4 mb-10">
            <h3 className="text-3xl tracking-widest text-primary menu-text uppercase">
                {title}
            </h3>
            <div className="h-px flex-grow bg-white/10 linea"></div>
        </div>
    )
}

export default Title