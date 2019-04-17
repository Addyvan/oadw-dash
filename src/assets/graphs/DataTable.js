import React from 'react';
import { Table, Row, Col } from "reactstrap";

class DataTable extends React.Component {
    render() {
        const firstColumn = this.props.y || this.props.labels;
        const secondColumn = this.props.x || this.props.values;

        return (
            <Row>
                <Col style = {{height: "100%", display: "block"}}>
                    <Table hover striped size = "sm" style = {{overflowY: "scroll", height: "440px", display: "block"}}>
                        <tbody>
                                {secondColumn.map((value,index) => {
                                    const first = firstColumn[index];
                                    return(
                                        <tr>
                                            <th style = {{width: "465px"}} scope="column">{first}</th>
                                            <td style = {{width: "465px"}} >{value}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
      }
}

export default DataTable;