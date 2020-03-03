import "bootstrap";
import $ from 'jquery';
import WOW from 'wow.js';

import {navBar} from '../plugins/navbar.js'
import {form} from '../plugins/form.js'
import {egg} from '../plugins/btn.js'
// import {eggLog} from '../plugins/egg.js'
// import {loader} from '../plugins/loader.js'


navBar();
form();
egg();
// eggLog();
// loader();
new WOW().init();
