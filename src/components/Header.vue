<template>
    <nav class="navbar pln-bg-color-primary d-flex justify-content-between">
        <div class="d-flex justify-content-start">
            <nav class="navbar pln-bg-color-primary">
                <span class="navbar-toggler-icon"></span>
                <span>MENU</span>
            </nav>
        </div>
        <div>
            <img src="../assets/logo-planexo-white.png" width="120" />
        </div>
        <span class="d-flex justify-content-end">
            <a  href="#">Sair</a>
        </span>
    </nav>
</template>

<script>
export default{
    name: 'Header'
}
</script>

<style scoped>
.navbar {
    padding-top: 2px;
    padding-bottom: 2px;
}
</style>
