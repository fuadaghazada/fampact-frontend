import Modal from "../../components/common/Modal";

export default {
    install: app => {
        app.component('app-modal', Modal);

        app.config.globalProperties.$alert = params => {
            app.config.globalProperties.$emitter.emit('app-alert-open', {params});
        };
    }
}
