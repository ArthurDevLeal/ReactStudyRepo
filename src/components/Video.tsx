import { useEffect, useRef } from "react";

type Prop = {
	src: string;
	isPlaying: boolean;
};
export default function Video({ src, isPlaying }: Prop) {
	const videoTag = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		isPlaying ? videoTag.current?.play() : videoTag.current?.pause();
	}, [isPlaying]);
	return <video ref={videoTag} src={src} loop playsInline></video>;
}
