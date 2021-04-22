import './style.scss';
import Nav from './nav/nav';
import FooterSection from './footer/footer';

const mainTag = document.getElementsByTagName('MAIN')[0];
const bodyTag = document.getElementsByTagName('BODY')[0];
const container = document.querySelector('.contain');

mainTag.insertBefore(Nav().navTag, container);
Nav().linkClick();
bodyTag.appendChild(FooterSection());