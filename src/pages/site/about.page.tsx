import React from 'react';

// Page componentlerde Props geçmiyoruz.
// API den veri çekme ve UI kit componentlere state bilgilerini paylaşma
// route amaçlı kullanılır ve  (route dosyası dışında) hiç bir componenten ismi ile çağırılmaz.
const AboutPage: React.FC = () => {
	return (
		<>
			<p>Hakkımızda</p>
		</>
	);
};

export default AboutPage;
