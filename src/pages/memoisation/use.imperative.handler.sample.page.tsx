import React, { useRef } from 'react';
import SummaryComponent, {
	SummaryRef,
} from '../../components/summary.component';

function UseImperativeHandlerSamplePage() {
	const summaryRef = useRef<SummaryRef>(null);

	const data = [{ id: 1, name: 'deneme' }];

	return (
		<>
			<SummaryComponent ref={summaryRef}>
				<p>Deneme</p>
			</SummaryComponent>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => {
					summaryRef.current?.visible();
				}}
			>
				Göster
			</button>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => {
					summaryRef.current?.hidden();
				}}
			>
				Gizle
			</button>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => {
					summaryRef.current?.load(data);
				}}
			>
				Load Data
			</button>
		</>
	);
}

export default UseImperativeHandlerSamplePage;
