<template>
    <a class="circle-block" :class="{'bg--user--profile': isUserProfile}">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: ['isUserProfile'],
        name: "UserProfileBlock"
    }
</script>

<style lang="scss" scoped>
    .circle-block {
        float: right;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 43px;
        height: 43px;
        border-radius: 50%;
        background-color: #231F3B;
        padding: 5px;
        margin-left: 10px;
        cursor: pointer;

        &:hover {
            background-color: #1b4b72;
        }

        i {
            -webkit-text-stroke: 1px white;
        }
    }

    .bg--user--profile {
        background-color: #CDD5E2;
    }

    .user--profile--icon--color {
        color: white;
    }
</style>
