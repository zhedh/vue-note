<template>
    <div class="editor">
        <header>
            新建便签
            <button class="left-btn">{{ leftBtnMsg }}</button>
            <button class="right-btn">{{ rightBtnMsg }}</button>
        </header>
    </div>
</template>

<script>

  export default {
    name: 'Editor'
  }
</script>

<style>
    .editor {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
</style>