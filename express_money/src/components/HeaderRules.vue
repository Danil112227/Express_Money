<template>
    <div>
        <v-list-item-title>
            {{privacy}}<br>
            {{security}}
        </v-list-item-title>
    </div>
</template>

<script>
export default {
    props: {
        privacy: String,
        security: String,
    }
}
</script>