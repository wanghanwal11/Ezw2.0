<template>
    <div>
      <div class="header">
        <div style="height: 15px;background:#2989ff;position: fixed;width: 100%;z-index: 2;"></div>
        <div style="background: #2989ff;position: fixed;width: 100%;z-index: 2;top: 15px;height:55px;"  v-if="!fix">
          <div style="color: white;line-height: 63px;margin: 0 auto;width: 80px;font-size: 20px" :style="{opacity:opacity}">E政务</div>
        </div>
        <div style="background: #2989ff;position: fixed;width: 100%;z-index: 2;top: 15px;height:55px;"  v-if="fix">
            <div style="color: white;display: -webkit-box;" >
              <div v-for="(item,index) in item4"   :style="{opacity:opacity1}" :key="index" style="font-size: 30px;text-align: center;padding: 5px 0;-webkit-box-flex: 1" :class="'iconfont'+' icon-'+item.imageName"></div>
              <div v-for="(item,index) in item5"  :style="{opacity:opacity2}"  :key="index" style="font-size: 30px;text-align: center;padding: 5px 0;-webkit-box-flex: 1" :class="'iconfont'+' icon-'+item.imageName"></div>
            </div>
          </div>
      </div>
      <div style="width: 100%;position: relative;">
        <div style="height: 65px"></div>
        <div  class="my_scroller" >
          <grid :cols="4" style="background: white;  width: 100%;margin-bottom: 10px">
            <grid-item v-for="(i,index) in item1" :key="index" style="text-align: center" @click.native="pointto(i)">
              <div>
                <div  style="position: relative;width: 30px;height: 30px;margin: 0 auto;">
                  <div style="font-size:30px;position: absolute;top: -9px;left: 0" class="iconfont" :class="'icon-'+i.imageName+' '+color(i.imageName)">
                  </div>
                  <!--<div style="position: absolute;bottom: -3px;width: 18px;height: 18px;right: -4px;background: white;border: 1px solid white;border-radius: 50%">-->
                    <!--<badge text="" style="margin-top: -8px;padding: 0px;margin-left: 2px;width: 13px;height: 13px;background: white;border: 2px solid #F05140;color: #F05140"></badge>-->
                  <!--</div>-->
                </div>
                <span style="line-height: 20px;font-size: 12px;color: black">{{i.itemTitle}}</span>
              </div>
            </grid-item>
          </grid>
          <div style="background: white;margin-bottom: 10px"  v-for="i in 10">
              <div style="display: -webkit-box;padding: 10px;">
                <div style="width: 40px;text-align: center;position: relative">
                  <svg slot="icon" class="icon i" aria-hidden="true" style="width: 22px;height: 22px;position: absolute;top: 2px;left: 10px">
                    <use xlink:href="#icon-hujiaozhongxin"></use>
                  </svg>
                  <badge  style="margin-top: -14px;padding: 4px;position: absolute;top: 11px;right: 7px;"></badge>
                </div>
                <div style="font-size: 14px;line-height: 28px;color: #999;-webkit-box-flex: 1;padding-left: 3px">
                  <span style="color: black">网格化</span>
                  <span style="margin-left: 30px;float: right;margin-right: 10px;">2017-2-5</span>
                </div>
              </div>
              <div style="padding: 0 15px;display: -webkit-box;background: white;">
                  <div style="-webkit-box-flex: 1;  padding: 5px 10px;background: #eceef1">
                    <div style="line-height: 30px;">紧急事件--已转办</div>
                    <div style="font-size: 14px;padding-bottom: 5px;color: #999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料</div>
                  </div>
                  <div style="width: 50px" v-if="false">
                    11
                  </div>
               </div>
              <div style="padding: 0 20px 0px 20px;"><div style="font-size: 14px;color: #999;line-height: 30px;">来源:111</div></div>
          </div>
        </div>
      </div>
      <div style="height: 53px"></div>
    </div>
</template>

