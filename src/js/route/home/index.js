import getHost from '../../helpers/getHost';
import image from '../../../images/slider/site_slide_bg-4-2.webp';
import list from '../../../images/svg/list.svg';
import arrow from '../../../images/svg/arrow.svg';

import sliderHBS from './slider.hbs';
import reasonsHBS from './reasons.hbs';
import infoHBS from './info.hbs';
import projectsHBS from './projects.hbs';
import seoHBS from './seo.hbs';

const { HOST } = getHost();
const slider = lang => sliderHBS({ image, lang });
const reasons = lang => reasonsHBS({ HOST, lang });
const info = lang => infoHBS({ HOST, lang });
const projects = lang => projectsHBS({ HOST, lang, list, arrow });
const seo = lang => seoHBS({ lang });

export default [slider, reasons, info, projects, seo];
