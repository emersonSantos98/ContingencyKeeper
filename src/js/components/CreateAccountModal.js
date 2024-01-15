// src/js/Modal.js
export default function Modal() {
  return `
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Adicionar uma conta</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form>
                       <div class="row col-12">
                       <div class="col-4 mb-3">
                       <label for="accountName" class="form-label">Nome da Conta ou Empresa</label>
                       <input type="text" class="form-control" id="accountName">
                   </div>
                   <div class="col-4 mb-3">
                       <label for="email" class="form-label">Email</label>
                       <input type="email" class="form-control" id="email">
                   </div>
                   <div class="col-4 mb-3">
                       <label for="password" class="form-label">Senha</label>
                       <input type="password" class="form-control" id="password">
                   </div>
                   <div class="col-4 mb-3">
                   <label for="email" class="form-label">Tipo de conta</label>
                   <select class="form-select form-select mb-3" aria-label="select example">
                     <option selected>Selecione</option>
                         <option value="1">Tik Tok ADS</option>
                          <option value="2">Facebook ADS</option>
                         <option value="3">Google ADS</option>
                         </select>
                   </div> 
                   <div class="col-3 mb-3">
                   <label for="email" class="form-label">Status</label>
                   <select class="form-select form-select mb-3" aria-label="select example">
                     <option selected>Selecione</option>
                         <option value="1">Nova</option>
                          <option value="2">Banida</option>
                         <option value="3">Análise</option>
                         </select>
                   </div>  


                    </form>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
