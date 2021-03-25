<template>
    <div class="flex justify-center items-center">
        
        <div 
            class="frame-container" 
            :class="{
                'full-size': fullSize,
                'cursor-pointer': allowClick
            }"
            @click="allowClick && $router.push({ name: 'Art', params: { punkId: punkId, frameId: frameId } })">
            <div 
                class="punk-container"
                :class="{'full-size': fullSize}">
                <img 
                    :src="(punkId === null) ? '/placeholder.png' : 'https://www.larvalabs.com/public/images/cryptopunks/punk' + punkId + '.png'"
                    class="punk image-rendering-pixelated"
                    :class="{'full-size': fullSize}"
                    >
            </div>
            <span 
                class="placeholder-text font-bold whitespace-nowrap"
                :class="{'full-size': fullSize}"
                v-if="punkId === null">Your Punk Here</span>
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
        punkId: {
            String,
            default: false
        },
        frameId: String,
        fullSize: {
            type: Boolean,
            default: false
        },
        allowClick: {
            type: Boolean,
            default: false
        },
    },
}

</script>

<style scoped>

.frame-container {
    position: relative; 
    display: block; 
    width: 180px;
    height: 180px;
}

.punk-container {
    position: relative; 
    display: block; 
    background-color: #638596;
    width: 120px;
    height: 120px;
    top: 30px;
    left: 30px;
}

.punk {
    position: relative;
    top: 0px;
    left: 0px;
    right: 0;
    width: 120px;
    height: 120px;
}

.frame {
    position: absolute;
    top: 1px;
    left: 0;
    right: 0;
    width: 180px;
    height: 180px;
}

.placeholder-text {
    position: absolute;
    left: 35px;
    top: 92px;
    transform: rotate(-45deg);
    background-color:rgba(255, 255, 255, 0.8);
    font-size: .85rem;
    line-height: 1.75rem;
    padding: 0.25rem 1.55rem;
}

.full-size.placeholder-text {
    position: absolute;
    left: 108px;
    top: 206px;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0.5rem 3rem;
}

.full-size.frame-container {
    width: 360px;
    height: 360px;
}

.full-size.punk-container {
    width: 240px;
    height: 240px;
    top: 60px;
    left: 60px;
}

.full-size.punk {
    top: -1px;
    left: -1px;
    width: 241px;
    height: 241px;
}

.full-size.frame {
    width: 360px;
    height: 360px;
}


</style>