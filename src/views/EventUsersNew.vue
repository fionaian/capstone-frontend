<!-- <template>
  <div class="container">
    <h1>New Photo</h1>
    <form v-on:submit.prevent="createEventUser()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Event ID:
      <input type="text" v-model="newEventID" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newEventID: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createEventUser: function() {
      var params = {
        name: this.newPhotoName
      };
      axios
        .post("/api/event_users" + event.id, params)
        .then(response => {
          this.$router.push("/event_users");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
 -->
