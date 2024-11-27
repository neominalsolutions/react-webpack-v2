import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

function ParentComponent() {
	const [random, setRandom] = useState<number>(0);
	const [number, setNumber] = useState<number>(15); // setProduct({... products}); setPersons([... person])

	// genel olarak component açılışında component ait propslar üzerinden gelen değerlere göre bir hesaplama yapılıp. ekran hesaplanmış değerin yansıtılması istenebilir. Ve bu değer, herhangi bir değişim olana kadar re-render almadan ekrana gösterilmek istene bilir. Yani ilgili value cachelemek isteyebiliriz. fakat memoisation yapmaz isek bu değer her bir state değişinde yeniden hesaplanmak zorunda kalır.

	// bir değişkenin değerin yada hesaplanmış bir değerin biz isteyene kadar değişmemesini istiyorsak useMemo ile bu değeri sarmallamamız lazım.

	const total = () => {
		console.log('... calculating');
		// long running functional
		return 5 * number;
	};

	// [] bir kereye mahsus component domadan çıkana kadar bu değeri memoize et.
	const totalValue = useMemo(() => total(), [number]);

	return (
		<>
			<p>totalValue: {totalValue}</p>
			<input
				type="number"
				className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
				onChange={(e: any) => {
					setNumber(Number(e.target.value));
				}}
			/>

			<button onClick={() => setRandom(Math.random() * 1000)}>
				Set Random / {random}
			</button>
			<ChildComponent
				onLoad={useCallback(() => {
					console.log('child component doma yüklendi');
				}, [])}
			/>
		</>
	);
}

type ChildComponentProps = {
	title?: string;
	onLoad?(): void; // Not: Function propslar re-render tetikler. her bir render işleminde eğer func memoize etmez isek yeniden func referansı oluşur.
};

// Not: parent componentdeki bir state yada props değişikliği child componente ait propsları ilgilendirmiyorsa bu durumda memo ile componenti sararsak gereksiz renderdan re-render dan kurtuluyoruz.

const ChildComponent = memo(({ title, onLoad }: ChildComponentProps) => {
	console.log('rendering...', title);

	useEffect(() => {
		// veri çektik verinin yükleme zamanını tespit edemediğimiz için veri axios veya fetch ile yüklendiğinde onLoad denilen function load edip o anı child componente yakalıyoruz.
		if (onLoad) {
			console.log('onload starting');
			onLoad();
		}
	}, [title]);

	return <>{title}</>;
});

function ReactMemoPageSample() {
	return (
		<>
			<ParentComponent />
		</>
	);
}

export default ReactMemoPageSample;
