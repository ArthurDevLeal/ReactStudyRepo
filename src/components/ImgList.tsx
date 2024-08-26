import Img from "./Img";
import { ImgData } from "@/data/ImgData";
type Prop = {
    onClick: (id: number) => void;
};

export default function ImgList({ onClick }: Prop) {
    return (
        <>
            {ImgData.length > 0 &&
                ImgData.map((item) => (
                    <Img key={item.id} id={item.id} src={item.src} onClick={onClick} />
                ))}
        </>
    );
}
