const HOST = document.location.origin;
import image from '../../../images/slider/site_slide_bg-4-2.webp';

import notFoundHBS from './notFound.hbs';

const notFound = lang => notFoundHBS({ image, HOST, lang });
export default notFound;
