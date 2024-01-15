import axios from '../../libs/axios';
import { CustomError } from '../../libs/error';


export default class AccountContingency {


    async getAccountContingency() {
        try {
            const response = await axios.get('/api/accounts');
            return response.data;
        } catch (error) {
            throw new CustomError().message(error, 'Erro ao buscar dados da conta de contingência');
        }
    }

    async updateAccountContingency(data) {
        try {
            const response = await axios.put('/account-contingency', data);
            return response.data;
        } catch (error) {
            throw new CustomError().message(error, 'Erro ao atualizar dados da conta de contingência');
        }
    }

    async createAccountContingency(data) {
        try {
            const response = await axios.post('/account-contingency', data);
            return response.data;
        } catch (error) {
            throw new CustomError().message(error, 'Erro ao criar dados da conta de contingência');
        }
    }

    async deleteAccountContingency() {
        try {
            const response = await axios.delete('/account-contingency');
            return response.data;
        } catch (error) {
            throw new CustomError().message(error, 'Erro ao deletar dados da conta de contingência');
        }
    }
}