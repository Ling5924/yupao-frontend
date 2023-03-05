<template>
    <van-card v-for="user in userList" :desc="user.profile" :title="`${user.username}(${user.planetCode})`"
        :thumb="user.avatarUrl">
        <template #tags >
            <van-tag plain type="danger" v-for="tag in user.tags" style="margin:6px 8px 0 0;">{{tag}}</van-tag>
        </template>
        <template #footer>
            <van-button size="mini">联系我</van-button>
        </template>
    </van-card>
    <van-empty v-if="!userList||userList.length<1" description="搜索结果为空" />
</template>

<script setup >
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import myAxios from '../plugins/myAxios.js';
import testAxios from '../plugins/test.js';
import {Toast} from 'vant';
import qs from 'qs';
const route = useRoute();
const { tags } = route.query;
const profile = ref();
const username = ref();
const avatarUrl=ref()
onMounted(async ()=>{
  const userListData=await myAxios.get('/user/search/tags', {
    params: {
      tagNameList:tags
    },
    paramsSerializer: { 
      serialize:function(params) {
       return qs.stringify(params, { indices: false })
     }
    },
  })
  .then(function (response ) {
    console.log('/user/search/tags succeed',response);
    Toast.success('请求成功')
    //return response.data?.data;
    return response.data
  })
  .catch(function (error) {
    console.log('/user/search/tags error',error);
    Toast.fail('请求失败')
  });
//    if (userListData){
//     userListData.forEach(user => {
//         if (user.tags){
//             user.tags=JSON.parse(user.tags)
//         }
//     });
//     userList.value=userListData
// }
profile.value=userListData



const userData=await testAxios.get('', {
    params: {
      qq:'2223522114'
    },
  })
  .then(function (response ) {
    console.log('/user/search/tags succeed',response);
    Toast.success('请求成功')
    //return response.data?.data;
    return response.data
  })
  .catch(function (error) {
    console.log('/user/search/tags error',error);
    Toast.fail('请求失败')
  });
username.value=userData.name
avatarUrl.value=userData.imgurl
})
const mockUser = {
    id: 1,
    username: username,
    userAccount: 'admin',
    avatarUrl: avatarUrl,
    profile:profile,
    gender: '男',
    phone: '11111111',
    email: '2222@qq.com',
    userRole: 0,
    planetCode: '909',
    tags: ['java', 'php', 'python', 'css', 'html'],
    createTime: new Date(),
}
const userList = ref([mockUser]);

</script>

<style lang="scss" scoped></style>