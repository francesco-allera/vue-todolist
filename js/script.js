new Vue({
    el: '#app',
    data: {
        logo: {
            url: './img/logo.png',
            alt: 'logo Boolean'
        },
        todo: [],
        input: ''
    },
    methods: {
        firstLetterCapitalize(str) {
            return str[0].toUpperCase() + str.slice(1).toLowerCase();
        },
        submit() {
            let string = this.input.trim();
            if (string) {
                string = this.firstLetterCapitalize(string);
                this.todo.push(string);
            }
            this.input = '';
        },
        deleteEl(idx) {
            let deleted = 'Hai eliminato: ' + this.todo.splice(idx, 1);
            let el = document.createElement('div');
            el.className = 'deleted';
            el.innerText = deleted;
            document.querySelector('.footer-relative').appendChild(el);
            setTimeout(() => el.remove(), 3000);
        },
        reset() {
            this.todo = [];
            let el = document.createElement('div');
            el.className = 'deleted';
            el.innerText = 'Lista resettata';
            document.querySelector('.footer-relative').appendChild(el);
            setTimeout(() => el.remove(), 3000);
        }
    }
});

Vue.config.devtools = true;