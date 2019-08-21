<template>
    <div>
        <SearchBar :form="form"  formAction="suggest"></SearchBar>

        <div class="row">
            <div class="card col-4" >
                <div class="card-body">
                    <h3 class="card-title">Estab.</h3>
                    
                    <div class="form-group row">
                        <label for="filter" class="col-sm-4 col-form-label ">Meus Filtros</label>
                        <div class="col-sm-8">
                            <input type="text" id="filtro1" v-model="form.filtro" />
                        </div>
                    </div>       
                </div>
            </div>
            <div class="card col-4" >
                <div class="card-body">
                    <h3 class="card-title">Status.</h3>
                    
                    <div class="form-group row">
                        <label for="filter" class="col-sm-4 col-form-label ">Meus Filtros</label>
                        <div class="col-sm-8">
                            <input type="text" id="filtro2" v-model="form.filtro2" /> 
                        </div>
                    </div>       
                </div>
            </div>
            <div class="card col-4" >
                <div class="card-body">
                    <h3 class="card-title">Status.</h3>
                    
                    <div class="form-group row">
                        <label for="filter" class="col-sm-4 col-form-label ">Meus Filtros</label>
                        <div class="col-sm-8">
                            <input type="text" id="filtro3" v-model="form.filtro3"/>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar';

export default{
    name: 'SuggestFilter',
    components: {
        SearchBar
    },
    data() {
        return {
            form: {
                filtro: 'meu filtro',
                filtro2: 'meu filtro b',
                filtro3: 'meu filtro c',
            }
        }
    },
    methods: {
        
    }
}
</script>