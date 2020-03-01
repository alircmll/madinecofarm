import "bootstrap";
import $ from 'jquery';
import WOW from 'wow.js';

import {navBar} from '../plugins/navbar.js'
import {form} from '../plugins/form.js'
import {egg} from '../plugins/btn.js'


navBar();
form();
egg();

new WOW().init();
