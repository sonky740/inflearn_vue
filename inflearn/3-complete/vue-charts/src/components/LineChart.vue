<template>
  <canvas ref="myChart"></canvas>
</template>

<script>
export default {
  mounted() {
    new this.$_Chart(this.$refs.myChart, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
      options: {},
    });
  },
};
</script>

<style></style>
