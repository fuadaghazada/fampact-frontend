<template>
    <app-modal @close="$emit('close')" title="Tapşırığın adı" >
        <template v-slot:body>
            <form @submit.prevent="onSubmit">
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Tapşırığın adı</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" placeholder="Tapşırıq" v-model="title">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Məsul şəxs</label>
                    <div class="col-sm-10">
                        <span>Şəxsin adı</span>
                        <select v-model="user">
                            <option v-for="member in members" :key="member.id" :value="member.id">{{member['first_name']}}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-2 col-form-label">Məlumat</label>
                    <div class="col-sm-10">
                        <textarea name="" id="" cols="30" rows="5" v-model="description"></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Deadline</label>
                    <div class="col-sm-10">
                        <input type="datetime-local" class="form-control" id="name" v-model="deadline">
                    </div>
                </div>
            </form>
        </template>
        <template v-slot:footer>
            <button @click="closeModal" type="button" class="btn btn-secondary" data-dismiss="modal">Ləğv et</button>
            <button @click="onSubmit" :disabled="!canSubmit" type="button" class="btn btn-primary">Yadda saxla</button>
        </template>
    </app-modal>
</template>

<script>
    export default {
        name: "AddTaskModal",
        emits: ['submit', 'close'],
        props: {
            members: {
                type: Array,
                default: () => []
            },
        },
        data() {
            return {
                title: '',
                user: null,
                description: '',
                deadline: null
            }
        },
        computed: {
            canSubmit() {
                return this.title !== '';
            },
        },
        methods: {
            closeModal() {
                this.$emit('close');
            },
            onSubmit() {
                const { title, user, description, deadline } = this;
                this.$emit('submit', {
                    title, user, description, deadline
                });
                this.$emit('close');
                this.title = '';
                this.user = null;
                this.description = '';
                this.deadline = null;
            }
        }
    }
</script>

<style scoped>

</style>
