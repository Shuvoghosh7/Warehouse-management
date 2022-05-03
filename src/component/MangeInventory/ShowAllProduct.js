import React from 'react';

const ShowAllProduct = ({ pd }) => {

    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Description</th>
                        <th scope="col">quantity</th>
                        <th scope="col">supplierName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pd.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.Description}</td>
                                    <td>{value.supplierName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllProduct;