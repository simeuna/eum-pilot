<template>
    <div class="realtime">
        <br>
        <div class="center">
            <b-progress height="2rem" :value="counter" :max="max" show-progress animated></b-progress>
            <b-button class="mt-3" @click="clicked">Click me</b-button>
        </div>
        <br>
        <div>
            <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                        <b-card title="Throughput" sub-title="">
                            <b-card-text>
                                <div class="small">
                                   <highcharts :options="chartOptions"></highcharts>
                                </div>
                            </b-card-text>

                            <b-card-text>
                                <b-row>
                                    <b-col class="center"><strong style="font-size: 40px;">0.00 Mbps</strong></b-col>
                                    <b-col>0.00 pps<br>Total 147083 Bytes<br>Total 98 pkts</b-col>
                                </b-row>
                            </b-card-text>

                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card title="Page Response Time" sub-title="">
                            <b-card-text>
                                <img alt="Vue logo" src="../assets/logo.png">
                            </b-card-text>

                            <b-card-text>
                                <b-row>
                                    <b-col class="center"><strong style="font-size: 40px;">0.00 Mbps</strong></b-col>
                                    <b-col>0.00 pps<br>Total 147083 Bytes<br>Total 98 pkts</b-col>
                                </b-row>
                            </b-card-text>

                        </b-card>
                    </b-col>
                    <b-col>
                        <b-card title="TCP Error" sub-title="">
                            <b-card-text>
                                <img alt="Vue logo" src="../assets/logo.png">
                            </b-card-text>

                            <b-card-text>
                                <b-row>
                                    <b-col class="center"><strong style="font-size: 40px;">0.00 Mbps</strong></b-col>
                                    <b-col>0.00 pps<br>Total 147083 Bytes<br>Total 98 pkts</b-col>
                                </b-row>
                            </b-card-text>

                        </b-card>
                    </b-col>
                </b-row>

            </b-container>
        </div>
    </div>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
    data() {
        return {
            counter: 45,
            max: 100,
            chartOptions: {
                series: [{
                    data: [1,2,3] // sample data
                }]
            }
        }
    },
    methods: {
        clicked(){
            this.counter = Math.random() * this.max
        },
      
    },
    components: {
        hicharts: Chart
    }
}
</script>

<style scoped>
.center {
    text-align: center;
}

.bv-example-row {
        max-width: none;
}
.small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>
