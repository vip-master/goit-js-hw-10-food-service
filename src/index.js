import "./styles.css"
import "./images/sprite.svg"

import template from "./templates/template.hbs"
import data from "./menu.json"

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
    LOCAL: 'theme',

};

const checker = document.querySelector(".theme-switch__toggle")

let actualTheme = (localStorage.getItem(Theme.LOCAL)) ? localStorage.getItem(Theme.LOCAL) : Theme.LIGHT
document.body.classList.add(actualTheme)
checker.checked = actualTheme !== Theme.LIGHT


const toggle = () => {

    document.body.classList.remove(actualTheme)
    actualTheme == Theme.LIGHT ? actualTheme = Theme.DARK : actualTheme = Theme.LIGHT
    document.body.classList.add(actualTheme)
    localStorage.setItem(Theme.LOCAL, actualTheme)
}

const render = (tempCall, data) => {
    document.querySelector(".menu").insertAdjacentHTML("beforeend", tempCall(data))
}

render(template, data)

document.querySelector(".theme-switch__toggle").addEventListener("change", toggle)