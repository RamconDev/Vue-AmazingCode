<script setup>
	defineProps({
		note: Object
	});
</script>

<template>
	<article class="note-card">
		<input type="text" class="card-title" v-model="note.title">
		<input type="checkbox" v-model="note.marked">
	</article>
</template>

<style scoped>
	.note-card {
		border: 1px solid grey;
		border-radius: 8px;
		padding: 12px 15px;
		display: flex;
		align-items: center;
		input[type="text"] {
			border: none;
			appearance: none;
			&:focus {
				border: none;
				appearance: none;
				outline: none;
			}
		}
	}
</style>