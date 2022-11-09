import React from 'react'

function Dashboard() {
    return (
        //  Main content
        <>
            <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                {/* Header  */}
                <header class="bg-surface-primary border-bottom pt-6">
                    <div class="container-fluid">
                        <div class="mb-npx">
                            <div class="row align-items-center">
                                <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                                    {/* <!-- Title --> */}
                                    <h1 class="h2 mb-0 ls-tight">Transaction History</h1>
                                </div>
                                {/* <!-- Actions --> */}
                                <div class="col-sm-6 col-12 text-sm-end">
                                    <div class="mx-n1">
                                        <a
                                            href="#"
                                            class="btn d-inline-flex btn-sm btn-neutral mx-1"
                                        >
                                            <span class=" pe-2">
                                                <i class="bi bi-person"></i>
                                            </span>
                                            <span>Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Nav  */}
                            <ul class="nav nav-tabs mt-4 overflow-x border-0">
                                <li class="nav-item ">
                                    <a href="#" class="nav-link active">
                                        All transactions
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link font-regular">
                                        Debit
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link font-regular">
                                        Credit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            {/* main */}
            <main class="py-6 bg-surface-secondary">
                <div class="container-fluid">
                    {/* Card stats  */}
                    <div class="row g-6 mb-6">
                        <div class="col-xl-3 col-sm-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col">
                                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                                                Available Balance
                                            </span>
                                            <span class="h3 font-bold mb-0">$590.90</span>
                                        </div>
                                        <div class="col-auto">
                                            <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                <i class="bi bi-credit-card"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2 mb-0 text-sm">
                                        <span class="badge badge-pill bg-opacity-30 bg-success text-success me-2">
                                            <i class="bi bi-arrow-up me-1"></i>13%
                                        </span>
                                        <span class="text-nowrap text-xs text-muted">
                                            Since last month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-7">
                        <div class="card-header">
                            <h5 class="mb-0">Transactions</h5>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover table-nowrap">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">TimeStamp</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alex Waihenya</td>
                                        <td>Nov 9, 2021</td>
                                        <td>$100</td>
                                        <td>4:00PM</td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-sm btn-neutral">View</a>
                                            <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>Alex Waihenya</td>
                                        <td>Nov 9, 2021</td>
                                        <td>$100</td>
                                        <td>4:00PM</td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-sm btn-neutral">View</a>
                                            <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>Alex Waihenya</td>
                                        <td>Nov 9, 2021</td>
                                        <td>$100</td>
                                        <td>4:00PM</td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-sm btn-neutral">View</a>
                                            <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer border-0 py-5">
                            <span class="text-muted text-sm">
                                Showing 10 items out of 50 results found
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Dashboard;
