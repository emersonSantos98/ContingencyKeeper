import AccountContingency  from "../../api/AccountContingency/index"


export default class AccountContingencyService {

     constructor() {
        this.accountContingency = new AccountContingency();
     }
  

    async getAccountContingency() {
        try {
            const response = await this.accountContingency.getAccountContingency();
            return response;
        } catch (error) {
            throw new ErrorMessage().message(error, 'Erro ao buscar dados da conta de contingência');
        }

    }

    async createAccountContingency(data) {
        try {
            const response = await this.accountContingency.createAccountContingency(data);
            return response;
        } catch (error) {
            throw new ErrorMessage().message(error, 'Erro ao criar conta de contingência');
        }
    }
}