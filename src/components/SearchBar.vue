<template>
    <div>
        <div class="row align-items-center title-bar">
            <div class="col-6">
                <h2>Dashboard</h2>
            </div>
            <div class="col-6 text-right">
                <form v-on:submit="onSubmit" action="#">
                    <div class="form-group row">
                        <label for="filter" class="col-sm-6 col-form-label text-right">Meus Filtros</label>
                        <div class="col-sm-6">
                            <input type="text" id="filter" v-model="search" />
                            <button type="submit" class="btn btn-primary mb-2">Pesquisar</button>
                        </div>
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