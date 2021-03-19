<template>
    <div class="d-flex justify-content-center">
        <div 
            class="frame-container cursor-pointer" 
            :class="{'full-size': fullSize}"
            @click="$router.push({ name: 'Art', params: { punkId: punkId, frameId: frameId } })">
            <div 
                class="punk-container"
                :class="{'full-size': fullSize}">
                <img v-if="punkId" 
                    :src="'https://www.larvalabs.com/public/images/cryptopunks/punk' + punkId + '.png'"
                    class="punk image-rendering-pixelated"
                    :class="{'full-size': fullSize}"
                    >
            </div>
            <img 
                :src="'/' + frameId + '.png'"
                class="frame image-rendering-pixelated"
                :class="{'full-size': fullSize}"
                >
        </div>
    </div>
</template>

<script>

export default {
    props: {
        punkId: String,
        frameId: String,
        fullSize: {
            type: Boolean,
            default: false
        },
    },
}

</script>

<style scoped>

.frame-container {
    left: 50%;
    transform: translateX(-50%);
    position: relative; 
    display: block; 
    width: 180px;
    height: 180px;
}

.punk-container {
    position: relative; 
    display: block; 
    background-color: #638596;
    width: 125px;
    height: 125px;
    top: 25px;
    left: 25px;
}

.punk {
    position: relative;
    top: 5px;
    left: 5px;
    right: 0;
    width: 120px;
    height: 120px;
}

.frame {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 180px;
    height: 180px;
}

.full-size.frame-container {
    width: 360px;
    height: 360px;
}

.full-size.punk-container {
    width: 250px;
    height: 250px;
    top: 50px;
    left: 50px;
}

.full-size.punk {
    top: 10px;
    left: 10px;
    right: 0;
    width: 240px;
    height: 240px;
}

.full-size.frame {
    width: 360px;
    height: 360px;
}


</style>