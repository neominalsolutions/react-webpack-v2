import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function Counter() {
	const [random, setRandom] = useState<number>(0);
	// const [btnDisabled, setbtnDisabled] = useState<boolean>(false);
	// const [clickedCount, setClickedCount] = useState<number>(0);

	// useRef ya bir elemente referans olarak kullanılabilir yada bir değer referansını re-render etmeden tutmak için kullanılıyor.
	const btnRef = useRef<HTMLButtonElement>(null);
	const clickedCount = useRef<number>(0);

	useEffect(() => {
		console.log('random changed oldu');
	}, [random]);

	// useEffect(() => {
	// 	console.log('clickedCount changed oldu');
	// }, [clickedCount]);

	// let ref = 0;

	// console.log('...rendering', clickedCount);

	function handleClick() {
		// ref = ref + 1;

		clickedCount.current = clickedCount.current + 1;
		console.log('clicked count', clickedCount.current);

		if (clickedCount.current == 10) {
			// setbtnDisabled(true);
			if (btnRef.current) {
				btnRef.current.disabled = true;
			}
		}

		setRandom(Math.random() * 1000);
		// setClickedCount(clickedCount + 1);
	}

	return (
		<>
			<p>Random: {random}</p>
			{/* <button disabled={btnDisabled} onClick={handleClick}>
				Click me!
			</button> */}
			<button ref={btnRef} onClick={handleClick}>
				Click me!
			</button>
			{/* ;<p>Clicked Count: {clickedCount.current}</p> */}
		</>
	);
}
