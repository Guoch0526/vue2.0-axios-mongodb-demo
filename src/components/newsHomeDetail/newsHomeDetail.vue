<template>
  <div>
    <div v-html="targetObj.content" id="newsHomeDetail"></div>
    <toTop></toTop>
  </div>
</template>

<script>
    import toTop from '../toTop/toTop.vue';
    export default {
        data() {
            return {
              city: this.$route.path.substring(16,18),
              id: this.$route.path.substring(19),
              newsHomeDetail: {
                  'sz': this.szNewsHome,
                  'zs': this.zsNewsHome,
                  'hz': this.hzNewsHome
              }
            }
        },
        components: {
          toTop
        },
        props: {
          szNewsHome : {
            type: Array
          },
          zsNewsHome : {
            type: Array
          },
          hzNewsHome : {
            type: Array
          }
        },
        created() {
          this.$nextTick(() => {
            window.scrollTo(0, 0);
          });
        },
        computed: {
          targetObj: function() {
            for(let i=0; i<this.newsHomeDetail[this.city].length; i++) {
              if(this.newsHomeDetail[this.city][i]['id'] == parseInt(this.id)) {
                return this.newsHomeDetail[this.city][i];
              }
            }
          }
        }
    }

</script>

<style class="scoped">
  /*@import 'http://include.anjukestatic.com/aifang/res/2017030906/b/Daogou_Rdview.css';*/
  /*@import 'http://pages.anjukestatic.com/xinfang/baidushare/static/api/css/share_style0_32.css?v=4413acf0.css';*/
  #newsHomeDetail {
    margin: 30px 160px;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }

</style>
