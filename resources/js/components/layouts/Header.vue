<template>
    <header>
        <nav class="nav-container">
            <div class="nav__top">
                <div class="logo">
                    <a>
                        <img class="img-logo" src="../../../assets/logo.png">
                    </a>
                </div>
                <div class="nav__top__search">
                    <div class="search__input">
                        <i class="fa fa-search icon--search--color"></i>
                        <input class="text--search--input--color remove--outline" placeholder="Nhập tên bài hát, ca sĩ hoặc mv…">
                    </div>
                    <div class="auto-complete-items">

                    </div>
                </div>
                <div class="nav__top__user__profile">
                    <circle-block :isUserProfile="true">
                        <i class="fa fa-user" style="color: white"></i>
                    </circle-block>
                    <circle-block>
                        <i class="fa fa-bell"></i>
                    </circle-block>
                    <circle-block>
                        <i class="fa fa-upload"></i>
                    </circle-block>
                </div>
            </div>
            <div class="nav-bottom"></div>
        </nav>
    </header>
</template>

<script>
    import CircleBlock from "../commons/CircleBlock";
    export default {
        name: "Header",
        components: {CircleBlock}
    }
</script>

<style scoped>

</style>
