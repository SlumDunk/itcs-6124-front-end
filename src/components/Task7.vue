<template>
  <div>
    <MHeader :back="true">Task 7</MHeader>
    <div class="content">
      <div style="width: 20%;position: relative;text-align: center;float: left;margin-top: 10%;height:50%">
        <span>category:</span>
        <select v-model="url">
          <option value="Music" selected="selected">Music</option>
          <option value="Entertainment">Entertainment</option>
          <option value="People & Blog">People & Blog</option>
          <option value="Howto & Style">Howto & Style</option>
          <option value="Sports">Sports</option>
          <option value="Comedy">Comedy</option>
          <option value="Gaming">Gaming</option>
          <option value="Film & Animation">Film & Animation</option>
          <option value="News & Politics">News & Politics</option>
          <option value="Science & Technology">Science & Technology</option>
          <option value="Education">Education</option>
          <option value="Pets & Animals">Pets & Animals</option>
          <option value="Autos & Vehicles">Autos & Vehicles</option>
          <option value="Travel & Events">Travel & Events</option>
          <option value="Nonprofits & Activism">Nonprofits & Activism</option>
        </select>
      </div>
      <div id="svg" style="width:80%;float: left;text-align:center;height: 100%;overflow: auto;">
        <img ref="myImage" src="http://127.0.0.1:8000/image/?module=task7&file_name=word_count_np.png"
             style="max-width: 100%;max-height:100%;margin: auto;"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader'

  export default {
    name: 'Task7',
    data() {
      return {
        url: 'Music'
      }
    },
    components: {MHeader},
    watch: {
      url(val) {
        console.log(val)
        if (val.endsWith('Music')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_music.png'
        } else if (val.endsWith('Entertainment')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_entertainment.png'
        } else if (val.endsWith('People & Blog')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_pb.png'
        } else if (val.endsWith('Howto & Style')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_hs.png'
        } else if (val.endsWith('Film & Animation')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_fa.png'
        } else if (val.endsWith('News & Politics')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_np.png'
        } else if (val.endsWith('Science & Technology')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_st.png'
        } else if (val.endsWith('Education')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_education.png'
        } else if (val.endsWith('Pets & Animals')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_pa.png'
        } else if (val.endsWith('Autos & Vehicles')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_av.png'
        } else if (val.endsWith('Travel & Events')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_te.png'
        } else if (val.endsWith('Nonprofits & Activism')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_na.png'
        } else if (val.endsWith('Gaming')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_gaming.png'
        } else if (val.endsWith('Comedy')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_comedy.png'
        } else if (val.endsWith('Sports')) {
          this.$refs.myImage.src = 'http://127.0.0.1:8000/image/?module=task7&file_name=word_count_sports.png'
        }
      }
    }
  }
</script>

<style scoped>

</style>
