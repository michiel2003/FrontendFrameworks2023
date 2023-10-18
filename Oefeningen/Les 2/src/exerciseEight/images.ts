import image1 from '../assets/images/ben-den-engelsen-aY16vd7hNgk-unsplash.webp'
import image2 from '../assets/images/braden-jarvis-prSogOoFmkw-unsplash.webp'
import image3 from '../assets/images/christine-sandu-ucVNxnuTqtU-unsplash.webp'
import image4 from '../assets/images/cristina-glebova-XYmELZSiAGA-unsplash.webp'
import image5 from '../assets/images/david-jusko-9MtqpiW9Olw-unsplash.webp'
import image6 from '../assets/images/emma-francis-vpHCfunwDrQ-unsplash.webp'
import image7 from '../assets/images/fabian-quintero-UWQP2mh5YJI-unsplash.webp'
import image8 from '../assets/images/fabrizio-conti-avHlZjuJgX0-unsplash.webp'
import image9 from '../assets/images/fabrizio-conti-BFFgACu5UXI-unsplash.webp'
import image10 from '../assets/images/fabrizio-conti-c3wsMnxQZDw-unsplash.webp'

export const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]

const getRandomImage = (): string => {
    const i = Math.floor(Math.random() * 10)
    return images[i]
}

export default getRandomImage
