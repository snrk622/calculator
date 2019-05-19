(function () {
    'use strict';
    
    var vm = new Vue({
        el: '#cal',
        data: {
            formula: ''
        },
        methods: {
            cal: function (cmd) {
                if (cmd === '=') {
                    this.formula = eval(this.formula);
                } else if (cmd === 'AC') {
                    this.formula = '';
                } else {
                    this.formula += cmd;
                }
                
            }
        }
    });
})();