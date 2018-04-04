<template>
    <div style="display: -webkit-box;background: white;border-top: 1px solid #D9D9D9;border-bottom: 1px solid #D9D9D9">
      <div v-for="(item,index) in items" :key="index" style="-webkit-box-flex: 1;padding: 5px;text-align: center" @click="click(index,item)" :class="{color:isscur===index}">{{item.title}}</div>
      <slot></slot>
    </div>
</template>

<script>
    export default {
        created(){
        },
        mounted(){

        },
        props:{
          items:{
              type:Array,
              defalut:[]
          }
        },
        data () {
            return {
                isscur: 0
            }
        },
        components: {},
        methods: {
          click(index,item){
              this.isscur=index;
              this.$emit("click",item)
          }
        }
    }
</script>

<style scoped>
    .color{
      color: red;
    }
</style>
