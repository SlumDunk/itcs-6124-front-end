<template>
  <div>
    <MHeader :back="true">Task 3</MHeader>
    <div class="content">
      <div style="width: 20%;position: relative;text-align: center;float: left;margin-top: 10%;height:50%">
        <span>country:</span>
        <select v-model="url">
          <option value="CA" selected="selected">CA</option>
          <option value="DE">DE</option>
          <option value="FR">FR</option>
          <option value="GB">GB</option>
          <option value="US">US</option>
        </select>
      </div>
      <div id="svg" style="width:80%;float: left;text-align:center;height: 100%;overflow: auto;">
        <img ref="myImage" src="http://127.0.0.1:8000/image/?module=task3&file_name=category_trend_ca.png"
             style="max-width: 100%;max-height:100%;margin: auto;"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'

  export default {
    name: 'Task3',
    data() {
      return {
        url: 'CA'
      }
    },
    components: {MHeader},
    watch: {
      url(val) {
        console.log(val)
        if (val.endsWith('CA')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task3&file_name=category_trend_ca.png'
        } else if (val.endsWith('DE')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task3&file_name=category_trend_de.png'
        } else if (val.endsWith('FR')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task3&file_name=category_trend_fr.png'
        } else if (val.endsWith('GB')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task3&file_name=category_trend_gb.png'
        } else if (val.endsWith('US')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task3&file_name=category_trend_us.png'
        }
      }
    }
  }
</script>

<style scoped>

</style>
