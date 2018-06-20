<template>
    <div id="toolbar">
        <i @click="addOne"
           class="iconfont icon-jiahao"></i><br>
        <i @click="toggleFavorite"
           class="iconfont icon-biaoxing" v-bind:class="{starred:activeNote.favorite}"></i><br>
        <i @click="deleteNote"
           class="iconfont icon-guanbi2"></i>
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
        box-sizing: border-box;
        background-color: #30414D;
        color: #767676;
        padding: 35px 25px 25px 25px;

        i {
            display: inline-block;
            font-size: 30px;
            margin-bottom: 20px;
            cursor: pointer;
            opacity: 0.8;
            transition: opacity 0.5s ease;
            color: #fff;
        }

        i:hover {
            opacity: 1;
        }
    }

    .starred {
        color: #F7AE4F;
    }
</style>