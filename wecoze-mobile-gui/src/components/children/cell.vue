<template>
  <div class="weui-cell weui-cell_access">
    <div class="weui-cell__hd"><img :src="icon"></div>
    <div class="weui-cell__bd">
      <p>{{text}}</p>
    </div>
    <span class="weui-cell__ft" v-if="more"></span>
  </div>
</template>

<script>
  export default {
    name: 'cell',
    props: {
      icon: {
        type: String,
        default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII='
      },
      text: {
        type: String,
        default: ''
      },
      small: {
        type: Boolean,
        default: false
      },
      more: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .weui-cell__hd img {
    width: 20px;
    margin-right: 5px;
    display: block
  }
</style>
