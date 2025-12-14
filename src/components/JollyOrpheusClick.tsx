import Image from "next/image";

type JollyOrpheusClickProps = {
	onClick: () => void;
};

export default function JollyOrpheusClick({ onClick }: JollyOrpheusClickProps) {
	return (
		<button onClick={onClick}>
			<Image src="/heidi.png" width={512} height={512} alt="Heidi"/>
		</button>
	)
}