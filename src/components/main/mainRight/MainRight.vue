<template>
  <div>
    <PersonalInformation/>
    <DynamicInformation/>
  </div>
</template>

<script>
  import PersonalInformation from "./PersonalInformation"
  import DynamicInformation from "./DynamicInformation"
  export default {
    name: 'MainRight',
    components: {
      PersonalInformation,
      DynamicInformation
    },
    created(){
      
    }
  }
</script>

<style scoped>

</style>
