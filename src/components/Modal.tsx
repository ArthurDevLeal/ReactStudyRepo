type Prop = {
	image: string;
	closeModal: () => void;
};
export default function Modal({ image, closeModal }: Prop) {
	return (
		<>
			<div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90" onClick={closeModal}>
				<img src={image} alt="#" className="max-w-screen max-h-screen" />
			</div>
			<div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl" onClick={closeModal}>
				X
			</div>
		</>
	);
}
