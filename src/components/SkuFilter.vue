<template>
    <div>
        <SearchBar :form="form"></SearchBar>
        <div class="row">
            <div class="card col-4" >
                <div class="card-body">
                    <h3 class="card-title">Estab.</h3>
                    
                    <div class="form-group row">
                        <label for="filter" class="col-sm-4 col-form-label ">Meus Filtros</label>
                        <div class="col-sm-8">
                            <input type="text" id="filtro1" :value="form.filtro1" @input="update('filtro1', $event.target.value)" />
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
                            <input type="text" id="filtro2" :value="form.filtro2" @input="update('filtro2', $event.target.value)" />
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
                            <input type="text" id="filtro3" :value="form.filtro3" @input="update('filtro3', $event.target.value)" />
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
    name: 'SkuFilter',
    components: {
        SearchBar
    },
    data() {
        return {
            form: {
                filtro1: 'meu filtro a',
                filtro2: 'meu filtro b',
                filtro3: 'meu filtro c',
            }
        }
    },
    methods: {
        
        update: function(key, value) {
            this.$emit('input', { ...this.value, [key]: value })
        }
    }
}
</script>