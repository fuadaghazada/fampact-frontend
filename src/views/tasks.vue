<template>
    <div id="content" class="p-4 p-md-5 pt-5">
        <div class="leaderboard-header">
            <h2>Tapşırıqlar</h2>
            <button class="additional-button">Mənim tapşırıqlarım</button>
            <button class="chosen-button">Hamısı</button>

            <div class="new-task">
                <span>Yeni tapşırıq yaratmaq</span>
                <button
                        @click="showModal"
                        class="add-new-button "
                        type="button"
                        data-toggle="modal"
                        data-target="#add-new-task-modal">
                    +
                </button>
            </div>
        </div>

        <family-task-table
                :tasks="tasks"
                @clicked="complete"
        />
    </div>

    <!-- Modal -->
    <add-task-modal
            v-show="showAddTaskModal"
            @submit="submit"
            @close="closeModal"
            :members="myFamily && myFamily.members.filter(m => m.id !== authUser.id)"
    />
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    import FamilyTaskTable from "../components/tables/FamilyTaskTable";
    import AddTaskModal from "../components/modals/AddTaskModal";

    export default {
        name: 'Tasks',
        components: {
            AddTaskModal,
            FamilyTaskTable
        },
        data() {
            return {
                showAddTaskModal: false
            }
        },
        computed: {
            ...mapGetters('task', ['tasks']),
            ...mapGetters('auth', ['authUser']),
            ...mapGetters('account', ['myFamily'])
        },
        methods: {
            ...mapActions('task', ['addTask', 'listTasks', 'updateStatus']),
            ...mapActions('account', ['getMyFamily']),
            showModal() {
                this.showAddTaskModal = true;
            },
            closeModal() {
                this.showAddTaskModal = false;
            },
            async complete(id) {
                await this['updateStatus']({id, status: 'DONE'});
                await this['listTasks']();
            },
            async submit(data) {
                const { title, user, description, deadline } = data;
                const requestData = {
                    title,
                    assigned_to: user,
                    description,
                    deadline
                };
                await this['addTask']({data: requestData});
                await this['listTasks']();
            }
        },
        async mounted() {
            await this['getMyFamily']();
            await this['listTasks']();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
