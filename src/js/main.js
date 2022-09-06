import modals from "./modules/modals";
import slider from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
})