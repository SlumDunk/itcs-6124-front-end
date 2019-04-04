<template>
  <div>
    <MHeader :back="true">Task 5</MHeader>
    <div class="content">
      <span>ratio:</span>
      <div style="width: 20%;position: relative;text-align: center;float: left;margin-top: 10%;height:50%">
        <select v-model="url">
          <option value="comment&count" selected="selected">comment vs count</option>
          <option value="like&dislike">like vs dislike</option>
          <option value="views&dislike">views vs dislike</option>
          <option value="views&like">views vs like</option>
        </select>
      </div>
      <div id="svg" style="width:80%;float: left;text-align:center;height: 100%;overflow: auto;">
        <img ref="myImage" src="http://127.0.0.1:8000/image/?module=task5&file_name=comment_count_ratio.png"
             style="max-width: 100%;max-height:100%;margin: auto;"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'

  export default {
    name: 'Task5',
    data() {
      return {
        url: 'comment&count'
      }
    },
    components: {MHeader},
    watch: {
      url(val) {
        if (val.endsWith('comment&count')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task5&file_name=comment_count_ratio.png'
        } else if (val.endsWith('like&dislike')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task5&file_name=like_dislike_ratio.png'
        } else if (val.endsWith('views&dislike')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task5&file_name=views_dislike_ratio.png'
        } else if (val.endsWith('views&like')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task5&file_name=views_like_ratio.png'
        }
      }
    }
  }
</script>

<style scoped>

</style>
