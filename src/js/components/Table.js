// src/js/TableView.js
export default class TableView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    renderTable(data) {
        const tableHTML = this.generateTableHTML(data);
        this.container.innerHTML = tableHTML;
        this.addEventListeners();
    }

    generateTableHTML(data) {
        // Gere o HTML da tabela com base nos dados
        // Este é apenas um exemplo simples, ajuste conforme necessário
        return `
            <table class="table table-striped table-hover table-bordered">
                <thead class="table-dark">
                    <tr>
                    <th>Tipo de Conta</th>
                        <th>Nome da Conta</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Status</th>
                        <th>Criado em</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.generateRowsHTML(data)}
                </tbody>
            </table>
        `;
    }

    generateRowsHTML(data) {
        // Gere as linhas da tabela com base nos dados
        // Este é apenas um exemplo simples, ajuste conforme necessário
        return data.map(account => `
            <tr>
                <td>${account.accountType}</td>
                <td>${account.accountName}</td>
                <td>
                    <span class="email" data-email="${account.email}">${account.email}</span>
                    <i class="bi bi-clipboard copy-icon" data-action="copy-email" style="font-size: rem; color: cornflowerblue;" data-toggle="tooltip" data-placement="top" title="Copiar Email"></i>
                </td>
                <td>
                    <span class="password-mask" data-password="${account.password}">•••••••</span>
                    <i class="bi bi-clipboard copy-icon" data-action="copy-password" style="font-size: rem; color: cornflowerblue;" data-toggle="tooltip" data-placement="top" title="Copiar Senha"></i>
                    <i class="bi bi-eye password-toggle" style="font-size: rem; color: cornflowerblue;" data-toggle="tooltip" data-placement="top" title="Exibir Senha"></i>
                </td>
                <td>${account.status}</td>
                <td>${account.creationDate}</td>
                <td>
                    <button class="btn btn-primary btn-sm"><i class="bi bi-eye"></i></button>
                    <button class="btn btn-success btn-sm"><i class="bi bi-pencil-square"></i></button>
                    <button class="btn btn-danger btn-sm"><i class="bi bi-trash3"></i></button>
                </td>
            </tr>
        `).join('');
    }

    addEventListeners() {
        // Adicione os ouvintes de eventos após a tabela ser renderizada
        const copyIcons = document.querySelectorAll('.copy-icon');
        copyIcons.forEach(icon => {
            icon.addEventListener('click', () => this.copyToClipboard(icon));
        });
        
        const passwordToggleIcons = document.querySelectorAll('.password-toggle');
        passwordToggleIcons.forEach(icon => {
            icon.addEventListener('click', () => this.togglePasswordVisibility(icon));
        });
    }

    copyToClipboard(icon) {
        const action = icon.dataset.action;
        const row = icon.closest('tr');
        const targetElement = action === 'copy-email' ? row.querySelector('.email') : row.querySelector('.password-mask');

        const textToCopy = targetElement.textContent;
        const dummyElement = document.createElement('textarea');
        document.body.appendChild(dummyElement);
        dummyElement.value = textToCopy;
        dummyElement.select();
        document.execCommand('copy');
        document.body.removeChild(dummyElement);

        // Adicione um feedback visual ou mensagem ao usuário, se necessário
        this.showCopyAlert(action);
    }

    showCopyAlert(action) {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-success', 'position-fixed', 'top-0', 'start-50', 'translate-middle-x');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.textContent = `${action === 'copy-email' ? 'Email' : 'Senha'} copiado para a área de transferência!`;

        document.body.appendChild(alertDiv);

        // Remova o alerta após alguns segundos (opcional)
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 3000);
    }

    togglePasswordVisibility(icon) {
        const row = icon.closest('tr');
        const passwordElement = row.querySelector('.password-mask');
        const password = passwordElement.dataset.password;

        // Alterne a visibilidade da senha
        if (passwordElement.classList.contains('hidden')) {
            passwordElement.textContent = password;
            passwordElement.classList.remove('hidden');
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        } else {
            passwordElement.textContent = '•••••••';
            passwordElement.classList.add('hidden');
            icon.classList.remove('bi-eye-slash');
            icon.classList.add('bi-eye');
        }
    }
}
