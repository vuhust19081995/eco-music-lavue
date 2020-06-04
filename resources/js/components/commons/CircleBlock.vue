<template>
    <a class="circle-block" :class="{'circle--block--bg--user-profile': isUserProfile}">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props:['isUserProfile'],
        name: "CircleBlock"
    }
</script>

<style lang="scss" scoped>
    .circle-block {
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: #231F3B;
        padding: 5px;
        margin-right: 5px;
        cursor:pointer;

        i {
            -webkit-text-stroke: 1px white;
        }
    }

    .circle--block--bg--user-profile{
        background-color: #CDD5E2;
    }

    .user--profile--icon--color{
        color: white;
    }
</style>
