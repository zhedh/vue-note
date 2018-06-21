<template>
    <div>
        <div>{{ newCount }}</div>
        <div>{{ count }}</div>
        <p>{{ localComputed }}</p>
        <p>{{ doneTodosCount }}</p>

        <button @click="increase">+1</button>
        <button v-on:click="reduce">-1</button>
    </div>

</template>
<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: 'Counter',
        data() {
            return {
                newCount: this.$store.state.count
            }
        },
        computed: {
            localComputed() {
                return this.count + 10;
            },
            doneTodosCount() {
                return this.$store.getters.doneTodosCount
            },
            ...mapState({
                count: 'count'
            }),
            ...mapGetters([
                'getTodosById'
            ])
        },
        methods: {
            increase() {
                this.newCount++;
                this.$store.commit('increment', {
                    number: 10
                })
            },
            reduce() {
                if (this.newCount === 0) return;
                this.newCount--;
            },
            getTodos() {
                console.log(this.getTodosById(2))
            }
        },
        mounted() {
            this.getTodos()
        }
    }

</script>
