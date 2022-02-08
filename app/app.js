const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputTaskName: '',
      inputTaskDesc: '',
      // taskValid: false
    }
  },
  computed: {
    taskValid() {
      return this.inputTaskName !== '';
    }
  },
  methods: {
    addTask() {

      // budget validation
      if (this.inputTaskName === '') return

      // create task object
      const task = {
        id: this.tasks.length,
        name: this.inputTaskName,
        desc: this.inputTaskDesc
      }

      // allow modal to close and add task to array
      this.taskValid = true;
      this.tasks.push(task);

      // todo: POST request

      // reset input fields
      this.inputTaskName = '';
      this.inputTaskDesc = '';
    }
  }
});

app.mount("#app");
