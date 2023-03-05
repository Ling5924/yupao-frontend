<template>
    <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username','昵称',user.username)" />
    <van-cell title="账号" :value="user.userAccout" />
    <van-cell title="头像" is-link :value="user.avatarUrl" @click="toEdit('avatarUrl','头像',user.avatarUrl)" />
    <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)" />
    <van-cell title="电话" is-link :value="user.phone" @click="toEdit('phone','电话',user.phone)" />
    <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email','邮箱',user.email)" />
    <van-cell title="星球编号"  :value="user.planetCode" />
    <van-cell title="注册时间"  :value="user.createTime.toISOString()" />
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
const router=useRouter();
const toEdit=(editKey:string,editName:string,currentValue:string)=>{
    router.push({
        path:'/user/edit',
        query:{
            editKey,
            currentValue,
            editName,
        }
    })
}

const user={
    id: 1,
    username:'root',
    userAccout:'admin',
    avatarUrl:'wwwww',
    gender:'男',
    phone:'11111111',
    email:'2222@qq.com',
    planetCode:'123',
    createTime:new Date(),
}

</script>

<style lang="scss" scoped></style>