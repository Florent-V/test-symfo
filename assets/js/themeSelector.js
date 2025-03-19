import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    connect() {
        console.log('Hello Stimulus! Edit me in assets/controllers/hello_controller.js');
        document.addEventListener('DOMContentLoaded', function () {
            const themeLinks = document.querySelectorAll('[data-theme]');
            console.log(themeLinks);
            themeLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    const theme = this.getAttribute('data-theme');
                    document.documentElement.setAttribute('data-theme', theme);
                });
            });
        });

    }
}
