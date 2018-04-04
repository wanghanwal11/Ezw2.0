<template>
  <div style="height: 100%">
    <div class="header" @touchmove.prevent>
      <div style="height: 25px;background:#2989ff;width: 100%;position: fixed;top: 0;z-index: 99"></div>
    </div>
    <div @touchmove.prevent style="width: 100%">
        <x-header style="background: #2989ff;width: 100%;margin-top: 25px">
          <div slot="overwrite-left" style="color: black;display: -webkit-box;">
            <div class="iconfont icon-icon_arrow_left" style="font-size: 20px;color: white" @click="goback"></div>
          </div>
          <div style="color: white">网格化</div>
        </x-header>
        <shaixuan @click="click" :class="{'fixed':fixed}" style="width: 100%" :items="items">
          <div style="width: 100px;line-height: 35px;text-align: center;color: red" @click="cehua">筛选→</div>
        </shaixuan>
    </div>
    <div  class="my_scroller" style="position: relative;padding-top: 10px" >
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
        <div style="padding: 0 20px;display: -webkit-box;background: #f8f8f8">
          <div style="-webkit-box-flex: 1; padding: 5px 0px; padding-right: 10px;">
            <div style="line-height: 30px;">紧急事件--已转办</div>
            <div style="font-size: 14px;padding-bottom: 5px;color: #999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料</div>
          </div>
          <div style="width: 50px" v-if="false">
            11
          </div>
        </div>
        <div style="padding: 0 20px 0px 20px;"><div style="font-size: 14px;color: #999;line-height: 30px;">来源:111</div></div>
      </div>
      <div class="pounp" :class="{'fixed1':fixed}" >
        <pounp ref="pounp">
          <group>
            <radio  :options="options" @on-change="change"></radio>
          </group>
        </pounp>
      </div>
    </div>
    <div class="cehua" v-swipeleft="{fn:vuetouch,name:'swipeleft'}">
      <popup v-model="show9" position="right" @on-hide="onhide" >
        <div style="width:300px;">
          <div  class="my_scroller" style="position: relative;min-height: 668px;padding-top: 10px" >
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
              <div style="padding: 0 20px;display: -webkit-box;background: #f8f8f8">
                <div style="-webkit-box-flex: 1; padding: 5px 0px; padding-right: 10px;">
                  <div style="line-height: 30px;">紧急事件--已转办</div>
                  <div style="font-size: 14px;padding-bottom: 5px;color: #999;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料燃烧原料</div>
                </div>
                <div style="width: 50px" v-if="false">
                  11
                </div>
              </div>
              <div style="padding: 0 20px 0px 20px;"><div style="font-size: 14px;color: #999;line-height: 30px;">来源:111</div></div>
            </div>
            <div class="pounp" :class="{'fixed1':fixed}" >
              <pounp ref="pounp">
                <group>
                  <radio  :options="options" @on-change="change"></radio>
                </group>
              </pounp>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import {XHeader,Group,Radio,Badge,Popup} from 'vux'
  import pounp from '@/components/pounp'
  import shaixuan from '@/components/shaixuan'
  export default {
    mounted(){
      window.addEventListener('scroll',this.menu)
    },
    data () {
      return {
        show7: false,
        show9: false,
        fixed:false,
        options:[],
        scrollTop:0,
        swipeleft:'auto',
        items:[{title:"事件类型",type:"sjlx",arr:["阿斯顿","发发发"]},{title:"事件状态",type:"sjzt",arr:["新镇村","王企鹅"]}],
      }
    },
    components: {pounp,shaixuan,XHeader,Group,Radio,Badge,Popup},
    methods: {
      goback(){
        this.$router.go(-1)
      },
      cehua(){
        this.show9=true;
        document.getElementsByTagName("body")[0].style.overflow='hidden'
        this.scrollTop=0
      },
      onhide(){
        document.getElementsByTagName("body")[0].style.overflow='inherit'
      },
      click(item){
          this.type=item.type;
          this.options=item.arr
          this.$refs.pounp.shows()
      },
      change(i,s){
        for (let value of this.items) {
          if(this.type==value.type){
            value.title=s
          }
        }
        this.$refs.pounp.hide()
      },
      menu(){
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(this.scrollTop>=46){
          this.fixed=true
        }else{
          this.fixed=false
        }
      },
      vuetouch(s,e){
          this.swipeleft=e
      }
    }
  }
</script>

<style>
  .pounp{
    position: absolute;top:0;width: 100%;height: 100%
  }
  .pounp .vux-no-group-title{
    margin-top: 0;
  }
  .weui-cells:before,.weui-cell:before{
    border: none!important;
  }
  .fixed{
     position: fixed!important;
     top: 25px;
     z-index: 9;
   }
  .fixed1{
    position: fixed!important;
    top: 62px;
    z-index: 9;
  }
  .vux-popup-mask{
    top:25px!important;
  }
  .cehua .vux-popup-dialog.vux-popup-right{
    top:25px;
  }
</style>
