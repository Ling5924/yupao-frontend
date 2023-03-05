<template>
    <form action="/">
        <van-search v-model="searchText" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
    </form>
    <van-divider content-position="left">已选标签</van-divider>
    <div v-if="activeIds.length === 0">请选择标签</div>
    <van-row gutter="16">
        <van-col v-for="tag in activeIds">
            <van-tag closeable size="small" type="primary" @close="doClose(tag)">
                {{ tag }}
            </van-tag>
        </van-col>
    </van-row>
    <van-divider content-position="left">选择标签</van-divider>
    <van-tree-select v-model:active-id="activeIds" v-model:main-active-index="activeIndex" :items="tagList" />
        <div style="padding: 12px;">
            <van-button block type="primary" @click="doSearchResult()">搜索</van-button>
        </div>
</template>
<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
const router=useRouter()
const searchText = ref('');
const originTagList = [
    {
        text: '浙江',
        children: [
            { text: '杭州', id: '杭州' },
            { text: '温州', id: '温州' },
            { text: '宁波', id: '宁波' },
        ],
    },
    {
        text: '江苏',
        children: [
            { text: '南京', id: '南京' },
            { text: '无锡', id: '无锡' },
            { text: '徐州', id: '徐州' },
        ],
    },
    {
        text: '福建',
        children: [
            { text: '莆田', id: '莆田' },
            { text: '福州', id: '福州' },
            { text: '公五司', id: '公五司' },
        ],
    },

];

let tagList=ref(originTagList);
const onSearch = (val) => {
   tagList.value=originTagList.map(parentTag=>{
    const tempChildren=[...parentTag.children];
    const tempParentTag={...parentTag};
    tempParentTag.children=tempChildren.filter(item=>item.text.includes(searchText.value));
    return tempParentTag;
   });
};
const doSearchResult=()=>{
    router.push({
        path:'/user/list',
        query:{
            tags:activeIds.value
        }
    })
}
const onCancel = () => {
    searchText.value = '';
    tagList.value=originTagList;
}

const activeIds = ref([]);
const activeIndex = ref(0);
const doClose = (tag) => {
    activeIds.value = activeIds.value.filter(item => {
        return item !== tag
    })
}


</script>

<style lang="scss" scoped></style>