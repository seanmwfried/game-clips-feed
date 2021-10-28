<template>
  <div>
    <label>
      <input type="radio" value="off" :checked="modelValue === 'off'" @input="update">
      <span class="off">Off</span>
    </label>
    <label>
      <input type="radio" value="any" :checked="modelValue === 'any'" @input="update">
      <span class="any">Any</span>
    </label>
    <label>
      <input type="radio" value="on" :checked="modelValue === 'on'" @input="update">
      <span class="on">On</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    'model-value': {
      type: String,
      default: 'any'
    }
  },
  methods: {
    update(event){
      console.log(event.target.value);
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

  .off {
    border-top-left-radius: var(--roundness);
    border-bottom-left-radius: var(--roundness);
  }

  .on {
    border-top-right-radius: var(--roundness);
    border-bottom-right-radius: var(--roundness);
  }

  input:checked + span.off {
    background-color: var(--red);
  }

  input:checked + span.any {
    background-color: var(--lightgray);
    color: var(--background-color);
  }

  input:checked + span.on {
    background-color: var(--green);
    color: var(--background-color);
  }
</style>