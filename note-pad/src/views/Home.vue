<template>
    <div class="home">
        <Header></Header>
        <main>
            <ul>
                <li>
                    维京游轮<br>
                    <small>
                        <span class="create-time">5月24日</span>
                        <span class="summarize">今天是个好日子</span>
                    </small>
                </li>
                <li>
                    维京游轮<br>
                    <small>
                        <span class="create-time">5月24日</span>
                        <span class="summarize">今天是个好日子</span>
                    </small>
                </li>
            </ul>
        </main>
        <button class="insert">＋</button>
        <Editor></Editor>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Header from '@/components/Header.vue'
    import Editor from '@/components/Editor.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld,
            Header,
            Editor
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/variables";
    @import "../assets/less/mixins";

    .home{
        position: relative;
        height: 100vh;
    }

    main {

        ul {
            .clear-ul;

            > li {
                margin-left: 10px;
                padding: 10px 10px 10px 0;
                border-bottom: 1px solid #f1f1f1;
                font-size: 1rem;

                small {
                    font-size: @font-size-12;
                    color: #666;
                }

                .create-time{
                    margin-right: 1.2rem;
                }
            }

        }
    }

    .insert{
        position: absolute;
        right: 0;
        bottom: 2rem;
        left: 0;
        margin: auto;
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;
        background-color: bisque ;

        line-height: 3rem;
        text-align: center;
        font-size: 2rem;
        color: #fff;
        outline: none;
    }
</style>
