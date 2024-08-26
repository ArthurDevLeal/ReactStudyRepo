type ImgProp = {
	id: number;
	src: string;
	onClick: (id: number) => void;
};
export default function Img({ id, src, onClick }: ImgProp) {
	return <img src={src} alt="#" className="w-full h-full cursor-pointer hover:opacity-80" onClick={() => onClick(id)} />;
}
