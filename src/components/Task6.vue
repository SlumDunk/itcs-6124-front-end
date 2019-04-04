<template>
  <div>
    <MHeader :back="true">task 6</MHeader>
    <div class="content">
      <div id="svg"
           style="width:90%;float: left; margin-left: 10%;text-align:center;height: 100%;overflow: auto;position: relative;">
        <img src="http://127.0.0.1:8000/image/?module=task6&file_name=polarity_category.png"
             style="max-width: 100%;max-height: 100%;margin: auto;"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'

  export default {
    name: 'Task6',
    components: {MHeader}
  }
</script>

<style scoped>

</style>
