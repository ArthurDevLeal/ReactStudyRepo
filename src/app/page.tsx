"use client";

import { useEffect, useState } from "react";
import Video from "@/components/Video";
function Page() {
	const [playing, setPlaying] = useState<boolean>(false);
	return (
		<div className="text-white">
			<div className="border border-white p-3 mb-4">
				<p className="text-2xl font-bold mb-2">{playing ? "Rodando" : "Pausado"}</p>
				<button onClick={() => setPlaying(!playing)}  className="bg-white text-black p-2 rounded-md active:opacity-80">
					Play/Pause
				</button>
			
			</div>
			
			<Video src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={playing} />
		</div>
	);
}
export default Page;
