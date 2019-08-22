<template>
    <div>
        <div class="row align-items-center title-bar">
            <div class="col-6">
                <h2>Dashboard</h2>
            </div>
            <div class="col-6">
                <form v-on:submit="onSubmit" action="#" class="form-inline justify-content-end">
                    <div class="form-group">
                        <label for="filter" class="col-form-label">Meus Filtros</label>
                        <input type="text" id="filter" class="pln-form-control form-control ml-2" v-model="search" />
                        <button type="submit" class="pln-btn pln-btn-primary ml-1">Pesquisar</button>
                    </div>
                </form>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
import { router } from '../main';

export default {
    name: 'SearchBar',
    data() {
        return { search: 'teste',}
    },
    props: [ 'form', 'formAction' ],
    methods: {
        onSubmit: function() {
            console.log("formulario: ", this.form.filtro1 );
            console.log("event: ", this.search);

            //router.push('/sku')
            router.push({ name: this.formAction, params: this.form }) 
        }
    }
};
</script>

<style scoped>
    .title-bar{
        min-height: 100px;
    }
</style>