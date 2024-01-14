
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Modal from './components/CreateAccountModal';
import Navbar from './components/Navbar';
import Table from './components/Table';

document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModalButton');
    const modalContainer = document.getElementById('modalContainer');
    const navbarContainer = document.getElementById('navbarContainer');

    openModalButton.addEventListener('click', function () {
        const modal = Modal();
        modalContainer.innerHTML = modal;

        // Initialize the Bootstrap modal
        const bootstrapModal = new bootstrap.Modal(document.getElementById('myModal'));
        bootstrapModal.show();
    });

    navbarContainer.innerHTML = Navbar();
    tableContainer.innerHTML = Table();
});
