<template>
  <div class="wrapper">
     <div class="snow layer1 a"></div>
     <div class="snow layer1"></div>
     <div class="snow layer2 a"></div>
     <div class="snow layer2"></div>
     <div class="snow layer3 a"></div>
     <div class="snow layer3"></div>
</div>
</template>

<script>
export default {
  name: 'Snowfall'
}
</script>

<style lang="scss" scoped>
// Snow effect credit goes to https://redstapler.co/pure-css-snow-fall-effect/

$number-of-snowflakes: 150;
$snowflake-large-diameter: 0.8rem;
$snowflake-medium-diameter: 0.5rem;
$snowflake-small-diameter: 0.3rem;

.wrapper {
    width:100vw;
    height:100vh;
    position: fixed;
}

$s1:"";
$s2:"";
$s3:"";
@for $i from 1 through 150 {
    $s1: $s1 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
    $s2: $s2 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
    $s3: $s3 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
    @if $i < 150 {
        $s1: $s1 + ",";
        $s2: $s2 + ",";
        $s3: $s3 + ",";
    }
}
.snow {
    border-radius: 50%;
    opacity: 0.8;
    position: absolute;
    top:-100vh;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.layer1 {
    width: $snowflake-large-diameter;
    height: $snowflake-large-diameter;
    filter:blur(.5px);
    box-shadow: #{$s1};
    animation-duration: 6s;
}
.layer1.a {
    animation-delay: -3s;
}
.layer2 {
    width: $snowflake-medium-diameter;
    height: $snowflake-medium-diameter;
    filter:blur(1px);
    box-shadow: #{$s2};
    animation-duration: 8s;
}
.layer2.a {
    animation-delay: -4s;
}
.layer3 {
    width: $snowflake-small-diameter;
    height: $snowflake-small-diameter;
    filter:blur(3px);
    box-shadow: #{$s3};
    animation-duration: 10s;
}
.layer3.a {
    animation-delay: -5s;
}
@keyframes fall {
    100% {transform: translateY(200vh); }
}
</style>