<script>
  import { Grid, GridItem, GroupTitle,XHeader,Badge,Flexbox, FlexboxItem } from 'vux'
  var vm
    export default {
        mounted(){
//          this.$browser.huanChong(0,145,2,'jiansu',function (c) {
//              console.log(c)
//            document.documentElement.scrollTop=c
//          })
          vm=this;
          let moudlelist=this.$browser.getParameter("moudlelist");
          window.addEventListener('scroll',this.menu)
          window.addEventListener('touchend',this.touchend)
          if(moudlelist&&moudlelist!='' ){
            vm.item1=moudlelist;
            vm.moudle(vm.item1,function(){
              vm.item1.push({itemTitle:"更多",imageName:"gengduo"})
            })
          }else{
            this.$ajax("work_list").then(function(res){
              vm.item1=res.rows[0][0].items;
              vm.moudle(vm.item1,function(){
                vm.item1.push({itemTitle:"更多",imageName:"gengduo"})
              })
            })
          }
          },
        data () {
            return {
                t:null,
              item1: [],
              item4:[],
              item5:[],
              items: [],
              scrollTop:0,
              fix:false,
              opacity:1,
              opacity1:0,
              opacity2:0
            }
        },
        components: {
          Grid,
          GridItem,
          GroupTitle,
          XHeader,
          Badge,Flexbox, FlexboxItem
        },
        watch:{

        },
        methods: {
          touchend(){
              var s=parseInt(this.scrollTop/35)
              if(this.scrollTop<35){
                if(this.t) {
                  clearInterval(this.t);
                  this.t = null;
                }
                this.t = this.$browser.huanChong(this.scrollTop,0,200,'jiasu',function (c) {
                  document.documentElement.scrollTop=c
                  document.body.scrollTop=c
                })
              }
              if(s==1||s==2||s==3){
                /*document.documentElement.scrollTop=80
                document.body.scrollTop=80*/
                if(this.t) {
                  clearInterval(this.t);
                  this.t = null;
                }
                this.t = this.$browser.huanChong(this.scrollTop,145,200,'jiasu',function (c) {
                  document.documentElement.scrollTop=c
                  document.body.scrollTop=c
                })
               // this.scrollToTop(this.scrollTop,80)
              }

          },
          scrollToTop(i,j) {
           var t=setInterval(function(){
                if(i==j) {
                  clearInterval(t)
                  return
                }
                 i++
                document.documentElement.scrollTop=i
                document.body.scrollTop=i
              },5)
            },
          scrollToTop1(i,j) {
            var t=setInterval(function(){
              if(i==j) {
                clearInterval(t)
                return
              }
              i--
              document.documentElement.scrollTop=i
              document.body.scrollTop=i
            },5)
          },
            moudle(item1,back){
              if(item1.length>=4){
                for(let i=4;i<7;i++){
                  if(item1[i]){
                    vm.item5.push(item1[i])
                  }else{
                    vm.item5.push({itemTitle:"",imageName:""})
                  }
                }
                vm.item4= item1.slice(0,4)
              }else{
                for(let i=0;i<4-vm.item4.length;i++){
                  vm.item4.push({itemTitle:"",imageName:""})
                }
              }
              back()
            },
            menu(){
             this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
              this.opacity=1-this.scrollTop*0.025
              if(this.scrollTop>=40){
                 this.opacity1=this.scrollTop*0.025-1
              }
              if(this.scrollTop>=80){
                this.opacity2=this.scrollTop*0.015-1
              }else{
                this.opacity2=0
              }
              if(this.scrollTop>=40 ){
                 this.fix=true
              }else{
                this.fix=false
              }
            },
          vuetouch(s,e){
            if(s.name=='longtap'){
              alert(1)
            }
          },
          pointto(i){
              if(i.imageName!='gengduo'){
                this.$router.push({
                  path:'/wghxq'
                })
              }else{
                this.$router.push({
                 path:'/moudlelist'
                 })
              }

          }
        },
        beforeDestroy() {
          if(this.t) { //如果定时器还在运行 或者直接关闭，不用判断
            clearInterval(this.t); //关闭
          }
        },
        destroyed(){
          window.removeEventListener("scroll",this.menu);
          window.removeEventListener('touchend',this.touchend);
        }
    }
</script>

<style>
 .my_scroller .weui-grid{
    padding: 15px 10px 5px 10px;
  }
  .row{
    background: white;
    padding: 10px;
  }
 .my_scroller .weui-grids:before,.my_scroller .weui-grid:before,.my_scroller .weui-grid:after{
   border: none;
 }
  .fix{
    position: fixed!important;
    top: -20px;
    z-index: 9;
  }
  .displaynone{
    display: none;
  }
  .icon-gengduo{
    color: #999!important;
  }
</style>
