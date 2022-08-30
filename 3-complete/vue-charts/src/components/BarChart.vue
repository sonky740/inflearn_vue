<template>
  <canvas ref="myChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: ['propsdata'],
  mounted() {
    new this.$_Chart(this.$refs.myChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style></style>
