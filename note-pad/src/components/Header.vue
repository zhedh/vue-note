<template>
    <div class="header">
        便签
        <button class="left-btn">{{ leftBtnMsg }}</button>
        <button class="right-btn">{{ rightBtnMsg }}</button>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data(){
            return {
                leftBtnMsg: '返回',
                rightBtnMsg: '编辑'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .header {
        position: relative;
        height: 40px;
        line-height: 40px;
        background: #ddd;
        text-align: center;
        font-size: 16px;

        > button{
            position: absolute;
            top:0;
            bottom: 0;
            margin: auto;
            border: none;
            outline: none;
            background: transparent;
            font-size: 1rem;
            color: #666;
        }
        .left-btn{
            left: 10px;
        }
        .right-btn{
            right: 10px;
        }
    }
</style>
