<template>
    <van-nav-bar :title="$route.meta.title" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
    <router-view />
    <van-tabbar route @change="onChange">
        <van-tabbar-item icon="home-o" name="index" to="/">主页</van-tabbar-item>
        <van-tabbar-item icon="search" name="team" to="/team">队伍</van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="user" to="/user">个人</van-tabbar-item>
    </van-tabbar>
</template>
<script setup>
import {useRouter} from 'vue-router'
const router=useRouter()

const onClickLeft = () => history.back();
const onClickRight = () =>{
    router.push('/serach')
}
</script>
<style>

</style>