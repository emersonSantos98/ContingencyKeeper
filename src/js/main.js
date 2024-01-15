import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Modal from './components/CreateAccountModal';
import Navbar from './components/Navbar';
import TableView from './components/Table';
import AccountContingencyService from '../services/AccountContingencyService/index.js';

document.addEventListener('DOMContentLoaded', async function () {
    const openModalButton = document.getElementById('openModalButton');
    const modalContainer = document.getElementById('modalContainer');
    const navbarContainer = document.getElementById('navbarContainer');
    const tableContainer = document.getElementById('tableContainer');

    const accountContingencyService = new AccountContingencyService();
    const accountData = await accountContingencyService.getAccountContingency();

    openModalButton.addEventListener('click', function () {
        const modal = Modal();
        modalContainer.innerHTML = modal;

        // Inicialize o modal do Bootstrap
        const bootstrapModal = new bootstrap.Modal(document.getElementById('myModal'));
        bootstrapModal.show();
    });

    navbarContainer.innerHTML = Navbar();

    const tableView = new TableView('tableContainer');
    tableView.renderTable(accountData);
});
