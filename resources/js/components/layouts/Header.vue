<template>
    <header>
        <nav class="top-bar">
            <div class="top-bar-inner">
                <div class="logo">
                    <a>
                        <img class="img-logo" src="../../../assets/logo.png">
                    </a>
                </div>
                <div class="top-bar-search">
                    <div class="top-bar-search-inner">
                        <form>
                            <div class="search-input search-input-hide-autocomplete"
                                 :class="{'search-input-show-autocomplete' : isSearch}">
                                <i class="fa fa-search icon--search--color"></i>
                                <input class="text--search--input--color remove--outline"
                                       placeholder="Nhập tên bài hát, ca sĩ hoặc mv…" @focus="isSearch = true"
                                       @blur="isSearch = false">
                            </div>
                        </form>
                        <div v-if="isSearch" class="auto-complete-items">
                            <ul>
                                <li>
                                    <a>
                                        aaa
                                        <i class="fa fa-history"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="top-bar-user-profile">
                    <user-profile-block>
                        <i class="fa fa-upload"></i>
                    </user-profile-block>
                    <user-profile-block>
                        <i class="fa fa-bell"></i>
                    </user-profile-block>
                    <user-profile-block :isUserProfile="true">
                        <i class="fa fa-user" style="color: white"></i>
                    </user-profile-block>
                </div>
            </div>
            <div class="nav-bottom"></div>
        </nav>
    </header>
</template>

<script>
    import UserProfileBlock from "../commons/UserProfileBlock";

    export default {
        name: "Header",
        components: {UserProfileBlock},
        data() {
            return {
                isSearch: false
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>
