"use client";
import ImgList from "@/components/ImgList";
import { useState } from "react";
import { ImgData } from "@/data/ImgData";
import Modal from "@/components/Modal";

function page() {
	const [showModal, setShowModal] = useState(false);
	const [imgOfModal, setImgOfModal] = useState("");

	function openImgModal(id: number) {
		const photo = ImgData.find((item) => item.id === id);
		if (photo) {
			setImgOfModal(photo.src);
			setShowModal(true);
		}
	}
	function closeModal() {
		setShowModal(false);
	}
	return (
		<main className="text-white container mx-auto flex flex-col my-4 items-center text-4xl font-bold">
			<h1>Fotos intergalaticas</h1>
			<div className="grid grid-cols-1 gap-6 max-w-5xl h-full md:grid-cols-2 lg:grid-cols-3 px-4">
				<ImgList onClick={openImgModal} />

				{showModal && <Modal image={imgOfModal} closeModal={closeModal} />}
			</div>
		</main>
	);
}
export default page;