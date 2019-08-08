<template>
    <div>
        DASHBOARD
        <FeaturedBar>
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
        </FeaturedBar>
        <div>
            <div class="row">
                <div class="col-6">
                    <Report />
                </div>
                <div class="col-6">
                    <Report />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <Report />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <Report />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <Report />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <Report />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FeaturedBar from './FeaturedBar';
import FeaturedItem from './FeaturedItem';
import Report from './Report';

export default{
    name: 'Dashboard',
    components:{
        FeaturedBar,
        FeaturedItem,
        Report,
    }
}
</script>