<template>
    <table class="leaderboard table-borderless table table-striped">
        <thead>
        <tr>
            <th scope="col">Ailə üzvü</th>
            <th scope="col">Tapşırığın adı</th>
            <th scope="col">Deadline</th>
            <th scope="col">Status</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="task in tasks"
            :key="task.id"
            @click="$emit('clicked', task.id)"
        >
            <td>{{task.member_name}}</td>
            <td>{{task.title}}</td>
            <td>{{task.deadline && _dateString(task.deadline)}}</td>
            <td>
                <div class="status" :class="task.status"></div>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "FamilyTaskTable",
        props: {
            tasks: {
                type: Array,
                default: () => []
            },
        }
    }
</script>

<style scoped>

</style>
