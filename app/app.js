const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTaskName: "",
      inputTaskDesc: "",

    };
  },
  computed: {
    taskValid() {
      return this.inputTaskName !== "";
    },
  },
  methods: {
    addTask() {
      // budget validation
      if (this.inputTaskName === "") return;

      // create task object
      const task = {
        name: this.inputTaskName,
        desc: this.inputTaskDesc,
      };
      
      // Add new task to db
      axios({
        method: 'post',
        url: '/api/tasks',
        data: task
      }).then((res) => {
        console.log(res);

        // Add returned id to task object and push to list
        task._id = res.data;
        this.tasks.push(task);
      });

      // reset input fields
      this.inputTaskName = "";
      this.inputTaskDesc = "";
    },
  },
  created() {
    // Get all tasks from db
    axios
      .get('/api/tasks')
      .then(res => {
        console.log(res);
        this.tasks = res.data;
      });
  }
});

app.mount("#app");
