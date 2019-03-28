import React from 'react';
import { Table } from "reactstrap";

class DataTable extends React.Component {
    render() {
        const firstColumn = this.props.y || this.props.labels;
        const secondColumn = this.props.x || this.props.values;

        return (
            <div>
                <Table hover striped size = "sm">
                    <tbody>
                            {secondColumn.map((value,index) => {
                                const first = firstColumn[index];
                                return(
                                    <tr>
                                        <th style = {{width: "60%"}} scope="column">{first}</th>
                                        <td style = {{width: "40%"}} >{value}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
        );
      }
}

export default DataTable;