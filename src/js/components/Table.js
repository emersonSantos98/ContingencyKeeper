// src/js/Table.js
export default function Table() {
    return `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@john.doe</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jane</td>
                    <td>Smith</td>
                    <td>@jane.smith</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    `;
}
