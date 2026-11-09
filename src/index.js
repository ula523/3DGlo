const timer = require("./modules/timer");
const menu = require("./modules/menu");
const modal = require("./modules/modal");
const content = require("./modules/content");
const tabs = require("./modules/tabs");
const slider = require("./modules/slider");
const calc = require("./modules/calc");

timer("8 november 2026"); //вызывает таймер и указывает дедлайн
menu();
modal();
content();
tabs();
slider();
calc(100);
