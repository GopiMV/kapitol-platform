import React, {Component} from 'react';

import NavBar from '../../shared/navbar';
import FooterComponent from '../../shared/footer';
import legislation from '../../../files/legislation.json';

class Legislation extends Component{

    componentDidMount(){
        document.title = "Legislation | Kapitol"
    }

    render(){
        const topic = this.props.match.params.keyword;
        const recentBills = legislation[0][topic]["recent_bills"];
        const recentBillsKeys = Object.keys(recentBills[0]);

        const RecentBillList = (props) => {
            const currentBillKey =  recentBillsKeys[0];
            return (
                <tr>
                    <td className="fw-600">{currentBillKey}</td>
                    <td className="set-border">
                        <table className="table table-responsive table-condensed text-center">
                            <tbody>
                                <tr>
                                    <td >{props.recentBill[currentBillKey].stage}</td>
                                    <td>{props.recentBill[currentBillKey].sponsorship_party}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table className="table table-responsive table-condensed text-center">
                            <tbody>
                            <tr>
                                <td className="ft-24">{props.recentBill[currentBillKey].results.pass}</td>
                                <td className="ft-24">{props.recentBill[currentBillKey].results.fail}</td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <table className="table table-responsive table-condensed text-center">
                            <tbody>
                                <tr>
                                    <td className="text-success ft-24">{props.recentBill[currentBillKey].results.yay}</td>
                                    <td className="text-danger ft-24">{props.recentBill[currentBillKey].results.Nay}</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            );
        };

        return(
            <div>
                <div>
                    <NavBar/>
                    <div className="text-center well bg-white">
                    <h1>115th Congressional Voting</h1>
                    <h1>{topic}</h1>
                    <p className="hash-text ft-16 middle-content">{legislation[0][topic]["description"]}</p>
                </div>
                </div>
                <div className="custom-table">
                    <table className="table table-responsive table-condensed">
                        <thead>
                        <tr>
                            <th><h4 className="">Recent Bills</h4>
                                <h5 className="text-info">
                                    <small>Recent bills put forth in Congress rela;ng to Gun Rights.<br />Click on the bill name to run it through our prediction algorithms, seen below.
                                    </small></h5>
                            </th>
                            <th><h4>Details</h4>
                                <h5 className="text-info">
                                    <small>Bill details, including bill placement in Congress and bill sponsoring party </small>
                                </h5>
                            </th>
                            <th className="wid-200">
                                <h4>Projection</h4>
                                <h5 className="text-info">
                                    <small>Kapitol algorithm predic;on for bill passage </small></h5></th>
                            <th className="wid-200"><h4>Results</h4>
                                <h5 className="text-info">
                                    <small>Bill results updated in real time. Results vary out of 100 or 435 depending on chamber</small>
                                </h5>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="table-bor-line">
                            <td></td>
                            <td className="set-border">
                                <div className="row">
                                    <div className="col-sm-6"><p className="p-10">Stage</p></div>
                                    <div className="col-sm-6">
                                        <p>Sponsoring <br />
                                            Stage Party</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col-sm-6"><p>Pass</p></div>
                                    <div className="col-sm-6">
                                        <p>Fail</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col-sm-6"><p>Yay</p></div>
                                    <div className="col-sm-6"><p>Nay</p></div>
                                </div>
                            </td>
                        </tr>
                        {
                            recentBills.map((bill,index) => {
                                return (
                                    <RecentBillList key={index} billkeys={recentBillsKeys[index]} recentBill={bill}/>
                                );
                            })
                        }
                        </tbody>

                    </table>
                    <div className="text-center m-b-30">
                        <h3 className="fw-600">Selected Bill:</h3>
                        <p className="hash-text">H.R 3928 - Domes;c Leasing Expenditures</p>
                    </div>
                </div>

                <FooterComponent />
            </div>
        );
    }
}

export default Legislation;
