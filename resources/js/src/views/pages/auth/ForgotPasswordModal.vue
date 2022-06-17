<template>
    <!-- Modal -->
        <div class="modal" id="animation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel6" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <div class="w-100">
                        <h2 class="modal-title text-text-bold-600 text-center mt-1 mb-1" id="cal-modal">
                            Восстановление пароля
                        </h2>
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form>
                    <div class="modal-body">
                        <form @submit.prevent="handleSubmit" class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-icon">Mobile</label>
                                            <div class="position-relative has-icon-left">
                                                <input type="number" v-model="phone" id="contact-info-icon" class="form-control" name="phone" placeholder="+998 XX XXX-XX-XX">
                                                <div class="form-control-position">
                                                    <i class="feather icon-smartphone"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="block btn btn-primary mr-1 mb-1">Отправить</button>
                                    </div>
                                    <div class="col-12">
                                        <button type="button" class="block btn btn-flat-secondary text-dark">Зарегистрироваться</button>
                                        <button type="button" class="block btn btn-flat-secondary text-dark">Уже зарегистрирован</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </form>
            </div>    
        </div>
        </div>
    <!-- Basic Modals end -->
</template>


<script>
export default {
    data() {
        return {
            phone: '',
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.phone);
        }
    },
}
</script>