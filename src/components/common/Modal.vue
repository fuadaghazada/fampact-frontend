<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="app-modal" role="dialog"
                 tabindex="-1"
                 aria-labelledby="modalTitle"
                 aria-describedby="modalDescription"
            >
                <div class="modal-dialog m-0" role="document">
                    <div class="modal-content">
                        <!-- Modal header -->
                        <header class="modal-header" id="modalTitle">
                            <h5 class="modal-title" id="exampleModalCenterTitle">{{title}}</h5>
                            <button @click="$emit('close')" type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </header>

                        <!-- Modal body -->
                        <section class="modal-body" id="modalDescription">
                            <slot name="body"/>
                        </section>

                        <!-- Modal footer -->
                        <footer class="modal-footer">
                            <slot name="footer"/>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal",
        emits: ['close'],
        props: {
            title: {
                type: String
            }
        }
    };
</script>

<style scoped lang="scss">
    .hgroup-wrap {
        border-bottom: 0;
    }
    .modal-fade-enter, .modal-fade-leave-active {
        opacity: 0;
    }
    .modal-fade-enter-active, .modal-fade-leave-active {
        transition: opacity .5s ease
    }
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        border: none;
    }
    .app-modal {
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        width: 100%;
        max-width: 555px;
        height: fit-content;
        padding: 32px;
    }
</style>
