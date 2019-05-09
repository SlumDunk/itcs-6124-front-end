<template>
  <div>
    <MHeader :back="true">Wiki Space</MHeader>
    <div class="content">
      <div style="width: 20%;position: relative;text-align: center;float: left;margin-top: 10%;height:50%">
        <span>time slot:</span>
        <select v-model="url">
          <option value="slot_1" selected="selected">2013-01-01~2013-02-01</option>
          <option value="slot_2">2013-02-01~2013-03-01</option>
          <option value="slot_3">2013-03-01~2013-04-01</option>
          <option value="slot_4">2013-04-01~2013-05-01</option>
          <option value="slot_5">2013-05-01~2013-06-01</option>
          <option value="slot_6">2013-06-01~2013-07-01</option>
          <option value="slot_7">2013-07-01~2013-08-01</option>
          <option value="slot_8">2013-08-01~2013-09-01</option>
          <option value="slot_9">2013-09-01~2013-10-01</option>
          <option value="slot_10">2013-10-01~2013-11-01</option>
          <option value="slot_11">2013-11-01~2013-12-01</option>
          <option value="slot_12">2013-12-01~2014-01-01</option>
          <option value="slot_13">2014-01-01~2014-02-01</option>
          <option value="slot_14">2014-02-01~2014-03-01</option>
          <option value="slot_15">2014-03-01~2014-04-01</option>
          <option value="slot_16">2014-04-01~2014-05-01</option>
          <option value="slot_17">2014-05-01~2014-06-01</option>
          <option value="slot_18">2014-06-01~2014-07-01</option>
          <option value="slot_19">2014-07-01~2014-08-01</option>
        </select>
      </div>
      <div id="svg" style="width:80%;float: left;text-align:center;height: 100%;overflow: auto;">
        <img ref="myImage" src="http://127.0.0.1:8000/image/?module=wiki&file_name=2013-01-01_2013-02-01.png"
             style="max-width: 100%;max-height:100%;margin: auto;"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'

  export default {
    name: 'Wiki',
    data() {
      return {
        url: 'slot_1'
      }
    },
    components: {MHeader},
    watch: {
      url(val) {
        if (val.endsWith('slot_1')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-01-01_2013-02-01.png'
        } else if (val.endsWith('slot_2')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-02-01_2013-03-01.png'
        } else if (val.endsWith('slot_3')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-03-01_2013-04-01.png'
        } else if (val.endsWith('slot_4')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-04-01_2013-05-01.png'
        } else if (val.endsWith('slot_5')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-05-01_2013-06-01.png'
        } else if (val.endsWith('slot_6')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-06-01_2013-07-01.png'
        } else if (val.endsWith('slot_7')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-07-01_2013-08-01.png'
        } else if (val.endsWith('slot_8')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-08-01_2013-09-01.png'
        } else if (val.endsWith('slot_9')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-09-01_2013-10-01.png'
        } else if (val.endsWith('slot_10')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-10-01_2013-11-01.png'
        } else if (val.endsWith('slot_11')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-11-01_2013-12-01.png'
        } else if (val.endsWith('slot_12')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2013-12-01_2014-01-01.png'
        } else if (val.endsWith('slot_13')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2014-01-01_2014-02-01.png'
        } else if (val.endsWith('slot_14')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2014-02-01_2014-03-01.png'
        } else if (val.endsWith('slot_15')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2014-03-01_2014-04-01.png'
        } else if (val.endsWith('slot_16')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2014-04-01_2014-05-01.png'
        } else if (val.endsWith('slot_17')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2014-05-01_2014-06-01.png'
        } else if (val.endsWith('slot_18')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2014-06-01_2014-07-01.png'
        } else if (val.endsWith('slot_19')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=wiki&file_name=2014-07-01_2014-08-01.png'
        }
      }
    }
  }
</script>

<style scoped>

</style>
