<template>
    <div id="content" class="p-4 p-md-5 pt-5">
        <div class="leaderboard-header">
            <h2>Liderlər</h2>
            <a href="generalleaderboard.html"><button class="additional-button">Bütün istifadəçilər</button></a>
            <button class="chosen-button">Mənim ailəm</button>

            <div class="new-member" >
                <span>Yeni üzv yaratmaq</span>
                <button class="add-new-button " type="button"  data-toggle="modal" data-target="#add-new-member-modal">+</button>
            </div>
        </div>
        <table class="leaderboard table-borderless table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Ailə üzvü</th>
                <th scope="col">Yaş</th>
                <th scope="col">Xal</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(member, i) in familyMembers" :key="member.id">
                <th scope="row">{{i + 1}}</th>
                <td>{{member['first_name']}}</td>
                <td>{{member['d_o_b']}}</td>
                <td class="orange-col"><a href="">{{member.score}}</a></td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "famLeaderboard",

        computed: {
            ...mapGetters('scoring', ['familyMembers'])
        },
        methods: {
            ...mapActions('scoring', ['privateLeaderBoard'])
        },
        async mounted() {
            await this['privateLeaderBoard']();
        }
    }
</script>

<style scoped>

</style>
