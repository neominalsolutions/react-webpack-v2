import React, {
	ForwardedRef,
	forwardRef,
	useImperativeHandle,
	useState,
} from 'react';

type Props = {
	children: React.ReactNode;
};

// Not: Bir componenti useRef hook ile referans olarak parent component içirisinde kullanmak istersek bu component forwardRef olarak işaretlemek zorundayız.

export type SummaryRef = {
	visible(): void;
	hidden(): void;
	load(data: any): void;
};

function SummaryComponent(props: Props, forwadedRef: ForwardedRef<SummaryRef>) {
	const [visible, setVisible] = useState<boolean>(true);
	const [data, setData] = useState<any>([]);

	useImperativeHandle(forwadedRef, () => {
		return {
			visible() {
				setVisible(true);
			},
			hidden() {
				setVisible(false);
			},
			load(data: any) {
				setData(data);
			},
		};
	});

	return (
		<>
			<div hidden={!visible}>{props.children}</div>
		</>
	);
}

export default forwardRef(SummaryComponent);
