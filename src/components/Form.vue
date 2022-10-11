<template>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form class="contact-form" @submit.prevent="sendData">
      <h5 class="title font-weight-bold">My Form</h5>
      <p class="description">Please fill in the form below:</p>
      <div>
        <input type="text" class="form-control rounded border-white form-input" id="title" v-model="formData.title"
          placeholder="Title" :maxlength="maxTitleLength" required>
        <p class="text-left mt-1 used-chars-txt"
          :class="formData.title.length == maxTitleLength ? 'text-danger' : 'text-secondary'">Used characters:
          {{ formData.title.length}} / {{maxTitleLength}}
        </p>
      </div>
      <div>
        <textarea id="text" class="form-control rounded border-white form-text-area" rows="5" cols="30"
          placeholder="Text" v-model="formData.text" :maxlength="maxTextLength" required></textarea>
        <p class="text-left mt-1 used-chars-txt"
          :class="formData.text.length == maxTextLength ? 'text-danger' : 'text-secondary'">Used characters:
          {{formData.text.length}} / {{maxTextLength}}
        </p>
      </div>
      <div>
        <input type="text" onfocus="(this.type='date')" class="form-control rounded border-white mb-3 form-input"
          v-model="formData.date" placeholder="Date" required>
      </div>
      <div>
        <button class="btn custom-btn-primary" type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    rowToUpdate: {
      type: Object,
    }
  },
  data() {
    return {
      maxTextLength: 300,
      maxTitleLength: 100,
      formData: {
        text: '',
        title: '',
        date: null
      }
    };
  },
  watch: {
    /* Watch when a row is selected by the row index */
    'rowToUpdate.rowIndex': {
      deep: true,
      handler: function (rowIndex) {
        if (rowIndex != -1) {
          this.formData.title = this.rowToUpdate.data.title;
          this.formData.text = this.rowToUpdate.data.text;
          this.formData.date = this.rowToUpdate.data.date;
        }
      }
    }
  },
  methods: {
    /* Send data to parent component "Details.vue" */
    sendData() {
      this.$emit('dataForm', {
        text: this.formData.text,
        title: this.formData.title,
        date: this.formData.date
      }, this.rowToUpdate.rowIndex != -1 ? this.rowToUpdate.rowIndex : -1);

      this.clearForm();
    },

    clearForm() {
      this.formData.title = '';
      this.formData.text = '';
      this.formData.date = null;
      this.rowToUpdate.rowIndex = -1;
      this.rowToUpdate.data = null;
    }
  }
}
</script>

<style>
.contact-form-wrapper {
  /* padding: 100px 0; */
}

.contact-form {
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 400px;
}

.contact-form .title {
  text-align: center;
  font-size: 24px;
}

.contact-form .description {
  color: #70787e;
  font-size: 14px;
  text-align: center;
}

.contact-form .used-chars-txt {
  font-size: .875rem;
  margin-left: 5px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: #f0f4f5;
  height: 50px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: #f0f4f5;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: #aeb4b9;
  font-weight: 500;
}
</style>