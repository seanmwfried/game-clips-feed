<template>
  <!-- Use optgroups if present -->
  <select v-if="usesGroups" :value="modelValue" @input="update">
    <optgroup v-for="group in options" :key="group.label" :label="group.label">
      <option v-for="option in group.options" :key="option" :value="option">{{option}}</option>
    </optgroup>
  </select>
  <!-- Else, just loop through and display options -->
  <select v-else :value="modelValue" @input="update">
    <option v-for="option in options" :key="option" :value="option">{{option}}</option>
  </select>
</template>

<script>
/*
 * This component can be loaded with options data in two ways
 *
 * For a simple select with only options, pass an array of strings to the options prop:
 * options = ['banana', 'pear', 'strawberry']
 * 
 * For a select that uses optgroups, pass an array of objects that contain a label and an array as follows:
 * options = [
 *    {
 *      label: "Fruit",
 *      options: ['banana', 'pear', 'strawberry']
 *    },
 *    {
 *      label: "Vegetables",
 *      options: ['corn', 'broccoli', 'pizza']
 *    }
 * ]
 * 
 *  This is done by type checking the first element in the array to see if it's a string or object
 */
export default {
  props: {
    'model-value': {
      type: String
    }, 
    'options': {
      type: Array
    }
  },

  computed: {
    usesGroups: function() {
      return typeof(this.options[0]) === 'object';
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
  select {
    padding: 5px;
    border-radius: var(--roundness);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 1.1em;
    background-color: var(--gray);
    color: var(--foreground-color);
  }
</style>