<template>
  <div>
    <label v-for="(option, index) in options" :key="options +  index">
      <input type="radio" :value="option" :checked="modelValue === option" @input="update">
      <span>{{option}}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    'model-value': {
      type: String
    },
    'options': {
      type: Object,
      required: true
    }
  },
  methods: {
    update(event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
  label {
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  input {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }

  span {
    display: inline-block;
    border: 1px solid var(--darkgray);
    background-color: var(--gray);
    padding: 5px 10px;
  }

  label:first-child span {
    border-top-left-radius: var(--roundness);
    border-bottom-left-radius: var(--roundness);
  }

  label:last-child span {
    border-top-right-radius: var(--roundness);
    border-bottom-right-radius: var(--roundness);
  }

  input:checked + span {
    background-color: var(--green);
    color: var(--background-color);
  }
</style>