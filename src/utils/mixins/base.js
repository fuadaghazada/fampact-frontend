import $ from 'jquery';
import moment from "moment";


export default {
    computed: {
        _moment() {
            moment.locale(this.$i18n.locale);
            return moment;
        }
    },
    methods: {
        _capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        _dateString(date, format='YYYY-MM-DD') {
            return date && this._moment(date).format(format);
        },
        _datetimeString(datetime, format='DD MMMM, HH:mm') {
            return datetime && this._moment(datetime).format(format);
        },
        _scrollToRef(id) {
            $('html').animate({
                scrollTop: $(`#${id}`).offset().top
            }, 1000);
        },
        _formatError(e) {
            let formatted = "";
            for (let key in e) {
                let value = e[key];
                if (Array.isArray(value))
                    formatted += `${value.length && value[0]}\n`;
                else
                    formatted += `${value}\n`;
            }
            return formatted;
        },
    }
}
