<template>
    <div id="content" class="p-4 p-md-5 pt-5">
        <div class="leaderboard-header">
            <h2>Liderlər</h2>
            <button @click="setPublic" class="chosen-button" :disabled="isPublic">Bütün istifadəçilər</button>
            <button @click="setFamily" class="chosen-button" :disabled="!isPublic">Mənim ailəm</button>

            <div class="new-member" >
                <span>Yeni üzv yaratmaq</span>
                <button class="add-new-button " type="button"  data-toggle="modal" data-target="#add-new-member-modal">+</button>
            </div>
        </div>
        <table v-if="isPublic" class="leaderboard table-borderless table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Ailə</th>
                <th scope="col">Bölgə</th>
                <th scope="col">Xal</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(member, i) in families" :key="member.id">
                <th scope="row">{{i + 1}}</th>
                <td>{{member.name}}</td>
                <td>{{member.region}}</td>
                <td class="orange-col"><a href="">{{member.score}}</a></td>
            </tr>
            </tbody>
        </table>

        <table v-else class="leaderboard table-borderless table table-striped">
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
                <td>{{member['age']}}</td>
                <td class="orange-col"><a href="">{{member.score}}</a></td>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "globalLeaderboard",
        data() {
            return {
                isPublic: false
            }
        },
        computed: {
            ...mapGetters('scoring', ['families', 'familyMembers'])
        },
        methods: {
            ...mapActions('scoring', ['publicLeaderBoard', 'privateLeaderBoard']),

            setPublic() {
                this.isPublic = true;
            },
            setFamily() {
                this.isPublic = false;
            }
        },
        async mounted() {
            await this['publicLeaderBoard']();
            await this['privateLeaderBoard']();
        }
    }
</script>

<style scoped>

</style>
