<template>
    <div id="toolbar">
        <i @click="addOne" class="glyphicon glyphicon-plus"></i>
        <i @click="toggleFavorite" class="glyphicon glyphicon-star" v-bind:class="{starred:activeNote.favorite}"></i>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
    </div>
</template>

<script>
    export default {
        computed: {
            activeNote() {
                return this.$store.getters.activeNote
            }
        },
        methods: {
            addOne() {
                this.$store.dispatch('addNote')
            },
            toggleFavorite() {
                this.$store.dispatch('toggleFavorite')
            },
            deleteNote() {
                this.$store.dispatch('deleteNote')
            }
        }
    }
</script>

<style scoped lang="less">
    #toolbar {
        float: left;
        width: 80px;
        height: 100%;
        background-color: #30414D;
        color: #767676;
        padding: 35px 25px 25px 25px;

        i {
            font-size: 30px;
            margin-bottom: 35px;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 0.5s ease;
        }

        i:hover {
            opacity: 1;
        }
    }

    .starred {
        color: #F7AE4F;
    }
</style>